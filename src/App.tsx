import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from './features/bank/bank.slice';
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
