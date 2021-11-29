import React from "react";
import { ITransaction } from "../../features/transactions/transactions.colslice";
import './Transaction.css'

export interface TransactionProps extends ITransaction, React.ComponentPropsWithoutRef<any> {

}

const Transaction = (props: TransactionProps) => {

    const { amount, date, transactionType, currency } = props;

    return <div className="TransactionWrapper">
        <div>{date}</div>
        <div>{amount}</div>
        <div>{transactionType}</div>
        <div>{currency}</div>
    </div>
}

export default Transaction