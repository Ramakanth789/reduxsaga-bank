import './App.css';
import { useSelector } from 'react-redux';
import { selectBalance } from './features/bank/bank.docslice';
import Bank from './components/Bank/Bank';

function App() {
  
  //executing the query
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      Balance : {balance}
      <Bank></Bank>
    </div>
  );
}

export default App;
