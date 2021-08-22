import React from "react";
import axios from "axios";
import { AuthContext } from "../pages/index.js";

export default function Register() {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    name: "",
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    axios
      .post("http://localhost:5000/api/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };
  return (
    <div className="w-full h-full p-12">
      <form className="grid gap-4" onSubmit={handleFormSubmit}>
        <p>Register</p>
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="register-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="register-name"
            name="name"
            type="text"
            placeholder="Jane"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="register-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="register-email"
            name="email"
            type="email"
            placeholder="email@email.com"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="register-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="register-password"
            name="password"
            type="password"
            placeholder="******************"
            value={data.password}
            onChange={handleInputChange}
          />
        </div>
        {data.errorMessage && (
          <span className="form-error">Please fill out all fields</span>
        )}
        <div>
          <button
            disabled={data.isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
          >
            {data.isSubmitting ? "Loading..." : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}
