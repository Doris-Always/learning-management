import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value: cohortState;
};
export type ImageFile = {
    file: File;
    mimeType: string;
};

// const myImage : ImageFile = {
//     file: new File([], 'example.jpg', {type: 'image/jpeg'}),
//     mimeType: 'image/jpeg'
// };

export type cohortState = {
    cohortName: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    file: ImageFile | null|"";
   
}

const initialState = {
    value: {
        cohortName: "",
        description: "",
        program: "",
        startDate: "",
        endDate: "",
        file:  "",
    }as cohortState
}as InitialState;

export const createCohort = createSlice({
    name: "createCohort",
    initialState,
    reducers: {
        deleteForm: () => {
            return initialState;
        },
        saveCohort: (state, action : PayloadAction < cohortState >) => {
            const {
                cohortName,
                description,
                program,
                startDate,
                endDate,
                file
            } = action.payload;
            return {
                value: {
                    cohortName,
                    description,
                    program,
                    startDate,
                    endDate,
                    file
                }
              
            };
        }
    }
});

export const {
    deleteForm,
    saveCohort
} = createCohort.actions;

export default createCohort.reducer;
