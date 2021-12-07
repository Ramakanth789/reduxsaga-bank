import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deposit as moneyCredit } from "../../features/bank/bank.docslice";
import { addTransaction } from "../../features/transactions/transactions.colslice";
import { v4 as generateUniqueId } from 'uuid';
import { Button, TextField } from "@mui/material";

const Bank = () => {

    const dispatch = useDispatch();

    const [depositAmount,setDepositAmount] = useState<number>(0);
    const onDepositAmountChange = useCallback((e)=>{
        const value = e.target.value
        setDepositAmount(value);
    },[]) 

    console.log('Hello');

    const depositMoney = useCallback(() => {

        //dispatch({ type: 'bank/deposit', payload: {amount:depositInput.current.value} });
        dispatch(moneyCredit(depositAmount));
        dispatch(addTransaction({
            transactionId: generateUniqueId(),
            date: (new Date()).toDateString(),
            amount: Number(depositAmount),
            transactionType: "deposit",
            currency:"INR"
        }
        ))

    }, [depositAmount,dispatch])

    return <>
        <TextField id="outlined-basic" label="Deposit Amount" variant="filled" type='number' value={depositAmount} onChange={onDepositAmountChange} />
        {/* <input value={depositAmount} onChange={onDepositAmountChange}  type="number"></input> */}
        {/* <button onClick={depositMoney}>Deposit Balance</button> */}
        <Button onClick={depositMoney} variant="contained">Contained</Button>
    </>
}

export default Bank