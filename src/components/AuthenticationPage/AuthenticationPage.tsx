import { Card, CardContent, Typography, CardActions, Button, TextField } from '@mui/material';
import './AuthenticationPage.css';
import Logo from "../../logo.png";
import { Field, Form } from 'react-final-form';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TextFieldAdapter from '../TextFieldAdapter/TextFieldAdapter';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';

const requiredValidator = (value: string) => {
  console.log("checking required", value);
  return value ? undefined : "Required";
}

//http://emailregex.com/
const emailValidator = (value: string) => {
  const result = value?.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
  return result ? undefined : "Email is not proper";
}
//<TextField id="outlined-basic" label="User Name" variant="outlined" />
//<TextField id="outlined-password-input" label="Password" type="password"  autoComplete="current-password"
///>
export const BasicCard = () => {

  const navigate = useNavigate();

  const onSubmit = useCallback(async (values) => {
    console.log(values);
    const result = await axios.post('http://localhost:4444/auth/validate', values);
    console.log(result);
    if (result.data ) {
      navigate("./dashboard")
    }else{
      return { [FORM_ERROR]: 'Login Failed' }
    }
    // navigate("./dashboard")
  }, []);

  const emailInputRender = useCallback(({ input, meta }) => {
    return <>
     <TextFieldAdapter input={input}></TextFieldAdapter>
      {meta.touched && meta?.error && <span>Email Not Valid</span>}
    </>
  }, []);

  const passwordInputRender = useCallback(({ input, meta }) => {
    return <>
     <TextFieldAdapter input={input} type="password"></TextFieldAdapter>
      {meta.touched && meta?.error && <span>Password is Requried</span>}
    </>
  }, []);


  return (
    <Card style={{ width: "100%" }}>
      <CardContent className="login_form">
        <Form
          onSubmit={onSubmit}

          render={({ handleSubmit, invalid , submitError, form}) => (
            <form className='LoginBlock_Wrapper'>
              <Field name="email" validate={emailValidator} render={emailInputRender}/>
              <Field name="password" validate={requiredValidator} render={passwordInputRender}></Field>
              <Button disabled={invalid} variant="contained" size="large" type="submit" onClick={handleSubmit}> Login </Button>
              <Button variant="contained" size="large" onClick={() => form.reset() }> Reset </Button>
              {submitError && <div className="error">{submitError}</div>}
            </form>
          )}></Form>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}
const AuthenticationPage = () => {

  return <>
    <div className="AuthenticationPage_Wrapper">
      <div className="LoginBlock_Wrapper">
        <img src={Logo} className="logo" />
        <BasicCard></BasicCard>
      </div>
    </div>
  </>
}


export default AuthenticationPage;