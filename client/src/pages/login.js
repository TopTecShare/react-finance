import React, { useState } from 'react';
import '../App.css';
import { Container, Button, Form, FormGroup, Label, Input, Card, Row, Col, FormFeedback} from 'reactstrap';
import Loginbutton from '../components/loginbutton'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import logo from '../images/Screenshot (178).png';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';


const Login = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false
  });

  const history = useHistory()
  const [state, setState] = useState({
    email: '',
    password: ''
   });
  
  const [validate, setValid] = useState({
   validateEmail: '',
   validatePassword: '', 
  }) 
  
  
const handleInputChange = event => setState({
    ...state,
    [event.target.name]: event.target.value,
  })

  const handleSubmit = user => {
    if(state.password === ''){
     setValid({validatePassword:true})
    }
    if(state.email === '' ){
     setValid({validateEmail:true})
    }

    axios.post(`auth/login`, state )
    .then(res => {
      // console.log(res);
      // console.log(res.data);  
      if (res.status === 200 ) {
        authState.isAuthenticated = true
        history.push('/mainpage');
        setAuthState();
      }  
    })
    .catch(function (error) {
      console.log(error);
      alert('Wrong username or password')
      window.location.reload();
    });
  }

  // console.log('state', state)
  const {email, password } = state

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
 
    return (
    <>
      <Container>
        <Row>
          <Col>
          <img src={logo} alt="Logo" id="logo" /> 
            <Button id="Popover1" type="button">
               About Crypto-Tracker
            </Button>
          <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
            <PopoverHeader>About</PopoverHeader>
            <PopoverBody>Your personalized finance app to track all potential cryptocurrency investments</PopoverBody>
          </Popover>
          </Col>
          <Col sm="2" id="home" style={{height: 500}}>
            <Card body className="login-card">
              <Form className="login-form">
                <h2 className="text-center">Welcome</h2>
                <h3 className="text-center">____________</h3>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input invalid={validate.validateEmail}  onChange = {handleInputChange} value = {email} type="email"  required name="email" placeholder="email" />
                  <FormFeedback>Please enter email</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input invalid={validate.validatePassword}   onChange = {handleInputChange} value = {password} type="password" required name="password" placeholder="password"/>
                  <FormFeedback>Please enter password</FormFeedback>
                </FormGroup>
                <Button  onClick={()=> handleSubmit(state)} className="but-lg btn-dark btn-block">Login</Button>
                <div className="text-center pt-3"> or sign in with Google account</div>
                <Loginbutton />
                <div className="text-center">
                  <a href="/signup"> Sign up</a>
                  <span className="p-2">|</span>
                  <a href="/ForgotPw">Forgot password</a>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    
    );
  }

export default Login;
