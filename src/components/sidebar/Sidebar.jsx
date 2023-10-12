import React, { useEffect, useRef, useState } from "react";
import { lineafterlogo, logo } from "../../assets/images";
import { Link } from "react-router-dom";
import { links } from "../../utils/dummy";
import Button from "./Button";

const Sidebar = () => {
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
  }, []);

  return (
    <>
      <div className="px-5 h-full py-5">
        <div className="w-[264px] max-h-[890] h-full rounded-[20px] bg-[#001e53] ">
          <div className="wrapper">
            <div className="wrapper-top flex flex-col pt-7 mb-5">
              <Link
                to={"/dashboard"}
                className="self-center w-[135px] h-[14px] mb-7"
              >
                <img
                  src={logo}
                  alt="logo of warehouse"
                  className=" w-[135px] h-[14px]"
                />
              </Link>
              <img src={lineafterlogo} alt="line" />
            </div>
            <div className="wrapper-bottom px-5">
              <ul className="nav flex flex-col text-white gap-y-1 pb-3">
                {links.map((link) => {
                  return (
                    <Button
                      title={link.title}
                      icon={link.icon}
                      dropdown={link.dropdown}
                      key={link.title}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
