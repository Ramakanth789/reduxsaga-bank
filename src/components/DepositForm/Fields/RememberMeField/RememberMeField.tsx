import { Switch } from "@mui/material";
import { useCallback } from "react";
import { Field } from "react-final-form";
import { requiredValidator } from "../../../../utilities/validators/requiredValidator";

const RememberMeField = () => {
        const render = useCallback(({input, meta:{error, touched}}) =>{
            return  <>
           <Switch {...input} checked={input.value} onChange={(e)=> input.onChange(e.target.checked)}></Switch>
            {touched && error && <span>Error</span>}
            </>
        },[]) 
    return<>
        <Field name="rememberMe" render={render} validate={requiredValidator}></Field>
    </>
}

export default RememberMeField;