import React, { useState } from "react";
import "./App.css";

import { useHistory } from 'react-router-dom';
function App(props) {
  const [email, setEmail] = useState("t");
  const [emailMsg, setEmailError] = useState("");
  const [passwordMsg, setPasswordError] = useState("");
  const [password, setPassword] = useState("1");

  const history = useHistory();

  const handleEmailChange = (value) => {
    setEmail(value);
    if (!value) {
      setEmailError("Please enter an email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (!value) {
      setPasswordError("Please enter password.");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmitClick = (event) => {
   // alert("==="+JSON.stringify(props.history("/")))
  
    event.preventDefault();

    if (!email) {
      setEmailError("Please enter an email address.");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter password.");
    } else {
      setPasswordError("");
    }
    if(email && password){
      history.push('/src/home',{test:"Hello"})
    }
  };

  return (
    <div className="App-header">
      
        <div  className="Card-style">
          <form
      
            onSubmit={(event) => {
              handleSubmitClick(event);
            }}
          >
            <div className="flex-container">
        
            <label className="label-style">
              Email Address <span className="mandatory-style"> *</span>
            </label>
            <input
              className="input-style"
              type="text"
              onChange={(value) => {
                handleEmailChange(value.target.value);
              }}
              value={email}
              placeholder="Email"
            />
            <span id="email-error" className="error-style">
              {emailMsg}
            </span>
            </div>

            <div className="flex-container">
            <label className="label-style">
              Password<span className="mandatory-style"> *</span>
            </label>
            <input
              className="input-style"
              type="password"
              onChange={(value) => {
                handlePasswordChange(value.target.value);
              }}
              value={password}
              placeholder="Password"
            />
            <span id="email-error" className="error-style">
              {passwordMsg}
            </span>

            <button className="button-style" id="loginBtn">
             Login
            </button>
            </div>
        
            
          </form>
        </div>
       
    </div> 
  );
}

export default App;