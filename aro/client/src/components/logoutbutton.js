import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com';

function Logoutbutton() {
    const onSuccess = () => {
        //refreshes page to clear the console
        window.location.reload();
        alert('Logged out ✌');
         
    } ;

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