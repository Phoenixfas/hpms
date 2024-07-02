import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";



// define user state as an object with title, image, desc, content, and date
export interface User {
    _id: any;
    profile: {
        personalInfo: {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            address: string;
            city: string;
            sex: string;
        };
        accountInfo: {
            username: string;
            password: string;
        };
        memberPlacement: string;
        bankInfo: {
            bankName: string;
            accountNumber: string;
        };
    };
    verified: boolean;
    referral: {
        referred: [
            {
                username: string;
                placement: string;
            }
        ];
        link: string;
    };
    rank: string;
    ep: [
        {
            amount: number;
            date: string;
            type: string;
            description: string;
        }
    ];
    balance: number;
    pendingWithdrawal: [
        {
            amount: number;
            date: string;
            status: string;
        }
    ];
    date: string;
    packageId: string;
}

// define initial state
const initialState: User = {
    _id: "",
    profile: {
        personalInfo: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            sex: "",
        },
        accountInfo: {
            username: "",
            password: "",
        },
        memberPlacement: "",
        bankInfo: {
            bankName: "",
            accountNumber: "",
        },
    },
    verified: false,
    referral: {
        referred: [
            {
                username: "",
                placement: "",
            },
        ],
        link: "",
    },
    rank: "",
    ep: [
        {
            amount: 0,
            date: "",
            type: "",
            description: "",
        },
    ],
    balance: 0,
    pendingWithdrawal: [
        {
            amount: 0,
            date: "",
            status: "",
        },
    ],
    date: "",
    packageId: "",
};

// create slice
export const activeUserSlice = createSlice({
    name: "activeUser",
    initialState,
    reducers: {
        // define action to change active user

        // @ts-ignore
        changeActiveUser: (state, action: PayloadAction<User>) => {
            state._id = action.payload._id;
            state.profile = action.payload.profile;
            state.verified = action.payload.verified;
            state.referral = action.payload.referral;
            state.rank = action.payload.rank;
            state.ep = action.payload.ep;
            state.balance = action.payload.balance;
            state.pendingWithdrawal = action.payload.pendingWithdrawal;
            state.date = action.payload.date;
            state.packageId = action.payload.packageId;
        },
    },
});

// export actions
export const { changeActiveUser } = activeUserSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveUser = (state: RootState) => state.activeUser;

// export reducer
export default activeUserSlice.reducer;
