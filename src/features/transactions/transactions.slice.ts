import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

//structure
//adapter
//initialstate

export interface ITransaction {
    id:string;
    date: string;
    amount: number;
    transactionType: string;
}

const entityAdapter = createEntityAdapter<ITransaction>({});

const initialState = entityAdapter.getInitialState();

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction: entityAdapter.addOne
    }
})

export const { addTransaction } = transactionsSlice.actions;

export const { selectAll: selectTransactions } = entityAdapter.getSelectors((state: RootState) => state.transactions)

export default transactionsSlice
 








