import { InferSchemaType, Types } from "mongoose";
import { IUser } from "@/features/user/models/user-model";
import { LANG_CODES } from "@/locales/lang-code";

type MongooseUserDoc = Awaited<ReturnType<typeof UserModel.findById>>;
/* Extending express request object in the framework. */
declare global {
  namespace Express {
    interface Request {
      user?: MongooseUserDoc;
      lang?: LANG_CODES | null;
    }
  }
}
