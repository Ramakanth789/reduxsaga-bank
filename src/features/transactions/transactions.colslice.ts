import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

//structure
//adapter
//initialstate

export interface ITransaction {
    _id: string;
    date: string;
    amount: number;
    transactionType: string;
    currency :string;
}

const entityAdapter = createEntityAdapter<ITransaction>({
    selectId: (transaction: ITransaction) => transaction._id
});

const initialState = entityAdapter.getInitialState();

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        //CRUD
        //C- Create
        addTransaction: entityAdapter.addOne,
        addTransactions: entityAdapter.addMany,

        //R
        //Use selectors

        //U - Update
        updateTransaction: entityAdapter.updateOne,
        updateTransactions: entityAdapter.updateMany,

        //D- Delete
        removeTransaction: entityAdapter.removeOne,
        removeTransactions: entityAdapter.removeMany,
        removeAllTransactions: entityAdapter.removeAll,

        //Upsert
        upsertTransaction: entityAdapter.upsertOne,
        upsertTransactions: entityAdapter.upsertMany,

        //Set
        setTransaction: entityAdapter.setOne,
        setTransactions: entityAdapter.setMany,
        setAllTransactions: entityAdapter.setAll
    }
})

export const {
    addTransaction,
    addTransactions,
    updateTransaction,
    updateTransactions,
    removeTransaction,
    removeTransactions,
    upsertTransaction,
    upsertTransactions,
    setTransaction,
    setTransactions,
    setAllTransactions
} = transactionsSlice.actions;

// Read - Need Selectors
export const { selectAll: selectAllTransactions } = entityAdapter.getSelectors((state: RootState) => state.transactions)

export const selectTransactions = (start: number, end: number) => createSelector(
    selectAllTransactions,
    (transactions) => transactions.splice(start, end - start + 1)
)


export default transactionsSlice









