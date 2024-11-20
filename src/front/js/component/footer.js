import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
		<button style={{fontSize: "15px", height:"32px"}} type="button" className="btn btn-secondary">Sign out</button>
	</footer>
);
