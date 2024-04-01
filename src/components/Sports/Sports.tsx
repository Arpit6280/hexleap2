"use client";
import React from "react";
import Image from "next/image";
import plyr1 from "../../../public/Images/player1.png";
import plyr2 from "../../../public/Images/player2.jpg";
import plyr3 from "../../../public/Images/player3.png";
import ad from "../../../public/Images/ad.png";
import ThemeSwitch from "../ThemeSwitch";
import Cards from "./Card";

export type objType = {
  img: object;
  name: string;
  events: string;
  sport: string;
  alt: string;
};

function Sports() {
  const items: Array<objType> = [
    {
      img: plyr1,
      name: "Sacramento River Cats",
      events: "48 Events",
      sport: "Baseball",
      alt: "player1",
    },
    {
      img: plyr2,
      name: "Las Vegas Aviators",
      events: "28 Events",
      sport: "Baseball",
      alt: "player2",
    },
    {
      img: plyr3,
      name: "New Jersey Devils",
      events: "15 Events",
      sport: "Ice Hockey",
      alt: "player3",
    },
    {
      img: plyr2,
      name: "Las Vegas Aviators",
      events: "28 Events",
      sport: "Baseball",
      alt: "player2",
    },
  ];
  return (
    <>
      <div className=" w-full mx-5">
        <div className="absolute cursor-pointer max-[374px]:right-2 min-[375px]:right-6 min-[425px]:right-8 top-5 border-2 p-2 rounded-lg bg-[#DFDFDf] border-[#DFDFDf] dark:bg-[#3B3E47] dark:border-[#3B3E47]">
          <ThemeSwitch />
        </div>
      </div>
      <div className="mx-5 text-black dark:text-white  pt-20 ">
        <h1 className="  pb-4 text-[#000] dark:text-[#FFF] underline underline-offset-[10px] decoration-[#738FFF] decoration-2 font-bold text-2xl max-[360px]:mx-8 min-[375px]:mx-12 min-[425px]:mx-16 md:mx-[6.5rem] min-[1440px]:mx-6 min-[1525px]:mx-16 my-4">
          Sports
        </h1>
        <div className="flex w-[90vw] justify-center gap-5 flex-wrap">
          {items.map((item: objType, index: number) => (
            <Cards key={index} {...item} />
          ))}
          <div className=" p-2 bg-white dark:bg-[#3B3E47] shadow-lg hover:scale-103 transition-all ease-in-out duration-700">
            <div className="h-full border-[#006555] border-solid border-[0.2px] ">
              <div className="relative">
                <p className="absolute right-0 top-0 bg-black text-white py-1 px-4">
                  Ad
                </p>
                <Image src={ad} alt="img" />
              </div>

              <section className="mt-3 ">
                <h3 className=" text-center font-semibold text-lg my-2 ">
                  Advertisement title
                </h3>
                <p className="text-[#525965] dark:text-[#DFDFDF] text-[12.8px]  pl-3  w-[188px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="py-2 text-white px-7 bg-[#2C9CF0]  hover:bg-[#4991ef] text-sm rounded-sm">
            See More
          </button>
        </div>
      </div>
    </>
  );
}

export default Sports;
