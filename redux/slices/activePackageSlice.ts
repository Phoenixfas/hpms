import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface Package {
    _id: any;
    patient: Object;
    doctor: Object;
    notes: string;
    diagnosis: string;
    treatmentPlan: string;
    labResults: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Package = {
    _id: "",
    patient: {},
    doctor: {},
    notes: "",
    diagnosis: "",
    treatmentPlan: "",
    labResults: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activePackageSlice = createSlice({
    name: "activePackage",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActivePackage: (state, action: PayloadAction<Package>) => {
            state._id = action.payload._id;
            state.patient = action.payload.patient;
            state.doctor = action.payload.doctor;
            state.notes = action.payload.notes;
            state.diagnosis = action.payload.diagnosis;
            state.treatmentPlan = action.payload.treatmentPlan;
            state.labResults = action.payload.labResults;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActivePackage } = activePackageSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActivePackage = (state: RootState) => state.activePackage;

// export reducer
export default activePackageSlice.reducer;
