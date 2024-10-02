import mongoose, { Schema, Document } from 'mongoose';

interface ICareer extends Document {
    jobTitle: string;
    jobDescription: string;
    responsibilities: string;
    skillsAndQualifications: string;
    employmentType: string;
    experience: string;
    salary: string;
    jobLocation: string;
    hiringInsights: string;
}

const CareerSchema: Schema = new Schema({
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    responsibilities: { type: String, required: true },
    skillsAndQualifications: { type: String, required: true },
    employmentType: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    jobLocation: { type: String, required: true },
    hiringInsights: { type: String, required: true },
});

export default mongoose.model<ICareer>('Career', CareerSchema);
