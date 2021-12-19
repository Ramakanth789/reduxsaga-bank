import { useCallback } from "react";
import { Field } from "react-final-form";
import { requiredValidator } from "../../../../utilities/validators/requiredValidator";

const DepositAmountField = () => {
        const render = useCallback(({input, meta:{error, touched}}) =>{
            return  <>
            <input {...input}></input>
            {touched && error && <span>Error</span>}
            </>
        },[])
    return<>
        <Field name="depositAmount" render={render} validate={requiredValidator}></Field>
    </>
}

export default DepositAmountField;