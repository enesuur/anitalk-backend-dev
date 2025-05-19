import { Router } from "express";
import { postSignup, postSignin } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/sign-up", postSignup);
authRouter.post("/sign-in", postSignin);

export default authRouter;
