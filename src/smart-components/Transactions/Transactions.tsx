import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAllTransactions } from "../../features/transactions/transactions.colslice";
import Transaction from "../../components/Transaction/Transaction";

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

//Business or Smart or Container Components - We will directly fetch data and from props
//Rendering or Presentational or Pure Components - We will get data only from props

//We have to use Presentation comps inside Smart Component