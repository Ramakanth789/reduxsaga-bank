import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from '../../features/bank/bank.docslice';
import Transactions from '../../smart-components/Transactions/Transactions';
import Bank from '../Bank/Bank';
import './DashboardPage.css'
const DashboardPage = () => {
    //executing the query
    const dispatch = useDispatch();
    const balance = useSelector(selectBalance);
    const getAllTransactions = useCallback(() => {
        dispatch({ type: "GET_TRANSACTIONS" });
    }, [dispatch])
    return <>
        <div >
            <h1 className="MuiTypography-h1 ">Balance : {balance}</h1>
        </div>
        <Bank></Bank>
        <Transactions></Transactions>
        <Button variant="outlined" onClick={getAllTransactions}>Get All Transactions</Button>
    </>
}

export default DashboardPage;