import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bankSlice from '../features/bank/bank.docslice';
import transactionsSlice from '../features/transactions/transactions.colslice';

export const store = configureStore({
  reducer: {
    bank : bankSlice.reducer,
    transactions: transactionsSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
