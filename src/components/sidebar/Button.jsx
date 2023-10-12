import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const activeLink = "bg-sidebarActive cursor-pointer";
const normalLink = "cursor-pointer";

const Button = ({ title, icon, dropdown }) => {
  const [isClicked, setIsClicked] = useState(false);

  const focusHandler = () => {
    if (isActive) {
      return activeLink;
    } else {
      return normalLink;
    }
  };
  const dropDownHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  return (
    <li className={`${focusHandler} cursor-pointer`}>
      <Link
        to={`/${title.toLowerCase()}`}
        className="flex items-center px-4 py-3 rounded-[15px]"
      >
        <div className="p-2 rounded-xl bg-iconBg active:bg-iconBg-active mr-3">
          <img src={icon} alt="icon" className="w-[15px] h-[15px]" />
        </div>
        <p className="text-sm font-jakartaSans">{title}</p>
      </Link>
    </li>
  );
};

export default Button;
