import mongoose, {Document, Schema} from "mongoose";

export interface ICohort extends Document{
    cohortName: string; 
    description: string;
    programs: string;
    startDate: Date;
    endDate: Date
    image: string;


}

const cohortSchema:Schema = new mongoose.Schema({
    cohortName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    programs:{
        type:String,
        required: false,
    },
    startDate:{
        type:Date,
        required: true,
    },
    endDate:{
        type:Date,
        required: true,
    },
    image:{
        type: String,
        required: false,
    }
});

const Cohort =
 mongoose.models.Cohort || mongoose.model<ICohort>('Cohort',cohortSchema);
export default Cohort;