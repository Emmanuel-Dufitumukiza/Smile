import react, { useEffect, useState } from "react";
import google from "../assets/images/google.svg";
import logo from "../assets/images/logo.png";
import Edit from "@material-ui/icons/Edit";
import "../../app.css";
import {
  BrowserRouter,
  Routes,
  Link,
  unstable_HistoryRouter,
  useParams,
  useNavigate,
} from "react-router-dom";
import otp from "../assets/images/otp.png";

const VerificationCode = () => {
  const navigate = useNavigate();

  useEffect(() => {
    OTPInput();
  }, []);

  function OTPInput() {
    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }

  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="logo-cont absolute top-10 left-10 cursor-pointer select-none">
          <img src={logo} alt="" />
        </div>
        <div className=" flex flex-row min-h-screen justify-center items-center">
          <div className="form-container shadow-lg text-center md:w-8/12 lg:w-4/12 form_ px-2 py-5 rounded mt-9">
            <h2 className="text-3xl font-medium text-colorText mb-3 text-gray-500">
              Verification Code
            </h2>
            <p className="text-center mb-5 font-medium text-gray-400">
              Enter the OTP sent to your phone
            </p>

            <p className="font-medium  mb-6 text-xl">
              +250 788 888 888{" "}
              <button className="bg-black text-white rounded-full editBtn text-xs cursor-pointer px-2 py-2 ml-3">
                <Edit />
              </button>
            </p>

            <form action="" className="px-11">
              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-5"
              >
                {" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="first"
                  maxlength="1"
                />{" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="second"
                  maxlength="1"
                />{" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="third"
                  maxlength="1"
                />{" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="fourth"
                  maxlength="1"
                />{" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="fifth"
                  maxlength="1"
                />{" "}
                <input
                  className="m-2 border h-14 w-14 text-center form-control rounded-lg text-gray-500 focus:outline-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-btnHoverColor focus:outline-none text-2xl"
                  type="text"
                  id="sixth"
                  maxlength="1"
                />{" "}
              </div>

              <div className="mb-4 mt-8">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-btnColor text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-btnHoverColor hover:shadow-lg focus:bg-btnHoverColor focus:shadow-lg focus:outline-none focus:ring-0 active:bg-btnHoverColor active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => navigate("/code")}
                >
                  Submit & Continue
                </button>
              </div>

              <div className="mb-4 mt-8">
                <button
                  onClick={() => navigate("/login")}
                  className="hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-400 rounded-lg shadow w-full"
                >
                  Back To Login
                </button>
              </div>

              <div className="mb-4 text-center">
                <p>
                  <span className="font-medium text-gray-600">
                    Didn’t receive OTP?
                  </span>{" "}
                  <a className="text-blue-800 cursor-pointer font-bold">
                    Resend
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="forgot-svg-img select-none ml-7">
            <img src={otp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationCode;
