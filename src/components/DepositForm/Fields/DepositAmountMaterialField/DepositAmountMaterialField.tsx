import { TextField } from "@mui/material";
import { useCallback } from "react";
import { Field } from "react-final-form";
import { requiredValidator } from "../../../../utilities/validators/requiredValidator";

const DepositAmountMaterialField = () => {
        const render = useCallback(({input, meta:{error, touched}}) =>{
            return  <>
           
            <TextField  {...input} id="outlined-basic" label="Outlined" variant="outlined" />
            {touched && error && <span>Error</span>}
            </>
        },[])
    return<>
        <Field name="depositAmount" render={render} validate={requiredValidator}></Field>
    </>
}

export default DepositAmountMaterialField;