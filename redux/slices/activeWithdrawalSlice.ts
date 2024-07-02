import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with username, date, type, content, and date
export interface Withdrawal {
    _id: any;
    username: string;
    amount: number;
    date: string;
    status: string;
}

// define initial state
const initialState: Withdrawal = {
    _id: "",
    username: "",
    amount: 0,
    date: "",
    status: "",
};

// create slice
export const activeWithdrawalSlice = createSlice({
    name: "activeWithdrawal",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveWithdrawal: (state, action: PayloadAction<Withdrawal>) => {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.amount = action.payload.amount;
            state.date = action.payload.date;
            state.status = action.payload.status;
        },
    },
});


// export actions
export const { changeActiveWithdrawal } = activeWithdrawalSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveWithdrawal = (state: RootState) => state.activeWithdrawal;

// export reducer
export default activeWithdrawalSlice.reducer;
