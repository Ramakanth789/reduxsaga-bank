import { TextField } from "@mui/material";
import { useCallback } from "react";

const TextFieldAdapter = ({input, ...rest}:any) => {

 const onChange = useCallback ((e) => {
     input.onChange(e.target.value);
 }, [input])
 
    return<>
    <TextField {...input} onChange={onChange} {...rest}></TextField>
    </>
}

export default TextFieldAdapter;

// Rules
//0. Add component arguments
//1. Return  the actualy component
//2. Add onChange CallBack
//3. connect textFiled onChange and input onCHange
