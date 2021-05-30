import React from "react";
import { AuthContext } from "../pages/_app.js";

export default function Nav(props) {
  const { dispatch } = React.useContext(AuthContext);

  function Logout() {
    if (props.isAuthenticated) {
      return (
        <div className="flex">
          <p
            onClick={handleLogoutClick}
            className="p-4 hover:bg-gray-100 cursor-pointer"
          >
            Log Out
          </p>
        </div>
      );
    }
    return null;
  }

  function handleLogoutClick(e) {
    e.preventDefault();
    console.log("uploading..");
  }

  function handleLogoutClick(e) {
    e.preventDefault();
    console.log("loggin out");
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <nav className="h-12 bg-gray-300 flex items-center justify-between px-4">
      <div className="flex items-center">
        <p className="mr-2">Filejet</p>
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
      </div>
      <Logout />
    </nav>
  );
}
