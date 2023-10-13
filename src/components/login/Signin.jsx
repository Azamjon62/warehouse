import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const Signin = () => {
  const submitHandler = () => {};
  const { isSignUp, setIsSignUp } = useStateContext();

  return (
    <>
      <div className="absolute top-1/4 ml-[61px] text-white">
        <div className="ml-10 mb-[140px]">
          <div className="">
            <h3 className="text-[30px] leading-[39px] font-bold">
              Nice to see you!
            </h3>
            <p className="text-sm leading-5 text-gray-400 mb-9">
              Enter your email and password to sign in
            </p>
          </div>
          <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mb-5">
            <label htmlFor="email" className="flex flex-col mb-6">
              <span className="text-sm leading-5">Email</span>
              <input
                type="email"
                placeholder="Your email address"
                className="w-[350px] h-[50px] px-5 bg-inputBg border-2 rounded-[20px]"
              />
            </label>
            <label htmlFor="password" className="flex flex-col">
              <span className="text-sm leading-5">Password</span>

              <input
                type="password"
                placeholder="Your password"
                className="w-[350px] h-[50px] px-5 bg-inputBg border-2 rounded-[20px]"
              />
            </label>

            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </span>
            </label>

            <button
              type="submit"
              className="w-[350px] text-[10px] leading-4 font-bold py-3 bg-primaryBlue rounded-[12px]"
            >
              Sign in
            </button>
          </form>
          <p className="text-sm leading-3 text-center mr-10 text-grayish">
            Don't have an account?{" "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
              className="font-bold text-white"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
