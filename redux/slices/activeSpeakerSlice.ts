import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date

export interface Speaker {
    _id: string;
    // speaker
    name: string;
    age: string;
    gender: string;
    medicalHistory: string;
    insuranceInfo: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Speaker = {
    _id: "",
    name: "",
    age: "",
    gender: "",
    medicalHistory: "",
    insuranceInfo: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeSpeakerSlice = createSlice({
    name: "activeSpeaker",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveSpeaker: (state, action: PayloadAction<Speaker>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.gender = action.payload.gender;
            state.medicalHistory = action.payload.medicalHistory;
            state.insuranceInfo = action.payload.insuranceInfo;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveSpeaker } = activeSpeakerSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveSpeaker = (state: RootState) => state.activeSpeaker;

// export reducer
export default activeSpeakerSlice.reducer;
