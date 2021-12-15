import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bankSlice from '../features/bank/bank.docslice';
import transactionsSlice from '../features/transactions/transactions.colslice';
import createSagaMiddleware from 'redux-saga';
import getTransactionsSaga from '../features/transactions/transactions.saga';
import authSlice from '../features/auth/auth';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getMiddlewares) => [...getMiddlewares(), sagaMiddleware],
  reducer: {
    bank: bankSlice.reducer,
    transactions: transactionsSlice.reducer,
    auth:authSlice.reducer
  },
});

sagaMiddleware.run(getTransactionsSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
