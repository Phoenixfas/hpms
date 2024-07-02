import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface PurchaseTypeState {
    value: string;
}

const initialState: PurchaseTypeState = {
    value: "user",
};

export const purchaseTypeSlice = createSlice({
    name: "purchaseType",
    initialState,
    reducers: {
        setPurchaseType: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setPurchaseType } = purchaseTypeSlice.actions;

export const selectPurchaseType = (state: RootState) => state.purchaseType.value;

export default purchaseTypeSlice.reducer;