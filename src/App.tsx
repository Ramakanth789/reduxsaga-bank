import './App.css';
import { useSelector } from 'react-redux';
import { selectBalance } from './features/bank/bank.docslice';
import Bank from './components/Bank/Bank';
import Transactions from './smart-components/Transactions/Transactions';

function App() {
  
  //executing the query
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      Balance : {balance}
      <Bank></Bank>
      <Transactions></Transactions>
    </div>
  );
}

export default App;
