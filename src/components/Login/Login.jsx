import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { AuthenticateUser } from "../../store/auth-action";

export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const navigate = useNavigate();

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "") {
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
    if (isValidEmail && isValidPassword) {
      dispatch(AuthenticateUser(email, password));
      const isLogIn = localStorage.getItem("user");
      if (isLogIn) {
        navigate("..");
      }
    }
  };
  return (
    <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={OnSubmitHandler}>
          <Input
            ref={emailRef}
            isValid={isValidEmail}
            labelData={{ htmlFor: "email", name: "Email Address" }}
            inputData={{ id: "email", name: "email", type: "email" }}
          />
          <Input
            ref={passwordRef}
            isValid={isValidPassword}
            labelData={{ htmlFor: "password", name: "Password" }}
            inputData={{ id: "password", name: "password", type: "password" }}
          />
          <div>
            <button
              onClick={OnSubmitHandler}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="../register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
