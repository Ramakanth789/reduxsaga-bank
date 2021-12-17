import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import { BankActions } from "../actions";


function* saveTransaction(action:any){
     console.log("HEy I am save saga");
     console.log(action);

     const {transaction} =action;

     const {data} = yield axios.post("https://vgsbank.herokuapp.com/transactions",transaction);

     console.log(data);
}

function* saveTransactionSaga (){
    yield takeEvery(BankActions.SAVE_TRANSACTION_TO_SERVER,saveTransaction);
}

export default saveTransactionSaga;