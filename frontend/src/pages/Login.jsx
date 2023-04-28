import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { loginUser } from "../helper";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginUser({ email, password });
      if (!response) {
        alert("Can not reach Server");
      }
      if (response.status === 200) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', response.email);
        navigate("/products");
      }
      else {
        alert(response.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-28 mr-2" />
          </Link>
        </div>
        <div>
          <Link
            to="/signup"
            className="flex items-center text-sm font-semibold py-2 px-3 rounded border border-gray-900 text-gray-900"
          >
            Sign up
          </Link>
        </div>
      </nav>
      <div className="mt-44 flex justify-center items-center flex-col overflow-y-hidden">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-700 tracking-wide">
          Log In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-slate-50 p-8 rounded-lg shadow-md w-[400px] mb-8 border border-gray-300"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              className="border border-gray-300 p-2 rounded w-64"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              className="border border-gray-300 p-2 rounded w-64"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isLoading ? <div className="loader"></div> : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
