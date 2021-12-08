import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAllTransactions } from "../../features/transactions/transactions.colslice";
import Transaction from "../../components/Transaction/Transaction";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transactions = () => {

   const transactions = useSelector(selectAllTransactions);

   const transactionsUI = useMemo(() => {
      return transactions.map((transaction) => <Transaction key={transaction.transactionId} {...transaction} />)
   }, [transactions])

   return <>

      {
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Date</TableCell>
                     <TableCell align="left">Amount</TableCell>
                     <TableCell align="left">Transaction Type</TableCell>
                     <TableCell align="left">Currency</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {
                     transactionsUI


                  }
               </TableBody>

            </Table>
         </TableContainer>
      }
   </>
}

export default Transactions

//Business or Smart or Container Components - We will directly fetch data and from props
//Rendering or Presentational or Pure Components - We will get data only from props

//We have to use Presentation comps inside Smart Component