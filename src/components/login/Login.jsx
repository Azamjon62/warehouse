import React, { useContext, useState } from "react";
import Signup from "./Signup";
import Tagline from "./Tagline";
import Signin from "./Signin";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
  const { isSignUp, setIsSignUp } = useStateContext();
  return (
    <>
      <div className="text">
        <div className="flex w-screen h-screen">
          <div className="relative flex-1 w-1/2 h-full bg-loginBg bg-no-repeat bg-cover">
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-white">
              <p className="text-[20px] leading-5 tracking-[3.6px] mb-4">
                INSPIRED BY THE FUTURE:
              </p>
              <h2 className="text-[36px] leading-9 tracking-[6.48px]">
                THE VISION UI DASHBOARD
              </h2>
            </div>
          </div>
          <div className="relative flex-1 w-1/2 h-full bg-loginGradient">
            {isSignUp ? <Signup /> : <Signin />}
            <Tagline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
