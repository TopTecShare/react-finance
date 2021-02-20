import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshtoken';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const clientId = '189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com';


function Loginbutton() {
  const history = useHistory()
    const onSuccess = (res) => {
      // console.log('[Login Success] currentUser:' , res.profileObj.email); 
      axios.post(`auth/signup`, {email:res.profileObj.email,firstName:"jack", lastName:"hill", password:"hello"} )
      .then(res => {
        // console.log(res);
        // console.log(res.data);  
        if (res.status === 200 ) {
          history.push('/signup')
        }  
      })
      refreshTokenSetup(res);
      // console.log('response',res)
    };

    const onFailure = (res) => {
        // console.log('[Login failed] res:', res);
    };

    return (
        <div>
          <GoogleLogin
            className="gbutton"
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

export default Loginbutton;