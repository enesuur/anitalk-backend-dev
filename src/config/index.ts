const CONFIG: Readonly<{
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
  MONGO_URI: string;
  JWT_SECRET_KEY: string;
  CORS_ORIGIN: string;
  HOST: string;
  COMMON_RATE_LIMIT_WINDOW_MS: number;
  COMMON_RATE_LIMIT_MAX_REQUESTS: number;
  MAX_PAYLOAD_SIZE: string;
  API_VERSION: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD?: string;
  REDIS_DB: number;
}> = {
  PORT: Number(process.env.PORT) || 8000,
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "production" | "test") ||
    "development",
  HOST: process.env.HOST || "localhost",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/test",
  JWT_SECRET_KEY: process.env.JWT_SECRET || "default_secret",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  COMMON_RATE_LIMIT_WINDOW_MS:
    Number(process.env.COMMON_RATE_LIMIT_WINDOW_MS) || 360000000,
  COMMON_RATE_LIMIT_MAX_REQUESTS:
    Number(process.env.COMMON_RATE_LIMIT_MAX_REQUESTS) || 1000000,
  MAX_PAYLOAD_SIZE: Number(process.env.MAX_PAYLOAD_SIZE) + "mb" || "10mb",
  API_VERSION: process.env.API_VERSION || "/api/v1",
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || undefined,
  REDIS_DB: Number(process.env.REDIS_DB) || 0,
};

const AWS_CONFIG: Readonly<{
  HOST: string;
  KEY: string;
}> = {
  HOST: process.env.AWS_HOST || "https://aws.default.endpoint",
  KEY: process.env.AWS_KEY || "",
};

const AZURE_CONFIG: Readonly<{
  HOST: string;
  KEY: string;
}> = {
  HOST: process.env.AZURE_HOST || "https://azure.default.endpoint",
  KEY: process.env.AZURE_KEY || "",
};

Object.freeze([AWS_CONFIG, AZURE_CONFIG, CONFIG]);
export { AWS_CONFIG, AZURE_CONFIG };
export default CONFIG;
