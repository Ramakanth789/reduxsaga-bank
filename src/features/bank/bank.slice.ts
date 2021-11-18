import { createSlice } from "@reduxjs/toolkit"
import { useReducer } from "react"

export interface IBank {
    balance: number;
    fdBalance: number;
}

const initialState: IBank = {
    balance: 0,
    fdBalance: 0
}

//create a slice
//Name of the slice
//Initial State
//Pure Functions to modify the state (reducers)

const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {
        desposit: (state,action) => {
            state.balance = state.balance + action.payload
        },
        transfer: (state,action) => {
            state.balance = state.balance - action.payload
        }
    }
});

export default bankSlice;
