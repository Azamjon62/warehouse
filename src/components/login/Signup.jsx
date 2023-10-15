import React from "react";
import { facebook, apple, google } from "../../assets/images";
import { useStateContext } from "../../contexts/StateContextProvider";

const Signup = () => {
  const { isSignUp, setIsSignUp } = useStateContext();

  return (
    <div className=" ml-[61px] text-white">
      <div className="w-[425px]">
        <div className="text-center mt-3 mb-4">
          <h3 className="text-[30px] leading-[39px] font-bold">Welcome</h3>
          <p className="text-sm leading-6">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
        <form className="w-full border rounded-[20px]">
          <div className="py-10 pl-14 pr-14 flex flex-col items-center">
            <div className="text-center">
              <h4 className="font-bold text-lg leading-6 mb-6">
                Register with
              </h4>

              <div className="flex gap-4 mb-5">
                <button className="p-5 border rounded-[20px]">
                  <img
                    src={facebook}
                    alt="logo of facebook"
                    className="w-[31px] h-[31px]"
                  />
                </button>
                <button className="p-5 border rounded-[20px]">
                  <img
                    src={apple}
                    alt="logo of facebook"
                    className="w-[31px] h-[31px]"
                  />
                </button>
                <button className="p-5 border rounded-[20px]">
                  <img
                    src={google}
                    alt="logo of facebook"
                    className="w-[31px] h-[31px]"
                  />
                </button>
              </div>
              <p className="text-lg leading-6 font-bold text-grayish mb-2">
                or
              </p>
            </div>
            <div className="flex flex-col">
              <label className="flex flex-col mb-6">
                <span className="text-sm leading-5">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-[350px] h-[50px] px-5 bg-inputBg border-2 rounded-[20px]"
                />
              </label>
              <label className="flex flex-col mb-6">
                <span className="text-sm leading-5">Email</span>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-[350px] h-[50px] px-5 bg-inputBg border-2 rounded-[20px]"
                />
              </label>
              <label className="flex flex-col mb-6">
                <span className="text-sm leading-5">Password</span>
                <input
                  type="text"
                  placeholder="Create your password"
                  className="w-[350px] h-[50px] px-5 bg-inputBg border-2 rounded-[20px]"
                />
              </label>
            </div>
            <button
              type="Submit"
              className="w-[350px] text-[10px] leading-4 font-bold mb-3 py-3 bg-primaryBlue rounded-[12px]"
            >
              SIGN UP
            </button>
            <p className="text-sm leading-3 text-center mt-5 mr-10 text-grayish">
              Already have an account?{" "}
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
