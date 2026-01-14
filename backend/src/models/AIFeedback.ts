import { Schema, model, Document, Types } from 'mongoose';

export interface IAIFeedback extends Document {
  resumeVersion: Types.ObjectId;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  createdAt: Date;
}

const AIFeedbackSchema = new Schema<IAIFeedback>({
  resumeVersion: { type: Schema.Types.ObjectId, ref: 'ResumeVersion', required: true },
  score: { type: Number, required: true },
  strengths: [{ type: String }],
  weaknesses: [{ type: String }],
  suggestions: [{ type: String }],
}, { timestamps: { createdAt: true, updatedAt: false } });

export default model<IAIFeedback>('AIFeedback', AIFeedbackSchema);
