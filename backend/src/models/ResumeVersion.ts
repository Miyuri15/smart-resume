import { Schema, model, Document, Types } from 'mongoose';

export interface IResumeVersion extends Document {
  resume: Types.ObjectId;
  data: any;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeVersionSchema = new Schema<IResumeVersion>({
  resume: { type: Schema.Types.ObjectId, ref: 'Resume', required: true },
  data: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

export default model<IResumeVersion>('ResumeVersion', ResumeVersionSchema);
