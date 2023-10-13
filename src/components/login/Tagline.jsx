import React from "react";
import { Link } from "react-router-dom";

const Tagline = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center bottom-5 ml-5 text-sm leading-5 tracking-widest text-grayish">
        <p>@ 2021, Made with ❤️ by Simple & Creative Tim for a better web</p>
        <ul className="w-[251px] flex justify-between items-center">
          <li className="relative">
            <Link className="after:inline-block after:w-0 after:h-[1.5px] after:bg-white after:absolute after:top-5 after:left-0 hover:after:w-full after:ease-in-out after:duration-300 hover:text-white ease-in-out duration-300">
              Marketplace
            </Link>
          </li>
          <li className="relative">
            <Link className="after:inline-block after:w-0 after:h-[1.5px] after:bg-white after:absolute after:top-5 after:left-0 hover:after:w-full after:ease-in-out after:duration-300 hover:text-white ease-in-out duration-300">
              Blog
            </Link>
          </li>
          <li className="relative">
            <Link className="after:inline-block after:w-0 after:h-[1.5px] after:bg-white after:absolute after:top-5 after:left-0 hover:after:w-full after:ease-in-out after:duration-300 hover:text-white ease-in-out duration-300">
              License
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tagline;
