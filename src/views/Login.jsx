import react, { useEffect, useState } from "react";
import google from "../assets/images/google.svg";
import logo from "../assets/images/logo.png";
import Lock from "@material-ui/icons/Lock";
import "../../app.css";
import {
  BrowserRouter,
  Routes,
  Link,
  unstable_HistoryRouter,
  useParams,
  useNavigate,
} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="logo-cont absolute top-10 left-10 cursor-pointer select-none">
          <img src={logo} alt="" />
        </div>
        <div className=" flex flex-row min-h-screen justify-center items-center">
          <div className="form-container text-center md:w-8/12 lg:w-5/12 form_ px-4 py-5 rounded">
            <h2 className="text-3xl font-medium text-colorText mb-3 text-gray-500">
              Welcome Back!
            </h2>
            <p className="text-center mb-9 font-medium text-gray-400">
              We are happy to have you back
            </p>

            <form action="" className="px-11">
              <div className="mb-4">
                <label className="relative text-gray-400 focus-within:text-gray-600 block ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email or Phone number"
                    className="form-input border border-white py-3 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none text-gray-700 bg-white bg-clip-padding border border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </label>
              </div>

              <div className="mb-4">
                <label className="relative text-gray-400 focus-within:text-gray-600 block ">
                  <input
                    type="password"
                    name="email"
                    id="email"
                    placeholder="Password"
                    className="form-input border border-white py-3 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none text-gray-700 bg-white bg-clip-padding border border-solid rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <Lock />
                  </svg>
                </label>
              </div>

              <div className="mb-4 text-right">
                <p>
                  <a
                    onClick={() => navigate("/forgotpassword")}
                    className="cursor-pointer hover:text-blue-500 font-medium text-gray-500"
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>

              <div className="mb-4 mt-8">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-btnColor text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-btnHoverColor hover:shadow-lg focus:bg-btnHoverColor focus:shadow-lg focus:outline-none focus:ring-0 active:bg-btnHoverColor active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>
              </div>

              <div className="flex items-center my-4 mt-11 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
                <p className="text-center mx-4 mb-0 text-btnHoverColor">OR</p>
              </div>

              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-white"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src={google} alt="" className="h-7 w-7" />

                <span className="text-gray-600 capitalize font-medium ml-3">
                  Login With Google
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
