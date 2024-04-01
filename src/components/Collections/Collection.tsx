"use client";
import React, { useEffect, useState } from "react";
import coll1 from "../../../public/Images/collection1.jpeg";
import coll2 from "../../../public/Images/collection2.jpeg";
import Carousel from "./Carousel";

export type objCollectionType = {
  img: object;
  alt: string;
  name: string;
  day: string;
  place: string;
  collectionType: string;
};

function Collection() {
  let n: number | null = null;
  const hasWindow = typeof window !== "undefined";
  if (hasWindow) n = window.innerWidth;
  const [width, setWidth] = useState<number | null>(n);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let number: number = 3;
  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        if (hasWindow) {
          setWidth(window.innerWidth);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [width]);

  if (width !== null) {
    if (width >= 760 && width <= 1280) number = 2;
    else if (width < 760) number = 1;
  }

  const items: Array<objCollectionType> = [
    {
      img: coll1,
      alt: "collection1",
      name: "Las Vegas Aviators",
      day: "Oct 15 | Sun | 4:30 PM",
      place: " Las Vegas Ballpark, Las Vegas, Nevada",
      collectionType: "Take Flight Collection",
    },
    {
      img: coll2,
      alt: "collection2",
      name: "Sacramento River Cats",
      day: "Oct 15 | Sun | 4:30 PM",
      place: "Sutter Health Park, Sacramento, California",
      collectionType: "Orange Collection",
    },
    {
      img: coll1,
      alt: "collection1",
      name: "Las Vegas Aviators",
      day: "Oct 15 | Sun | 4:30 PM",
      place: " Las Vegas Ballpark, Las Vegas, Nevada",
      collectionType: "Take Flight Collection",
    },
    {
      img: coll2,
      alt: "collection2",
      name: "Sacramento River Cats",
      day: "Oct 15 | Sun | 4:30 PM",
      place: "Sutter Health Park, Sacramento, California",
      collectionType: "Orange Collection",
    },
    {
      img: coll1,
      alt: "collection1",
      name: "Las Vegas Aviators",
      day: "Oct 15 | Sun | 4:30 PM",
      place: " Las Vegas Ballpark, Las Vegas, Nevada",
      collectionType: "Take Flight Collection",
    },
  ];

  const visibleItems = items.slice(currentIndex, currentIndex + number);
  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleMoveRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(items.length - number, prevIndex + 1)
    );
  };
  return (
    <div className="mx-5 my-8 pt-12">
      <div
        className="prdt text-black dark:text-white 
        bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]
        dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] w-[90vw]  lg:w-[82vw]  min-h-[900px] flex flex-col items-center "
      >
        <div className=" max-w-[1085px] w-full text-center relative m-auto min-h-[798px]">
          <div className="cursor-pointer absolute  top-1/2 left-1 min-[375px]:left-[6px] min-[425px]:left-3 min-[560px]:left-12 md:left-4 lg:left-10 xl:left-4">
            <div
              className="max-[424px]:w-[25px] max-[424px]:h-[30px] w-[36.75px] h-[49px]  border border-[#2C9CF0] flex justify-center items-center"
              onClick={handleMoveLeft}
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z"
                  fill="#2C9CF0"
                ></path>
              </svg>
            </div>
          </div>
          <div className="cursor-pointer absolute top-1/2  right-1 min-[375px]:right-[6px] min-[425px]:right-3 min-[560px]:right-12 md:right-4 lg:right-10 xl:right-4">
            <div
              className="max-[424px]:w-[25px] max-[424px]:h-[30px]  w-[36.75px] h-[49px] border border-[#2C9CF0] flex justify-center items-center
              "
              onClick={handleMoveRight}
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z"
                  fill="#2C9CF0"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="min-[320px]:text-[27px] min-[375px]:text-[32px] max-[426px]:text-[35px] min-[430px]:text-[38px] md:text-[50px]   font-semibold font-poppins  ">
            Collection Spotlight
          </h1>
          <p className="p-2 max-[426px]:text-[12px] text-[13px] md:text-sm">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. <br className="hidden xl:block" /> Grab yours today!
          </p>
          <div className="flex justify-center md:gap-6 lg:gap-10 mt-6 pb-6 overflow-hidden">
            {visibleItems.map((item: objCollectionType, index: number) => (
              <Carousel key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
