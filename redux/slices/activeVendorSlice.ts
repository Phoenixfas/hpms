import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
    name: string;
    image: string;
}
export interface Vendor {
    _id: string;
    first_name: string;
    last_name: string;
    company_name: string;
    company_website: string;
    email: string;
    job_title: string;
    country: string;
    region: string;
    phone: string;
    title: string;
    space_only: string;
    shell_scheme: string;
    product_category: string;
    logo: string;
    description: string;
    sectors: string[];
    vendor_loc: string;
    products: Product[];
    videos: string[];
    approved: boolean;
    goal: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Vendor = {
    _id: "",
    first_name: "",
    last_name: "",
    company_name: "",
    company_website: "",
    email: "",
    job_title: "",
    country: "",
    region: "",
    phone: "",
    title: "",
    space_only: "",
    shell_scheme: "",
    product_category: "",
    logo: "",
    description: "",
    sectors: [],
    vendor_loc: "",
    products: [],
    videos: [],
    approved: false,
    goal: "",
    type: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeVendorSlice = createSlice({
    name: "activeVendor",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveVendor: (state, action: PayloadAction<Vendor>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.company_name = action.payload.company_name;
            state.company_website = action.payload.company_website;
            state.email = action.payload.email;
            state.job_title = action.payload.job_title;
            state.country = action.payload.country;
            state.region = action.payload.region;
            state.phone = action.payload.phone;
            state.title = action.payload.title;
            state.space_only = action.payload.space_only;
            state.shell_scheme = action.payload.shell_scheme;
            state.product_category = action.payload.product_category;
            state.logo = action.payload.logo;
            state.description = action.payload.description;
            state.sectors = action.payload.sectors;
            state.vendor_loc = action.payload.vendor_loc;
            state.products = action.payload.products;
            state.videos = action.payload.videos;
            state.approved = action.payload.approved;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.goal = action.payload.goal;
            state.type = action.payload.type;
        },
    },
});


// export actions
export const { changeActiveVendor } = activeVendorSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveVendor = (state: RootState) => state.activeVendor;

// export reducer
export default activeVendorSlice.reducer;
