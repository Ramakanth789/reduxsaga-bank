import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "../../features/bank/bank.slice";

const Bank = () => {
    const depositInput = useRef<any>();

    const dispatch = useDispatch();

    const depositMoney = useCallback(() => {
        dispatch(deposit(depositInput.current.value));
    }, [dispatch])

    const [depositAmount,setDepositAmount] = useState<number>();
    const onDepositAmountChange = useCallback((e)=>{
        const value = e.target.value
        setDepositAmount(value<1000?value:value+10);
    },[])

    return <>
        <input ref={depositInput} type="number"></input>
        <input value={depositAmount} onChange={onDepositAmountChange}  type="number"></input>
        <button onClick={depositMoney}>Deposit Balance</button>
    </>
}

export default Bank