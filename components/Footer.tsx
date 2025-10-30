import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer bg-black shadow-[0_0_60px_10px_rgba(0,0,0,0.99)] w-screen h-[800px] mt-[300px] text-white">
      <div className="bosh mt-[-300px] flex p-10 justify-between">
        <h1 className="text-5xl shadow-[0_0_60px_10px_rgba(0,0,0,0.99)]">
          QWERy
        </h1>

        <div className="bt flex items-center gap-10">
          <h3 className="text-3xl">Ready to explore?</h3>
          <button className="text-black cursor-pointer w-[240px] h-[70px] bg-amber-500 rounded-xl">
            Get started
          </button>
        </div>
      </div>

      <div className="w-[1450px] ml-10 bg-gray-700 h-[2px]"></div>
      <div className="orta">
        <h1 className="text-4xl m-10">
          Let's go on vacation, <br /> Make your day
        </h1>
        <div className="inp m-10 mt-20">
          <input
            className="w-[200px] text-3xl outline-none overflow-hidden absolute "
            type="text"
            placeholder="Email address"
          />
          <button className="ml-52 absolute text-3xl cursor-pointer z-50">
            ▶
          </button>
        </div>
        <div className="right flex gap-20 text-3xl ml-[955px] mt-[-145px] absolute">
          <ul>
            <li className="text-amber-500">Intagram</li>
            <li>Instagram</li>
            <li>@akount</li>
            <li>@follow</li>
          </ul>
          <ul>
            <li className="text-amber-500">Twitter</li>
            <li>Twitter</li>
            <li>@akount</li>
            <li>@follow</li>
          </ul>
          <ul>
            <li className="text-amber-500">Facebook</li>
            <li>@akount</li>
            <li>@follow</li>
          </ul>
        </div>
      </div>
      <div className="oxiri absolute gap-10 flex text-4xl ml-[1300px] mt-[350px]">
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
      </div>
      <h1 className="text-5xl mt-64 absolute text-amber-500 shadow-[0_0_60px_10px_rgba(0,0,0,0.99)]">
        –––———— QWERy
      </h1>
    </div>
  );
}

export default Footer;
