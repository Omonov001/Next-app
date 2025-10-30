"use client";

import React from "react";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function Main() {
  return (
    <div>
      <div className="Main_1 flex m-auto ml-[5%] mt-[-1000px] absolute z-50 bg-gradient-to-r from-black via-neutral-900 to-black  h-[120vh] w-[90%] bg-black shadow-[0_0_60px_10px_rgba(0,0,0,0.99)]">
        <Image
          src={"/Image.png"}
          className="w-[600px] h-[700px] m-10"
          alt="Error"
          width={1000}
          height={1000}
        />
        <div className="Part mt-10 ml-20">
          <h3 className="tracking-[0.3em] mt-[80px] uppercase text-yellow-400 font-semibold">
            —————— EAST NUSE TENGGARE
          </h3>
          <h1 className="text-6xl H font-mono font-extrabold text-white">
            <span>Have you </span>
            <span>enjoyed your</span>
            <span>holiday?</span>
          </h1>
          <p className="text-white mt-10">
            You will be amazed if you take part in this sailing Komodo island
            tour <br /> package. So it is also mandatory for you, besides
            enjoying Komodo <br /> tourism on Komodo Island, you also have to
            taste the marine tourism. <br /> The beautiful waters of Komodo will
            make you meet many travelers <br /> from other countries.
          </p>
          <h6 className="uppercase text-yellow-400 cursor-pointer mt-10">
            read more ——≻
          </h6>
        </div>
      </div>
      <div className="SwiperS w-[1500px] ml-[9px] h-[1000px] mt-[900px] ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[1500px] h-[1000px]">
            <Image
              className="absolute"
              src="/tog.png"
              alt="Error"
              width={1500}
              height={1000}
            />
            <div className="text absolute text-white ml-[200px] z-50 mt-[500px]">
              <h3 className="text-center tracking-[0.3em] mt-[80px] uppercase text-yellow-400 font-semibold mb-4 text-3xl">
                ——— Bromo ———
              </h3>
              <h1 className="text-center text-5xl mb-4">
                Steady your steps, we <br /> will climb together!
              </h1>
              <p className="text-center text-2xl text-white">
                Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
                splendor of Mount Semeru that soars into the <br /> sky, and
                gazing at the beauty of the sun moving out of its bed or
                otherwise enjoying the dim twilight from <br /> the Bromo ridge
                is an unforgettable experience when visiting Bromo.
              </p>
              <h6 className="uppercase text-center text-yellow-400 text-2xl cursor-pointer mt-10">
                read more ——≻
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="absolute"
              src="/tog.png"
              alt="Error"
              width={1500}
              height={1000}
            />
            <div className="text absolute text-white ml-[200px] z-50 mt-[500px]">
              <h3 className="text-center tracking-[0.3em] mt-[80px] uppercase text-yellow-400 font-semibold mb-4 text-3xl">
                ——— Bromo ———
              </h3>
              <h1 className="text-center text-5xl mb-4">
                Steady your steps, we <br /> will climb together!
              </h1>
              <p className="text-center text-2xl text-white">
                Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
                splendor of Mount Semeru that soars into the <br /> sky, and
                gazing at the beauty of the sun moving out of its bed or
                otherwise enjoying the dim twilight from <br /> the Bromo ridge
                is an unforgettable experience when visiting Bromo.
              </p>
              <h6 className="uppercase text-center text-yellow-400 text-2xl cursor-pointer mt-10">
                read more ——≻
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className=""
              src="/tog.png"
              alt="Error"
              width={1500}
              height={1000}
            />
            <div className="text absolute text-white ml-[200px] z-50 mt-[500px]">
              <h3 className="text-center tracking-[0.3em] mt-[80px] uppercase text-yellow-400 font-semibold mb-4 text-3xl">
                ——— Bromo ———
              </h3>
              <h1 className="text-center text-5xl mb-4">
                Steady your steps, we <br /> will climb together!
              </h1>
              <p className="text-center text-2xl text-white">
                Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
                splendor of Mount Semeru that soars into the <br /> sky, and
                gazing at the beauty of the sun moving out of its bed or
                otherwise enjoying the dim twilight from <br /> the Bromo ridge
                is an unforgettable experience when visiting Bromo.
              </p>
              <h6 className="uppercase text-center text-yellow-400 text-2xl cursor-pointer mt-10">
                read more ——≻
              </h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Main_2 flex m-auto ml-[5%] mt-[200px] z-50 bg-gradient-to-r from-black via-neutral-900 to-black  h-[120vh] w-[90%] bg-black shadow-[0_0_60px_10px_rgba(0,0,0,0.99)]">
        <div className="Part mt-24 ml-10">
          <h3 className="tracking-[0.3em] mt-[80px] uppercase text-yellow-400 font-semibold">
            —————— INDONESIAN CULTURE
          </h3>
          <h1 className="text-6xl H font-mono font-extrabold text-white">
            <span>Our culture here</span>
            <span>is very friendly</span>
            <span>to people</span>
          </h1>
          <p className="text-white mt-10">
            known for his politeness, manners and gentleness. This becomes a{" "}
            <br />
            characteristic when they mingle with other tribes and become basic
            traits <br /> that are passed down by their ancestors.
          </p>
          <h6 className="uppercase text-yellow-400 cursor-pointer mt-10">
            read more ——≻
          </h6>
        </div>
        <Image
          src={"/Image.png"}
          className="w-[600px] h-[700px] ml-44 mt-10"
          alt="Error"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default Main;
