import mongoose, { Schema, Document } from 'mongoose';

interface IAbout extends Document {
    title: string;
    description: string;
}

const AboutSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.model<IAbout>('About', AboutSchema);
