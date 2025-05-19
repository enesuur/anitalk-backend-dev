import { Router } from "express";
import authRouter from "../features/auth/routers/index";

const routes = Router();

routes.use(authRouter);

export default routes;
