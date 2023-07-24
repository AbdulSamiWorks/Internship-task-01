import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-start items-center w-full h-24 -ml-7 font-bold text-xl">
        <img src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg' alt="pic" className="sm:invisible ml-5 md:visible" />
        <ul className="flex justify-start items-center w-full h-24 ml-44  font-semibold text-xl flex-wrap ">
        <Link to={'/'} > <li className="mr-7 ml-7 text-[#FFFFFF] hover:text-green-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">Home</li></Link>
         <Link to={'/portfolio'} ><li className="mr-7 ml-7 text-[#FFFFFF] hover:text-green-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">Portfolio</li></Link>
         <Link to={'/contact'} > <li className="mr-7 ml-7 text-[#FFFFFF] hover:text-green-500 hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">Contact</li></Link>
        </ul>
        <div className="sm:invisible md:visible">
        <Button title={'Contact'}/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
