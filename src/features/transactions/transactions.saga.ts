import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'
import { updateTransactions, upsertTransactions } from './transactions.colslice';


//Actual Business Logic
function* getTransactions() {

   const {data} = yield axios.get("https://vgsbank.herokuapp.com/transactions");

   //In component if you want read data  - useSelector and query method
   //To modify data - useDispatch and action method

   //To read data inside saga we will "select"
   //To modify we will use "put"

   yield put(upsertTransactions(data))

}


//Listen for the action
function* getTransactionsSaga() {
    yield takeEvery("GET_TRANSACTIONS", getTransactions)
}

export default getTransactionsSaga;