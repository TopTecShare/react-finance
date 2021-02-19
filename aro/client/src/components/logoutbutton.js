import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const clientId = '189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com';

function Logoutbutton() {
  const history = useHistory()
    const onSuccess = () => {
      axios.post(`auth/logout`)
      .then(res => {
        console.log(res);
        console.log(res.data);  
        if (res.status === 200 ) {
          history.push('/login')
        }  
      })
        //refreshes page to clear the console
        alert('Logged out ✌');
        
        // window.location.reload();
    }
    
    return (
        <div>
          <GoogleLogout
            className="gbutton"
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logoutbutton;