import { Signup } from "../component/signUp";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      newUser: [],
      token: null,
    },
    actions: {
      login: (email, password) => {
        fetch(
          "https://fantastic-space-guide-4p65x9rg4pvfjr7x-3001.app.github.dev//token",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((jsonifiedData) => {
            setStore({ token: jsonifiedData.token });
            sessionStorage.setItem('token', jsonifiedData.token);
          })
          .catch((err) => console.log(err));
      },

      addNewUser: (fullnameInput, emailInput, passwordInput) => {
        console.log("HELLO");

        fetch(
          "https://fantastic-space-guide-4p65x9rg4pvfjr7x-3001.app.github.dev/new/user",
          {
            method: "POST",
            body: JSON.stringify({
              fullname: fullnameInput,
              email: emailInput,
              password: passwordInput,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
          })
          .then((response) => {
            console.log("Success:", response);
            getActions().getFetch();
          })
          .catch((error) => console.error(error));
      },


      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
