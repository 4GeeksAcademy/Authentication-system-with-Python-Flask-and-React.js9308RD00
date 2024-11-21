import React, { Component } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Hook for navigation

    const handleLogout = () => {
        actions.logout(); // Call the logout action to clear the token
        navigate("/"); // Redirect the user to the / landing page page
	}
	return(
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
		<button style={{fontSize: "15px", height:"32px"}} type="button" className="btn btn-secondary" onClick={handleLogout}
          >Sign out</button>
		  
		  <Link to={"/"}><div>Back to login</div></Link>
	</footer>
)
};