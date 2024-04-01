"use client";
import React from "react";
import Image from "next/image";
import { objCollectionType } from "./Collection";

function Carousel(props: objCollectionType) {
  let imgs: any = props.img;
  return (
    <div
      className={`bg-white dark:bg-[#3B3E47]   max-[374px]:w-[220px] min-[375px]:w-[258.3px]  shadow-lg hover:scale-103 transition-all ease-in-out duration-700
              `}
    >
      <div className=" rounded-lg flex justify-center flex-col items-center ">
        <Image
          alt="img"
          src={imgs}
          width={226}
          className="
                  bg-repeat-x
                  bg-13
                  bg-bottom
                 bg-gradient-dashed
                 dark:bg-dark-gradient-dashed
                  max-[375px]:w-[200px]  py-4"
        />
      </div>
      <div className="translate-y-[-2px] relative">
        <div className="w-[20px] h-[20px] bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C]  absolute translate-x-[-12px] top-[-8px]  rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C]  absolute translate-x-[12px] right-0 top-[-8px] rounded-full"></div>
      </div>
      <div className="text-black dark:text-white mt-4 pb-3">
        <h1 className=" text-lg  line-height-[20px] my-3">{props.name}</h1>
        <p className="text-sm">
          <span>{props.day} </span>
        </p>
        <div className="w-[80%] text-sm m-auto opacity-60 my-3 ">
          <p className="text-[#525965] dark:text-[#DFDFDF]">{props.place}</p>
        </div>
        <button className="bg-black text-white py-2 w-[210px] px-4">
          {props.collectionType}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
