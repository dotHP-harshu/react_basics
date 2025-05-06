import React, { useContext, useReducer, useState } from "react";
import LoginForm from "./components/LoginForm";
import userContext from "./userContext/userContext";
import User from "./components/User";

const reducer = (state, action) => {
  switch (action.type) {
    case "SETUSERNAME":
      return {
        ...state,
        username: action.payload,
      };

    case "SETPASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "LOGINSUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        error: "",
      };
    case "LOGINFAILED":
      return {
        ...state,
        username: "",
        password: "",
        isLoggedIn: false,
        error: "Username or password is incorrect.",
      };
    case "RESET":
      return {
        ...state,
        username: "",
        password: "",
        isLoggedIn: false,
        error: "",
      };
    case "SHOWERROR":
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

function App() {
  const initialState = {
    username: "",
    password: "",
    isLoggedIn: false,
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className="bg-zinc-950 text-white p-10 h-dvh min-h-dvh w-full">
        {state.isLoggedIn ? <User /> : <LoginForm />}
      </div>
    </userContext.Provider>
  );
}

export default App;
