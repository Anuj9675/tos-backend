import mongoose, { Schema, Document } from 'mongoose';

interface ICareer extends Document {
    jobTitle: string;
    jobDescription: string;
    responsibilities: string[];
    skillsAndQualifications: string[];
    employmentType: string;
    experience: string;
    salary: string;
    jobLocation: string;
    timestamp: Date;
}

const CareerSchema: Schema = new Schema({
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    responsibilities: { type: [String], required: true },  // Modified to array of strings
    skillsAndQualifications: { type: [String], required: true },  // Modified to array of strings
    employmentType: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    jobLocation: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<ICareer>('Career', CareerSchema);
