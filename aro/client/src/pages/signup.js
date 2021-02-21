import React, { useState } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Input, Card, Col, FormFeedback} from 'reactstrap';
import Loginbutton from '../components/loginbutton';
import Logoutbutton from '../components/logoutbutton';
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

  const [validate, setValid] = useState({
    validateFirstName: '',
    validateLastName: '', 
    validateEmail: '', 
    validatePassword: '', 
   }) 

  const handleInputChange = event =>  setState({
        ...state,
        [event.target.name]: event.target.value,
    })
    
    
    
  const handleSubmit = user => {
    if(state.password === '' ){
     setValid({validatePassword:true})
    }
    if(state.email === '' ){
     setValid({validateEmail:true})
    }
    if(state.lastName === '' ){
     setValid({validateLastName:true})
    }
    if(state.firstName === ''){
      setValid({validateFirstName:true})
     }

    axios.post(`auth/signup`, state )
    .then(res => {
      console.log(res);
      console.log(res.data);  
      if (res.status === 200 && res.data.success) {
        history.push('/login')
      }  
    })
  }

  // console.log('state', state)
 const { firstName, lastName, email, password } = state
    return (
     <> 
      <Col sm="4" id="home" style={{height: 500}}>
          <Card body className="signup-card">
      <Form className="login-form">
        <h2 className="text-center">Sign Up</h2>
        <h3 className="text-center">__________</h3>
        <FormGroup>
          <Input invalid={validate.validateFirstName} onChange = {handleInputChange} value={firstName} type="name"  name="firstName" placeholder="First name"/>
          <FormFeedback>Please enter first name</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input invalid={validate.validateLastName} onChange = {handleInputChange} value={lastName}  type="name"  name="lastName" placeholder="Last name"/>
          <FormFeedback>Please enter last name</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input invalid={validate.validateEmail} onChange = {handleInputChange} value = {email} type="email" name="email" placeholder="email"/>
          <FormFeedback>Please enter email</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input invalid={validate.validatePassword} onChange = {handleInputChange} value = {password} type="Password" name="password" placeholder="Password"/>
          <FormFeedback>Please enter password</FormFeedback>
        </FormGroup>
        <Button onClick={()=> handleSubmit(state)} className="but-lg btn-dark btn-block">Sign up</Button>
        <div className="text-center pt-3"> or sign in with Google account
        </div>
       <Loginbutton />
       <Logoutbutton />
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
