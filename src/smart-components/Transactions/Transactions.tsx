import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAllTransactions } from "../../features/transactions/transactions.colslice";
import Transaction from "../Transaction/Transaction";

const Transactions = () => {

   const transactions = useSelector(selectAllTransactions);

   const transactionsUI = useMemo(() => {
      return transactions.map((transaction) => <Transaction {...transaction} />)
   }, [transactions])

   return <>
      {
         transactionsUI
      }
   </>
}

export default Transactions