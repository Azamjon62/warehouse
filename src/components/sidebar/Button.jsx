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
  };
  return dropdown ? (
    <>
      <li
        className={`${focusHandler} px-4 py-3 rounded-[15px] cursor-pointer ease-in-out duration-300`}
      >
        <div className="flex items-center mr-2" onClick={dropDownHandler}>
          <div className="p-2 rounded-xl bg-iconBg active:bg-iconBg-active mr-3">
            <img src={icon} alt="icon" className="w-[15px] h-[15px]" />
          </div>
          <p className="text-sm font-jakartaSans mr-3">{title}</p>

          {isClicked ? (
            <ion-icon name="chevron-up-outline"></ion-icon>
          ) : (
            <ion-icon name="chevron-down-outline"></ion-icon>
          )}
        </div>
        {isClicked ? (
          <div className="flex flex-col">
            {dropdown.map((link) => (
              <NavLink
                to={`/${link.title.replace(" ", "").toLowerCase()}`}
                className="ml-11 text-sm font-jakartaSans my-2 last:my-0"
                key={link.title}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        ) : (
          <></>
        )}
      </li>
    </>
  ) : (
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
