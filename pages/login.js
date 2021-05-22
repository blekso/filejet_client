import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    const user = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:5000/api/auth", user).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
            type="button"
            onClick={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
