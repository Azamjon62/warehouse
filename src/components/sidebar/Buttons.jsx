import React from "react";

const Buttons = (icon) => {
  return (
    <li
      className={({ isActive }) => {
        return isActive ? activeLink : normalLink;
      }}
    >
      <div className="p-2 rounded-xl bg-iconBg-active active:bg-iconBg-active mr-3">
        <img src={icon} alt="icon" className="w-[15px] h-[15px]" />
      </div>
      <p className="text-sm font-jakartaSans">Dashboard</p>
    </li>
  );
};

export default Buttons;
