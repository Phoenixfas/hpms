import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface PurchaseStatusState {
    value: string;
}

const initialState: PurchaseStatusState = {
    value: "pending",
};

export const purchaseStatusSlice = createSlice({
    name: "purchaseStatus",
    initialState,
    reducers: {
        setPurchaseStatus: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setPurchaseStatus } = purchaseStatusSlice.actions;

export const selectPurchaseStatus = (state: RootState) => state.purchaseStatus.value;

export default purchaseStatusSlice.reducer;