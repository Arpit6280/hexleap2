"use client";
import Image from "next/image";
import { objType } from "./Sports";

function Cards(props: objType) {
  let imgs: any = props.img;
  return (
    <div className=" p-2 bg-white  dark:bg-[#3B3E47] w-[235px] shadow-lg hover:scale-103 transition-all ease-in-out duration-700">
      <Image src={imgs} alt={props.alt} width={218} height={385} />
      <section className="mt-3">
        <h3 className="  text-lg my-2">{props.name}</h3>
        <div className="flex gap-10  bg-[#F7F7F8]  dark:bg-[#292B32] rounded-sm p-2">
          <div className="flex flex-col">
            <p className="text-[#525965] dark:text-[#DFDFDF] text-[12px] mb-[2px]">
              Total Event
            </p>
            <p className=" text-sm">{props.events}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#525965] dark:text-[#DFDFDF] text-[12px] mb-[2px]">
              Sport
            </p>
            <p className=" text-sm">{props.sport} </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
