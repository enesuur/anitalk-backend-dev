import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITalk extends Document {
  title: string;
  snippet: string;
  date: Date;
  username: string;
  upvote: number;
  downvote: number;
  content: string | null;
}

const TalkSchema: Schema<ITalk> = new Schema({
  title: { type: String, required: true, trim: true },
  snippet: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  username: { type: String, required: true, trim: true },
  upvote: { type: Number, required: true, default: 0 },
  downvote: { type: Number, required: true, default: 0 },
  content: { type: String, default: null },
});

const TalkModel: Model<ITalk> =
  mongoose.models.Talk || mongoose.model<ITalk>("Talk", TalkSchema);

export default TalkModel;
