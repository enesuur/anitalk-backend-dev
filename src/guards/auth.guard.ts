import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import mongoose from "@/lib/mongoose";
import { AUTH_MESSAGES } from "@/constants/messages";
import { HTTP_CODE } from "@/http/constants";
import UserModel from "@/features/user/models/user-model";
import CONFIG from "@/config";

const authGuard = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(HTTP_CODE.UNAUTHORIZED)
      .json({ message: AUTH_MESSAGES.UNAUTHORIZED });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET_KEY);

    if (typeof decoded === "string") {
      return res
        .status(HTTP_CODE.UNAUTHORIZED)
        .json({ message: AUTH_MESSAGES.INVALID_TOKEN });
    }

    const userId = (decoded as any).userId || (decoded as any)._id;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(HTTP_CODE.UNAUTHORIZED)
        .json({ message: AUTH_MESSAGES.INVALID_TOKEN });
    }

    const user = await UserModel.findById(userId).exec();

    if (!user) {
      return res
        .status(HTTP_CODE.UNAUTHORIZED)
        .json({ message: AUTH_MESSAGES.UNAUTHORIZED });
    }

    req.user = user;
    next();
  } catch {
    res
      .status(HTTP_CODE.UNAUTHORIZED)
      .json({ message: AUTH_MESSAGES.INVALID_TOKEN });
  }
};

export default authGuard;
