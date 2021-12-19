import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit as moneyCredit } from "../../features/bank/bank.docslice";
import { addTransaction } from "../../features/transactions/transactions.colslice";
import { v4 as generateUniqueId } from 'uuid';
import { Button, TextField } from "@mui/material";
import { BankActions } from "../../features/actions";
import { selectButtonState, setButtonState } from "../../features/auth/auth";
import DepositForm from "../DepositForm/DepositForm";

const Bank = () => {

    const dispatch = useDispatch();
    const buttonState = useSelector(selectButtonState);
    const [depositAmount,setDepositAmount] = useState<number>(0);
    const onDepositAmountChange = useCallback((e)=>{
        const value = e.target.value
        setDepositAmount(value);
    },[]) 

    const depositMoney = useCallback(() => {

        //dispatch({ type: 'bank/deposit', payload: {amount:depositInput.current.value} });
        dispatch(moneyCredit(depositAmount));

        dispatch({type:BankActions.SAVE_TRANSACTION_TO_SERVER,transaction:{
            date: (new Date()).toDateString(),
            amount: Number(depositAmount),
            transactionType: "deposit",
            currency:"INR"
        }})

        /*dispatch(addTransaction({
            transactionId: generateUniqueId(),
            date: (new Date()).toDateString(),
            amount: Number(depositAmount),
            transactionType: "deposit",
            currency:"INR",
            id:""
        }
        ))*/

    }, [depositAmount,dispatch])
    
    useEffect(()=>{
       if(depositAmount  > 0){
           dispatch(setButtonState(false))
       }
       else
       dispatch(setButtonState(true))
    },[dispatch,depositAmount])
  
    return <>
        {/* <TextField id="outlined-basic" label="Deposit Amount" variant="filled" type='number' value={depositAmount} onChange={onDepositAmountChange} /> */}
        {/* <input value={depositAmount} onChange={onDepositAmountChange}  type="number"></input> */}
        {/* <button onClick={depositMoney}>Deposit Balance</button> */}
        {/* <Button onClick={depositMoney} variant="contained" disabled={buttonState} >Deposit</Button> */}
        <DepositForm></DepositForm>
    </>
}

export default Bank;