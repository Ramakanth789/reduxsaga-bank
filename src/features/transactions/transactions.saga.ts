import axios from 'axios';
import { takeEvery } from 'redux-saga/effects'


//Actual Business Logic
function* getTransactions() {

   const {data} = yield axios.get("https://vgsbank.herokuapp.com/transactions");

   console.log(data);

}


//Listen for the action
function* getTransactionsSaga() {
    yield takeEvery("GET_TRANSACTIONS", getTransactions)
}

export default getTransactionsSaga;