import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from './features/bank/bank.docslice';
import Bank from './components/Bank/Bank';
import Transactions from './smart-components/Transactions/Transactions';
import { useCallback } from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './components/AuthenticationPage/AuthenticationPage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import AppRoutes from './components/AppRoutes/AppRoutes';

function App() {
  return (
    <div className="App">
         <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
