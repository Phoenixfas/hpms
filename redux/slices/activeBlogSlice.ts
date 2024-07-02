import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Blog {
    _id: any;
    title: string;
    image: string;
    snippet: string;
    markdown: string;
    sanitizedHtml: string;
    date: string;
}

// define initial state
const initialState: Blog = {
    _id: "",
    title: "",
    image: "",
    snippet: "",
    markdown: "",
    sanitizedHtml: "",
    date: "",
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
            state.title = action.payload.title;
            state.image = action.payload.image;
            state.snippet = action.payload.snippet;
            state.markdown = action.payload.markdown;
            state.sanitizedHtml = action.payload.sanitizedHtml;
            state.date = action.payload.date;
        },
    },
});


// export actions
export const { changeActiveBlog } = activeBlogSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveBlog = (state: RootState) => state.activeBlog;

// export reducer
export default activeBlogSlice.reducer;
