import { createSelector, createSlice } from "@reduxjs/toolkit"
import { useReducer } from "react"
import { RootState } from '../../app/store'

export interface IBank {
    balance: number;
    fdBalance: number;
}

const initialState: IBank = {
    balance: 100,
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
        deposit: (state, action) => {
            console.log("*****************deposit")
            console.log(state)
            console.log(action)
            state.balance = state.balance + Number(action.payload);
        },
        transfer: (state, action) => {
            console.log("transfer")
            state.balance = state.balance - Number(action.payload);
        }
    }
});

export const {deposit,transfer} = bankSlice.actions;


export const selectBank = (state: RootState) => state.bank;

export const selectBalance = createSelector(
    selectBank,
    (bank) => bank.balance
)

export default bankSlice;
