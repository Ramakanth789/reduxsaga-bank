import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '../../app/store'

//structure
export interface IBank {
    balance: number;
    fdBalance: number;
}

//initialstate
const initialState: IBank = {
    balance: 100,
    fdBalance: 0
}

//create a slice
//Name of the slice
//Initial State
//Pure Functions to modify the state (reducers)

//slice
const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {
        deposit: (state, action) => {
            const {payload:amount} = action
            state.balance = state.balance + Number(amount);
        },
        transfer: (state, action) => {
            const {payload:amount} = action
            state.balance = state.balance - Number(amount);
        }
    }
});

//actions - to call reducer functions to modify data
export const {deposit,transfer} = bankSlice.actions;

//selectors - full slice way
export const selectBank = (state: RootState) => state.bank;

//selector - to extract part of the slice or from multiple slices
export const selectBalance = createSelector(
    selectBank,
    (bank) => bank.balance
)

export const selectFdBalance = createSelector(
    selectBank,
    (bank) => bank.fdBalance
)

export default bankSlice;
