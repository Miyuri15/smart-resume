import { Schema, model, Document, Types } from 'mongoose';

export interface IResume extends Document {
  user: Types.ObjectId;
  title: string;
  role: string;
  currentVersion: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema = new Schema<IResume>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  role: { type: String, required: true },
  currentVersion: { type: Schema.Types.ObjectId, ref: 'ResumeVersion' },
}, { timestamps: true });

export default model<IResume>('Resume', ResumeSchema);
