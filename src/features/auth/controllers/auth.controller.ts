import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "@/features/user/models/user-model";
import { HTTP_CODE } from "@/http/constants";
import { AUTH_MESSAGES } from "@/constants/messages";
import safeCompare from "../helpers/timing-attack-guard";
import CONFIG from "@/config";

const SALT_ROUNDS = 10;
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// TODO: Safe compare.

/* Bearer TOKEN based authentication */
export const postSignup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({ message: AUTH_MESSAGES.MISSING_FIELDS });
  }

  if (!email.match(emailPattern)) {
    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({ message: AUTH_MESSAGES.INVALID_EMAIL });
  }

  if (password.length < 6 || password.length > 512) {
    return res.status(HTTP_CODE.BAD_REQUEST).json({
      message: AUTH_MESSAGES.INVALID_PASSWORD,
    });
  }

  try {
    const existingUser = await UserModel.findOne({ email }).exec();

    if (existingUser) {
      return res
        .status(HTTP_CODE.CONFLICT)
        .json({ message: AUTH_MESSAGES.USER_EXISTS });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new UserModel({
      email: email.trim(),
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, CONFIG.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(HTTP_CODE.CREATED).json({
      message: AUTH_MESSAGES.USER_REGISTERED,
      data: {
        token: token,
        _id: newUser._id,
      },
    });
  } catch (error) {
    console.error(error);
    res
      .status(HTTP_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: AUTH_MESSAGES.SERVER_ERROR });
  }
};

export const postSignin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({ message: AUTH_MESSAGES.MISSING_FIELDS });
  }

  if (password.length < 6 || password.length > 256) {
    return res
      .status(HTTP_CODE.BAD_REQUEST)
      .json({ message: AUTH_MESSAGES.INVALID_PASSWORD });
  }

  try {
    const user = await UserModel.findOne({ email: email.trim() }).exec();

    if (!user) {
      return res
        .status(HTTP_CODE.UNAUTHORIZED)
        .json({ message: AUTH_MESSAGES.INVALID_CREDENTIALS });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(HTTP_CODE.UNAUTHORIZED)
        .json({ message: AUTH_MESSAGES.INVALID_CREDENTIALS });
    }

    const token = jwt.sign({ userId: user._id }, CONFIG.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    return res.status(HTTP_CODE.OK).json({
      message: AUTH_MESSAGES.SIGNIN_SUCCESS,
      data: {
        token: token,
        user: {
          _id: user._id,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(HTTP_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: AUTH_MESSAGES.SERVER_ERROR });
  }
};
