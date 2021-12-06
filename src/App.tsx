import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from './features/bank/bank.docslice';
import Bank from './components/Bank/Bank';
import Transactions from './smart-components/Transactions/Transactions';
import { useCallback } from 'react';

function App() {

  //executing the query
  const balance = useSelector(selectBalance);

  const dispatch = useDispatch();

  const getAllTransactions = useCallback(() => {
    dispatch({ type: "GET_TRANSACTIONS" });
  }, [dispatch])

  return (
    <div className="App">
      Balance : {balance}
      <Bank></Bank>
      <Transactions></Transactions>
      <button onClick={getAllTransactions}>Get All TRansactions</button>
    </div>
  );
}

export default App;
