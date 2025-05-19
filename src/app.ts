import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectMongoDB from "./connection/mongo-db";
import connectRedis from "./connection/redis";
import { RATE_LIMIT_MESSAGES } from "./constants/messages";
import cookieParser from "cookie-parser";
import router from "./routes/index";
import CONFIG from "./config";

const app = express();

/* Global Middlewares */
app.use(express.json({ limit: CONFIG.MAX_PAYLOAD_SIZE }));
app.use(express.urlencoded({ extended: true }));
app.use(compression() as unknown as express.RequestHandler);
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: CONFIG.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  rateLimit({
    max: CONFIG.COMMON_RATE_LIMIT_MAX_REQUESTS,
    windowMs: CONFIG.COMMON_RATE_LIMIT_WINDOW_MS,
    message: RATE_LIMIT_MESSAGES.COMMON_RATE_LIMIT,
  })
);

/* 
Connections
*/
connectMongoDB();
connectRedis();

/* Routes */
app.use(CONFIG.API_VERSION, router);

export default app;
