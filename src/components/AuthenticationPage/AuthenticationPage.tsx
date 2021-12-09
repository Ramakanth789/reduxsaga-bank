import { Card, CardContent, Typography, CardActions, Button, TextField } from '@mui/material';
import './AuthenticationPage.css';
import Logo from "../../logo.png";
import { Field, Form } from 'react-final-form';
import { useCallback } from 'react';

const requiredValidator = (value:string) =>{
  console.log("checking required",value);
  return value ? undefined : "Required";
} 
//<TextField id="outlined-basic" label="User Name" variant="outlined" />
//<TextField id="outlined-password-input" label="Password" type="password"  autoComplete="current-password"
///>
export const BasicCard = () => {

  const onSubmit = useCallback((values) => {
 console.log(values);
  }, [])
  return (
    <Card style={{ width: "100%" }}>
      <CardContent className="login_form">
        <Form
          onSubmit={onSubmit}

          render={({ handleSubmit, invalid }) => (
            <form>
              <Field name="email" component="input" validate={requiredValidator}></Field>
              <Field name="password" component="input" validate={requiredValidator}></Field>
              <Button disabled={invalid} variant="contained" size="large" type="submit" onClick={handleSubmit}> Login </Button>

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