import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const Header = () => {
  const [showservice, setShowservice] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="lg:flex lg:justify-between  bg-purple3 lg:items-center lg:drop-shadow-sm ">
        <div className=" bg-purple3 drop-shadow-sm lg:drop-shadow-none flex gap-4 items-center px-8 py-3">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687375510/therapy_2_st9jvt.png"
            alt=""
            className="w-12 h-12"
          />
          <div className="">
            <h1 className=" border-b-2 leading-5 border-purple1 w-10.5rem max-h-10 rounded-r-sm rounded-t-sm text-transparent  bg-clip-text bg-gradient-to-b from-purple1 to bg-purple2 ">
              PRING HEALTH CARE
            </h1>

            <div>
              <h4 className="text-[0.7rem] font-semibold text-purple2 ">
                PROFESSIONAL SERVICE, PLC
              </h4>
            </div>
          </div>
          <button
            className="ml-auto lg:hidden bg-purple1 p-1 rounded-md"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <CloseSharpIcon style={{ color: "#f5e9ee" }} size="small" />
            ) : (
              <MenuIcon style={{ color: "#f5e9ee" }} size="small" />
            )}
          </button>
        </div>

        <nav
          className=" text-center lg:pr-8 h-0 lg:h-auto  lg:block  z-40 absolute lg:relative w-full lg:w-fit
        "
        >
          <div></div>
          <ul
            className={` flex flex-col justify-center  items-center   lg:flex-row  lg:justify-between lg:gap-6 transition duration-700 ease-in-out  lg:translate-x-0 ${
              menu ? "translate-x-0 " : "-translate-x-full "
            } `}
          >
            <li className="">
              <a href=""> Home</a>
            </li>
            <li
              className={`h-10 lg:h-auto transition-height duration-500 ease-in-out lg:relative   ${
                showservice
                  ? "  hover:h-12rem lg:hover:h-auto  "
                  : "hover:h-10 lg:hover:h-auto  "
              }`}
            >
              <button
                onClick={() => {
                  setShowservice(!showservice);
                }}
              >
                services
              </button>
              <div className="lg:absolute lg:w-52">
                <ul
                  className={` lg:text-left inner__li lg:mt-3  ${
                    showservice ? "lg:block" : "lg:hidden"
                  }`}
                >
                  <li>Treament for Trauma</li>
                  <li>Treatment for Depression</li>
                  <li>Treament for Anxiety</li>
                  <li>Pschological Evaluation</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">Podcast</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Join Our Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
