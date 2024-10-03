import mongoose, { Schema, Document } from 'mongoose';

interface IFAQ extends Document {
    question: string;
    answer: string;
    timestamp: Date;
}

const FAQSchema: Schema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IFAQ>('FAQ', FAQSchema);
