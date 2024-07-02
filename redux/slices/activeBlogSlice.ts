import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Blog {
    _id: any;
    patient: {};
    doctor: {};
    date: string;
    notes: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Blog = {
    _id: "",
    patient: {},
    doctor: {},
    date: "",
    notes: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeBlogSlice = createSlice({
    name: "activeBlog",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveBlog: (state, action: PayloadAction<Blog>) => {
            state._id = action.payload._id;
            state.patient = action.payload.patient;
            state.doctor = action.payload.doctor;
            state.notes = action.payload.notes;
            state.date = action.payload.date;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveBlog } = activeBlogSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveBlog = (state: RootState) => state.activeBlog;

// export reducer
export default activeBlogSlice.reducer;
