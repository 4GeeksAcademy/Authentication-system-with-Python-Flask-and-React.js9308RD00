import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
   
    

  return (
    <div>
      <label>Email</label>
      <input placeholder="Enter your email" value={emailLogin}
        onChange={(e) => setEmailLogin(e.target.value)} />
      <label>Password</label>
      <input type="password" placeholder="Enter your password" value={passwordLogin}
        onChange={(e) => setPasswordLogin(e.target.value)}/>
      <div>
        <button onClick={() => {
            actions.login( emailLogin, passwordLogin);
          }}>Sign in</button>
        <Link to={"/signup"}>
          <div>Sign up</div>
        </Link>
      </div>
    </div>
  );
};