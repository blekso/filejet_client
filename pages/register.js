import React from "react";
import axios from "axios";
import { AuthContext } from "../pages/_app.js";

export default function Register() {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
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
      .post("http://localhost:5000/api/auth", {
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
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="name"
              type="text"
              placeholder="Jane"
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              name="email"
              type="email"
              placeholder="email@email.com"
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="password"
              type="password"
              placeholder="******************"
              value={data.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {data.errorMessage && (
          <span className="form-error">{data.errorMessage}</span>
        )}
        <div className="flex flex-wrap -mx-3 mb-6">
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
