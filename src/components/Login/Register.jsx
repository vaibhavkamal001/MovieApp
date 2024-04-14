import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { RegisterUser } from "../../store/auth-action";
import ApplicationConstant from "../../applicationConstant/ApplicationConstant";

export default function Register() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogIn = useSelector((state) => state.Auth.isLogIn);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const OnSubmitHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (email === "" || !ApplicationConstant.emailRxg.test(email)) {
      emailRef.current.focus();
      setIsValidEmail(false);
      return;
    } else {
      setIsValidEmail(true);
    }

    if (password === "") {
      passwordRef.current.focus();
      setIsValidPassword(false);
      return;
    } else {
      setIsValidPassword(true);
    }

    if (confirmPassword === "" || password !== confirmPassword) {
      confirmPasswordRef.current.focus();
      setIsValidConfirmPassword(false);
      return;
    } else {
      setIsValidConfirmPassword(true);
    }

    if (isValidEmail && isValidConfirmPassword && isValidPassword) {
      dispatch(RegisterUser(email, password));
      navigate("..");
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          <Link
            to="../login"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={(event) => event.preventDefault()}>
            <Input
              ref={emailRef}
              isValid={isValidEmail}
              labelData={{ htmlFor: "email", name: "Email Address" }}
              inputData={{
                id: "email",
                name: "email",
                placeholder: "user@example.com",
                type: "text",
              }}
            />
            <Input
              ref={passwordRef}
              isValid={isValidPassword}
              labelData={{ htmlFor: "password", name: "Password" }}
              inputData={{
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "autoComplete",
              }}
            />
            <Input
              ref={confirmPasswordRef}
              isValid={isValidConfirmPassword}
              labelData={{
                htmlFor: "password_confirmation",
                name: "Comfirm Password",
              }}
              inputData={{
                id: "password_confirmation",
                name: "password_confirmation",
                type: "password",
                autoComplete: "autoComplete",
              }}
            />
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={OnSubmitHandler}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
