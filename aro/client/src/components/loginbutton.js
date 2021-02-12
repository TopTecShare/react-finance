import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshtoken';

const clientId = '189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com';

function Loginbutton() {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser:' , res.profileObj); 
    
      refreshTokenSetup(res);
      console.log('response',res)
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
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