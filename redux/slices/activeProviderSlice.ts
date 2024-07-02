import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define provider state as an object with title, image, desc, content, and date
export interface Provider {
    _id: any;
    name: string;
    email: number;
    phone: string;
    products: [
        {
            _id: any;
            name: string;
            price: number;
            quantity: string;
            description: string;
        }
    ];
    productId: any;
}

// define initial state
const initialState: Provider = {
    _id: "",
    name: "",
    email: 0,
    phone: "",
    products: [
        {
            _id: "",
            name: "",
            price: 0,
            quantity: "",
            description: "",
        },
    ],
    productId: "",
};

// create slice
export const activeProviderSlice = createSlice({
    name: "activeProvider",
    initialState,
    reducers: {
        // define action to change active provider

        // @ts-ignore
        changeActiveProvider: (state, action: PayloadAction<Provider>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.products = action.payload.products;
            state.productId = action.payload.productId;
        },
    },
});

// export actions
export const { changeActiveProvider } = activeProviderSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveProvider = (state: RootState) => state.activeProvider;

// export reducer
export default activeProviderSlice.reducer;
