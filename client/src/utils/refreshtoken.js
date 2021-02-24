export const refreshTokenSetup = (res) => {

    let refreshTiming = (res.tokenObj.expires_in || 36000 - 5 * 60) *1000;

       const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes) ;
        //saveUserToken(newAuthRes.access_token); <-- save new token
        console.log('new auth Token', newAuthRes.id_token);

        //Setup the other time after the first one
        setTimeout(refreshToken, refreshTiming);
    };
        // Setup first refresh timer 
        setTimeout(refreshToken, refreshTiming);
};