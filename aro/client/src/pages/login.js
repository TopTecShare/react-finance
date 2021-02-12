import React, { useState } from 'react';
import '../App.css';
import { Container, Button, Form, FormGroup, Label, Input, Card, Row, Col} from 'reactstrap';
import Loginbutton from '../components/loginbutton'
import Logoutbutton from '../components/logoutbutton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const history = useHistory()
  const [state, setState] = useState({
    email: '',
    password: ''
   });

const handleInputChange = event => setState({
    ...state,
    [event.target.name]: event.target.value,
  })

  const handleSubmit = user => {
    axios.post(`auth/login`, state )
    .then(res => {
      console.log(res);
      console.log(res.data);  
      if (res.status === 200 ) {
        history.push('/signup')
      }  
    })
  }

  console.log('state', state)
 const {email, password } = state
    return (
    <>
        <Col sm="4" id="home" style={{height: 1000}}>
          <Card body className="login-card">
            <Form className="login-form">
              <h2 className="text-center">React Finance</h2>
              <h3 className="text-center">Welcome</h3>
              <FormGroup>
                <Label>Email </Label> 
                <Input  onChange = {handleInputChange} value = {email} type="email" name="email" placeholder="email"required/>
              </FormGroup>
              <FormGroup>
                <Label>Password </Label> 
                <Input  onChange = {handleInputChange} value = {password} type="password" name="password" placeholder="password"
                required/>
              </FormGroup>
              <Button  onClick={()=> handleSubmit(state)} className="but-lg btn-dark btn-block">Login</Button>
              <div className="text-center pt-3"> or sign in with Google account
              </div>
              <Loginbutton />
              <Logoutbutton />
              <div className="text-center">
                <a href="/signup"> Sign up</a>
                <span className="p-2">|</span>
                <a href="/ForgotPw">Forgot password</a>
              </div>
            </Form>
          </Card>
        </Col>
    </>
    );
  }

export default Login;
