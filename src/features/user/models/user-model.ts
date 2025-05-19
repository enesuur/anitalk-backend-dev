import mongoose, { Schema, Document, Model, Mongoose } from "mongoose";
import { ITalk } from "@/features/talk/models/talk-model";

// TODO: It is for test we will fix that later.
interface IFavorite_Anime {
  name: string;
  japanese_name?: string;
}

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  display_name: string | null;
  avatar_url: string;
  birth_date: Date | null;
  cover_img_url: string | null;
  reddit_url: string | null;
  x_url: string | null;
  mal_url: string | null;
  favorite_animes: IFavorite_Anime[] | null;
  blocked_users: mongoose.Types.ObjectId[] | null;
  followers: mongoose.Types.ObjectId[] | null;
  followings: mongoose.Types.ObjectId[] | null;
  talks: ITalk[] | null;
  security_pin: number | null;
  created_at: Date;
  updated_at: Date;
}
// TODO: Temp schema will change later on.

const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 100,
    },
    password: { type: String, required: true, minlength: 6, maxlength: 256 },
    display_name: {
      type: String,
      default: null,
      maxlength: 50,
      unique: false,
      required: false,
    },
    avatar_url: { type: String, required: false, unique: false },
    birth_date: { type: Date, default: null, required: false, unique: false },
    cover_img_url: {
      type: String,
      default: null,
      required: false,
      unique: false,
    },
    reddit_url: { type: String, default: null, required: false, unique: false },
    x_url: { type: String, default: null, required: false, unique: false },
    mal_url: { type: String, default: null, required: false, unique: false },

    favorite_animes: {
      type: [Object],
      default: null,
      required: false,
      unique: false,
    },
    blocked_users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
        required: false,
        unique: false,
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
        required: false,
        unique: false,
      },
    ],
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
        required: false,
        unique: false,
      },
    ],
    talks: { type: [Object], default: null, required: false, unique: false },

    security_pin: {
      type: Number,
      default: null,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
