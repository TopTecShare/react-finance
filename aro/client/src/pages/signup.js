import React, { useState } from 'react';
import '../App.css';
import { Container, Button, Form, FormGroup, Input, Card, Row, Col} from 'reactstrap';
import Footer from '../components/footer'
import Loginbutton from '../components/loginbutton';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Signup = () => {
  const history = useHistory()
  const [state, setState] = useState({
   firstName: '',
   lastName: '',
   email: '',
   password: ''
  });

 const handleInputChange = event =>  setState({
        ...state,
        [event.target.name]: event.target.value,
    })
    
    
    
 const handleSubmit = user => {
    axios.post(`auth/signup`, state )
    .then(res => {
      console.log(res);
      console.log(res.data);  
      if (res.status === 200 && res.data.success) {
        history.push('/login')
      }  
    })
  }

  console.log('state', state)
 const { firstName, lastName, email, password } = state
    return (
     <> 
      <Col sm="4" id="home" style={{height: 1000}}>
          <Card body className="signup-card">
      <Form className="login-form">
        <h2 className="text-center">React Finance</h2>
        <h3 className="text-center">Sign Up</h3>
        <FormGroup>
          <Input onChange = {handleInputChange} value={firstName} type="name"  name="firstName" placeholder="First name"
          required/>
        </FormGroup>
        <FormGroup>
          <Input onChange = {handleInputChange} value={lastName}  type="name"  name="lastName" placeholder="Last name"
          required/>
        </FormGroup>
        <FormGroup>
          <Input onChange = {handleInputChange} value = {email} type="email" name="email" placeholder="email"
          required/>
        </FormGroup>
        <FormGroup>
          <Input onChange = {handleInputChange} value = {password} type="Password" name="password" placeholder="Password"
          required/>
        </FormGroup>
        <Button onClick={()=> handleSubmit(state)} className="but-lg btn-dark btn-block">Sign up</Button>
        <div className="text-center pt-3"> or sign in with Google account
        </div>
       <Loginbutton />
        <div className="text-center">
          <a href="/login"> Login</a>
          <span className="p-2">|</span>
          <a href="/ForgotPw">Forgot password</a>
        </div>
      </Form>
      </Card>
      </Col>
      </>
    );
}

export default Signup;
