import { Button } from "@mui/material";
import { useCallback } from "react"
import { Form } from "react-final-form"
import DepositAmountField from "./Fields/DepositAmountField/DepositAmountField";
import PaidIcon from '@mui/icons-material/Paid';
import DepositAmountMaterialField from "./Fields/DepositAmountMaterialField/DepositAmountMaterialField";
import { RememberMe } from "@mui/icons-material";
import RememberMeField from "./Fields/RememberMeField/RememberMeField";


const DepositForm = () => {
    const onSubmit = useCallback((values) => {
        console.log(values);

    }, []);

    const render = useCallback(({handleSubmit, submitError, invalid, form:{reset}}) => {
        // handleSubmit this function get trigged when your press enter or when you click button type is submit
        // submitError is a data which contains information by formError
        // invalid this value will be true any one of the field has wrong value
        // form 
        return <form onSubmit={handleSubmit}>
            {/* <DepositAmountField></DepositAmountField> */}
            <DepositAmountMaterialField></DepositAmountMaterialField> 
            <RememberMeField></RememberMeField>
            <Button variant="contained" color="info" size="large" endIcon={<PaidIcon></PaidIcon>} disabled={invalid}>Deposit</Button>
        </form> 

    }, []);
    return <>
        <Form onSubmit={onSubmit} render={render} initialValues={{rememberMe:true, depositAmount:1000}}></Form>

    </>
}

export default DepositForm