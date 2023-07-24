import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi'
const Footer = () => {
  return (
    <>
      <footer className="flex ml-10">
        <img
          src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
          alt="pic"
        />
        <div className="flex justify-start items-center w-full h-24 ml-44  text-xl">
          <p>
            © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights
            reserved.
          </p>
          <div className="text-yellow-500 rounded-xl w-12 h-12 flex justify-center items-center ml-40 bg-[#2D2E32]">
            <BiCommentDetail />
          </div>
          <div className="text-yellow-500 rounded-xl w-12 h-12 flex justify-center items-center ml-10 bg-[#2D2E32]">
            <AiOutlineInstagram />
          </div>
          <div className="text-yellow-500 rounded-xl w-12 h-12 flex justify-center items-center ml-10 bg-[#2D2E32]">
            <GrLinkedinOption />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
