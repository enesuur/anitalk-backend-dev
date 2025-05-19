import Redis from "ioredis";
import CONFIG from "../config";

/**
 * Redis'e bağlantı kurar ve olayları dinler.
 * @returns {Redis} Redis bağlantı örneği
 */
const connectRedis = (): Redis => {
  const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
    db: Number(process.env.REDIS_DB) || 0,
    maxRetriesPerRequest: 3,
    connectTimeout: 10000,
    lazyConnect: false,
    enableOfflineQueue: false,
    retryStrategy: (times) => {
      const delay = Math.min(times * 50, 2000);
      return delay;
    },
  });

  redis.on("connect", () => {
    if (CONFIG.NODE_ENV !== "test") {
      console.log("🟢 Redis connected.");
    }
  });

  redis.on("error", (err) => {
    console.error("🔴 Redis connection error:", err);
  });

  redis.on("close", () => {
    console.warn("🟠 Redis connection closed.");
  });

  return redis;
};

export default connectRedis;
