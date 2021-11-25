import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deposit as moneyCredit } from "../../features/bank/bank.docslice";
import { addTransaction } from "../../features/transactions/transactions.colslice";

const Bank = () => {

    const depositInput = useRef<any>();

    const dispatch = useDispatch();

    const depositMoney = useCallback(() => {

        //dispatch({ type: 'bank/deposit', payload: {amount:depositInput.current.value} });
        dispatch(moneyCredit(depositInput.current.value));
        dispatch(addTransaction({
            transactionId: String(Math.random()),
            date: (new Date()).toDateString(),
            amount: depositInput.current.value,
            transactionType: "deposit"
        }
        ))

    }, [dispatch])

    /* const [depositAmount,setDepositAmount] = useState<number>();
    const onDepositAmountChange = useCallback((e)=>{
        const value = e.target.value
        setDepositAmount(value<1000?value:value+10);
    },[]) */

    return <>
        <input ref={depositInput} type="number"></input>
        {/* <input value={depositAmount} onChange={onDepositAmountChange}  type="number"></input> */}
        <button onClick={depositMoney}>Deposit Balance</button>
    </>
}

export default Bank