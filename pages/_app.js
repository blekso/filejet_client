import React from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import Login from "../components/Login";
import Home from "../components/Home";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function MyApp() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <Nav />
        <div>{!state.isAuthenticated ? <Login /> : <Home />}</div>
      </div>
    </AuthContext.Provider>
  );
}

export default MyApp;
