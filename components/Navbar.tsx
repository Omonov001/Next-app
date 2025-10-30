"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (
    <div className="container">
      <Image
        className="w-screen h-[1500px]"
        src={"/Background.png"}
        alt="Error"
        width={1500}
        height={1500}
      />
      <nav className="absolute  w-screen gap-[460px] flex mt-[-1500px] p-10 ml-0">
        <h1 className="h1 text-3xl">Qwery</h1>

        <ul className="flex gap-10">
          <li>Information</li>
          <li className="flex">About us</li>
          <li>Culture</li>
        </ul>
        <div className="search absolute ml-[1340px] items-center justify-around gap-2 flex">
          <IoMdSearch />
          <input
            autoComplete="off"
            className="outline-none overflow-hidden"
            type="text"
            placeholder="Search"
          />
        </div>
      </nav>
            <main className="absolute mt-[-1384px] w-screen h-[1000vh]">
              <div className="follow absolute mt-[350px] flex items-center justify-around gap-4 rotate-[90deg] text-3xl  z-30 ml-[-60px] text-white">
                <h1 className="text-2xl">Follow us</h1>
                <FaInstagram />
                <FaTwitter />
                <FaFacebookF />
              </div>
              <div className="maincha mt-64 absolute ml-[500px]">
                <h3 className="tracking-[0.3em] uppercase text-yellow-400 font-semibold  mb-10">
                  <span className="mr-7">——————</span> EXPLORE THE NATURE BEAUTY
                </h3>
                <h1 className="text-7xl mt-8 w-[600px] font-bold text-white">
                  Discover <br />{" "}
                  <span className="text-6xl font-medium text-white">
                    Wonderful Indonesia
                  </span>
                </h1>
              </div>
            </main>
    </div>
  );
}

export default Navbar;
