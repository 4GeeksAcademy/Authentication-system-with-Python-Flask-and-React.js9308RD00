import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [fulnameInput, setFullnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  

  return (
    <div>
      <label>Full name</label>
      <input
        value={fulnameInput}
        placeholder="Enter your fullname"
        onChange={(e) => setFullnameInput(e.target.value)}
      />
      <label>Email</label>
      <input
        value={emailInput}
        placeholder="Enter your email"
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <label>Password</label>
      <input
        value={passwordInput}
        placeholder="Enter your password"
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <div>
        <button
          type=""
          onClick={() => {
            actions.addNewUser(fulnameInput, emailInput, passwordInput);
          }}
        >
          Submit
        </button>
        <Link to={"/"}>
          <div>Back to login</div>
        </Link>
      </div>
    </div>
  );
};
