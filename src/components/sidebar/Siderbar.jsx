import React, { useEffect, useRef } from "react";
import {
  config,
  creditcard,
  home,
  lineafterlogo,
  logo,
  tables,
} from "../../assets/images";

const Siderbar = () => {
  const btnRef = useRef(null);
  useEffect(() => {
    const isActive = () => {
      if (btnRef.current == document.activeElement) {
        console.log("it is");
      } else {
        console.log("it is not");
      }
      document.addEventListener("focus", isActive);
      return () => {
        document.removeEventListener("focus", isActive);
      };
    };
  });
  const activeLink =
    "flex items-center px-4 py-3 bg-sidebarActive rounded-[15px] cursor-pointer";
  const normalLink =
    "flex items-center px-4 py-3 rounded-[15px] cursor-pointer";
  return (
    <>
      <div className="px-5 h-full py-5">
        <div className="w-[264px] max-h-[890] h-full rounded-[20px] bg-[#001e53] ">
          <div className="wrapper">
            <div className="wrapper-top flex flex-col pt-7 mb-5">
              <a href="#" className="self-center w-[135px] h-[14px] mb-7">
                <img
                  src={logo}
                  alt="logo of warehouse"
                  className=" w-[135px] h-[14px]"
                />
              </a>
              <img src={lineafterlogo} alt="line" />
            </div>
            <div className="wrapper-bottom px-5">
              <ul className="nav flex flex-col text-white gap-y-1 pb-3">
                <li ref={btnRef} className={normalLink}>
                  <div className="p-2 rounded-xl bg-iconBg-active active:bg-iconBg-active mr-3">
                    <img src={home} alt="icon" className="w-[15px] h-[15px]" />
                  </div>
                  <p className="text-sm font-jakartaSans">Dashboard</p>
                </li>
                <li className="flex items-center px-4 py-3 rounded-[15px]">
                  <div className="p-2 rounded-xl bg-iconBg active:bg-iconBg-active mr-3">
                    <img
                      src={tables}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <p className="text-sm font-jakartaSans">Tables</p>
                </li>
                <li className="flex items-center px-4 py-3 rounded-[15px]">
                  <div className="p-2 rounded-xl bg-iconBg active:bg-iconBg-active mr-3">
                    <img
                      src={creditcard}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <p className="text-sm font-jakartaSans">Transaction</p>
                </li>
                <li className="flex items-center px-4 py-3 rounded-[15px]">
                  <div className="p-2 rounded-xl bg-iconBg active:bg-iconBg-active mr-3">
                    <img
                      src={config}
                      alt="icon"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <p className="text-sm font-jakartaSans">RTL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Siderbar;
