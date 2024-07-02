import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define purchase state as an object with title, image, desc, content, and date
export interface Purchase {
    _id: any;
    username: string;
    amount: number;
    tx_ref: string;
    item: string;
    provider: string;
    quantity: string;
    status: string;
    type: string;
    date: string;
}

// define initial state
const initialState: Purchase = {
    _id: "",
    username: "",
    amount: 0,
    tx_ref: "",
    item: "",
    provider: "",
    quantity: "",
    status: "",
    type: "",
    date: "",
};

// create slice
export const activePurchaseSlice = createSlice({
    name: "activePurchase",
    initialState,
    reducers: {
        // define action to change active purchase

        // @ts-ignore
        changeActivePurchase: (state, action: PayloadAction<Purchase>) => {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.amount = action.payload.amount;
            state.tx_ref = action.payload.tx_ref;
            state.item = action.payload.item;
            state.provider = action.payload.provider;
            state.quantity = action.payload.quantity;
            state.status = action.payload.status;
            state.type = action.payload.type;
            state.date = action.payload.date;
        },
    },
});

// export actions
export const { changeActivePurchase } = activePurchaseSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActivePurchase = (state: RootState) => state.activePurchase;

// export reducer
export default activePurchaseSlice.reducer;
