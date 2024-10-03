import mongoose, { Schema, Document } from 'mongoose';

interface IService extends Document {
    title: string;
    description: string;
    timestamp: Date;
}

const ServiceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IService>('Service', ServiceSchema);
