import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the cohort document
export interface ICohort extends Document {
    cohortName: string;
    description: string;
    programs: string;
    startDate: Date;
    endDate: Date;
    // image: string;
}

// Define the schema for the cohort collection
const cohortSchema: Schema<ICohort> = new Schema({
    cohortName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    programs: {
        type: String,
        required: false,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    // image: {
    //     type: String,
    //     required: false,
    // }
});

// Create and export the cohort model
const Cohort = mongoose.models.Cohort || mongoose.model<ICohort>('Cohort', cohortSchema);
export default Cohort;