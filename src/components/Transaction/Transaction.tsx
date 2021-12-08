import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from "react";
import { ITransaction } from "../../features/transactions/transactions.colslice";
import './Transaction.css'

export interface TransactionProps extends ITransaction, React.ComponentPropsWithoutRef<any> {

}

const Transaction = (props: TransactionProps) => {

  const { amount, date, transactionType, currency } = props;

  return (
    <TableRow>
      <TableCell align="left">{date}</TableCell>
      <TableCell align="left">{amount}</TableCell>
      <TableCell align="left">{transactionType}</TableCell>
      <TableCell align="left">{currency}</TableCell>
    </TableRow>
  )

}

export default Transaction