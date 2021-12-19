import { Card, CardContent, CardActions, Button } from '@mui/material';
import './AuthenticationPage.css';
import Logo from "../../logo.png";
import { Field, Form } from 'react-final-form';
import { useCallback } from 'react';
import TextFieldAdapter from '../TextFieldAdapter/TextFieldAdapter';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../features/auth/auth';
import { emailValidator } from '../../utilities/validators/emailValidator';
import { requiredValidator } from '../../utilities/validators/requiredValidator';


//<TextField id="outlined-basic" label="User Name" variant="outlined" />
//<TextField id="outlined-password-input" label="Password" type="password"  autoComplete="current-password"
///>

export const BasicCard = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (values) => {
    console.log(values);
    const result = await axios.post('http://localhost:4444/auth/validate', values);
    console.log(result);
    if (result.data) {
      localStorage.setItem('loggedIn', "true");
      dispatch(setLoggedIn(true))
    } else {
      return { [FORM_ERROR]: 'Login Failed' }
    }
  }, [dispatch]);

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

          render={({ handleSubmit, invalid, submitError, form }) => (
            <form className='LoginBlock_Wrapper'>
              <Field name="email" validate={emailValidator} render={emailInputRender} />
              <Field name="password" validate={requiredValidator} render={passwordInputRender}></Field>
              <Button disabled={invalid} variant="contained" size="large" type="submit" onClick={handleSubmit}> Login </Button>
              <Button variant="contained" size="large" onClick={() => form.reset()}> Reset </Button>
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
        <img src={Logo} className="logo" alt="Logo" />
        <BasicCard></BasicCard>
      </div>
    </div>
  </>
}


export default AuthenticationPage;