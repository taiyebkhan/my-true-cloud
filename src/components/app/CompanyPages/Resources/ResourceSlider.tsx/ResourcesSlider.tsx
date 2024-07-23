import React, { useRef, useState } from "react";
import book1 from "../../../../../assets/img/resources/gala_brochure-black.png";
import paper1 from "../../../../../assets/img/resources/game-icons_paper-black.png";
import book2 from "../../../../../assets/img/resources/gala_brochure.png";
import paper2 from "../../../../../assets/img/resources/game-icons_paper.png";
import ResourcesFaq from "../ResourcesFaq/ResourcesFaq";
import ResourcesTest from "../ResourcesTest/ResourcesTest";
import RescourcesBrochures from "../RescourcesBrochures/RescourcesBrochures";
import RescourcesWhitePaper from "../RescourcesWhitePaper/RescourcesWhitePaper";
// import img1 from "../../../../../assets/img/enterprises-images/slider-1.png";

const btnData = [
  { name: "Brochures", icon: book2, icon1: book1},
  { name: "White Papers", icon: paper2 , icon1: paper1},
  { name: "FAQ", icon: paper2, icon1: paper1 },
  { name: "Testimonials", icon: paper2, icon1: paper1 },
];

const page1 = ( <RescourcesBrochures />);
const page2 = (<RescourcesWhitePaper />);
const page3 = (<ResourcesFaq />);

const page4 = (
  <>
   <div className="w-full">
      <h1 className="font-['inter'] text-[24px] font-bold leading-[31px] tracking-normal text-left py-[19px]">
      Testimonials
      </h1>

      <div className="m-auto">
        <ResourcesTest
         />
      </div>
    </div>
  </>
);

const sliderData = [
  {
    pages: page1,
  },
  {
    pages: page2,
  },
  {
    pages: page3,
  },
  {
    pages: page4,
  },
];

const ResourcesSlider = () => {
  const [currentTab, setCurrentPage] = useState<string>(btnData[0].name);
  const constainerRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const changeSlide = (index: number) => {
    const slideWidth = (slideRef.current as HTMLElement).offsetWidth;

    if (constainerRef.current) {
      constainerRef.current.scrollLeft = slideWidth * index;
    }
  };

  return (
    <section className="mb-28">
      <div className="innerContainer">
        <div className="rounded-2xl overflow-hidden w-full">
          {/* btns */}
          <div className="border-b  border-[#0000005C]">
            {btnData.map((item, i) => (
              <button
                onClick={() => {
                  changeSlide(i);
                  setCurrentPage(item.name);
                }}
                className={`font-['montserrat'] text-[18px] text-left leading-[30.42px]  py-2.5 px-1 border-b-[5px] ${
                  item.name === currentTab
                    ? "border-[var(--color-primary)] border-b-[5px] font-bold leading-30 tracking-tight text-[#0D71AC]"
                    : "border-transparent"
                }`}
                key={item.name}
              >
                <span className="flex">
                  <img
                    src={item.name === currentTab ? item.icon : item.icon1 }
                    alt=""
                    className="px-2 h-[30px]"
                  />
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* content */}
          <div
            ref={constainerRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {sliderData.map((item, i) => {
              return (
                <div
                  ref={slideRef}
                  key={i}
                  className="pb-20 px-1 pt-3 flex gap-x-32 min-w-full justify-between"
                >
                  {item.pages}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSlider;
