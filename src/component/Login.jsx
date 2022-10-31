import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"

const Login = () => {
  const clientId = '222989934766-mvq200derpvprhtjtjpkiba3qnasep0a.apps.googleusercontent.com';
  const [ profile, setProfile ] = useState();
  const handleCallbackResponse=(response)=>{
    // the jwt ID token
var obj=jwt_decode(response.credential)
console.log(obj)
setProfile({...obj})
  }
useEffect(() => {
  /* global google */
google.accounts.id.initialize({
  client_id:clientId,
  callback:handleCallbackResponse
})
google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme:"outline",size:"large"}
)
});

  return (
    <>
    {
      profile?(<div className="w100 col flexJCC flexAIC" style={{height:"100vh"}}>
        <img src={profile.picture} alt="user image" className="user image" />
      <h3>User Logged in</h3>
      <p>Name: {profile.name}</p>
      <p>Email Address: {profile.email}</p>
      <br />
      <br />
      </div>):
      
  (      <div className="row w100 flexJCC flexAIC c1" style={{height:"100vh"}}>
    <div className="col w28 c2 card">
    <img src="MergeResult_2022_10_21_09_37_01.png" alt="" />
    <h2>Log In</h2>
    <p className="grey">Continue to Shopify</p>
    <label htmlFor="inpu">Email</label>
    <input type="text" className="inpu" />
    <button className="btn">Continue with Email</button>
    <div className="row flexAIC w100 flexSB"><div className="rr"></div><p className="mid">or</p><div className="rr"></div></div>
    <button className="btnr"><i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;Continue with Apple</button>
    <div className="w100" id="signInDiv"></div>
    <button className="btnr"><i class="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;Continue with Google</button>
    <button className="btnr"><i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;Continue with Facebook</button>
    </div>
        </div>
        )
    
    }
    </>
      )
}

export default Login