import React, { useEffect, useState } from "react";
import { Home } from "../pages/home";
import { Link } from "react-router-dom";

export const Private = () => {
  const [user, setUser] = useState({ id: null, email: null });

  useEffect(() => {
    const getMyTasks = async () => {
      const token = localStorage.getItem("token");

      const resp = await fetch(
        `https://fantastic-space-guide-4p65x9rg4pvfjr7x-3001.app.github.dev//protected`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
          },
        }
      );

      if (!resp.ok) {
        if (resp.status === 403) throw Error("Missing or invalid token");
        // else if(...) throw Error("There was a problem in the login request");
        else throw Error("Unknown error");
      }

      const data = await resp.json();

      console.log("This is the data you requested", data);

      setUser(data);
    };
    getMyTasks();
  }, []);

  return (
    <div>
      
        <div>
          <Home/>
        </div>
      
    </div>
  );
};
