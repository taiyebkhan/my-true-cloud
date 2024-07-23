import React, { useRef } from "react";
import img1 from "../../../../../assets/img/consulting-services-images/card-1.png";
import img2 from "../../../../../assets/img/consulting-services-images/card-2.png";
import img3 from "../../../../../assets/img/enterprises-images/card-7.png";
import img4 from "../../../../../assets/img/consulting-services-images/card-4.png";
import img5 from "../../../../../assets/img/consulting-services-images/card-5.png";
import img6 from "../../../../../assets/img/consulting-services-images/card-6.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const data = [
  {
    img: img1,
    text: "Ensure IT compliance with HIPAA, GLBA and SOX regulations",
  },
  {
    img: img2,
    text: "Develop processes to effectively digitize existing paper documents to eliminate the need to maintain hard-copy files (a looming requirement for many industries)",
  },
  {
    img: img3,
    text: "Establish data security procedures based on your company’s policies and IT infrastructure to maximize data privacy and document management controls to secure critical information",
  },

  {
    img: img4,
    text: "Develop a mobile configuration template based on your company’s procedures, workflow and hardware to create a mobile office using any tablet to empower your mobile users",
  },
  {
    img: img5,
    text: "Mapping data fields, working with 3rd Party API’s and developing data connectors to transfer data to and from 3rd Party applications",
  },
  {
    img: img6,
    text: "Test the security of your corporate network (yes, thinking like Hackers)",
  },
];

const ConsultingServicesSlider = () => {
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const slideNextHandler = () => {
    slideHandler();
  };
  const slidePrevHandler = () => {
    slideHandler(true);
  };

  const slideHandler = (prev?: boolean) => {
    const currentPosition = (sliderContainerRef.current as HTMLDivElement)
      .scrollLeft;
    const cardWidth = cardRef.current?.offsetWidth;

    const style = getComputedStyle(sliderContainerRef.current as HTMLElement);
    const gap = style.columnGap.replace("px", "");

    if (!cardWidth) return;

    // need to make gap (22) value dynamic
    if (prev) {
      (sliderContainerRef.current as HTMLDivElement).scrollLeft =
        currentPosition - (cardWidth + +gap);
    } else {
      (sliderContainerRef.current as HTMLDivElement).scrollLeft =
        currentPosition + (cardWidth + +gap);
    }
  };

  return (
    <section className="mb-8">
      <div className="innerContainer py-[84px] relative max-md:flex-col flex justify-between max-xl:gap-x-20 gap-x-[125px]">
        <div className="absolute top-0 h-full w-screen bg-black -z-10 right-[10%]" />
        <div className="max-lg:min-w-[250px] max-w-[360px] w-full flex flex-col">
          <h2 className="font-black text-white max-md:mb-8 max-xs:max-w-56 max-sm:max-w-72">
            Some areas where <span className="colorPrimary">MTC</span> can help
          </h2>

          <div className="flex gap-x-[22px] mt-auto max-md:hidden">
            <ButtonPrimary
              className="w-16 max-w-16 h-[58px]"
              onClick={slidePrevHandler}
            >
              <ArrowBackIosNew />
            </ButtonPrimary>

            <ButtonPrimary
              className="w-16 max-w-16 h-[58px]"
              onClick={slideNextHandler}
            >
              <ArrowForwardIos />
            </ButtonPrimary>
          </div>
        </div>

        <div
          ref={sliderContainerRef}
          className="flex gap-x-[18px] overflow-x-hidden scroll-smooth pb-2 pr-[10%]"
        >
          {data.map((item, i) => (
            <div
              ref={cardRef}
              key={i}
              className="max-lg:py-[22px] py-10 max-lg:px-5 px-9 max-xs:min-w-[230px] max-sm:min-w-[290px] max-md:min-w-[320px] max-lg:min-w-[350px] min-w-[400px] max-w-[400px] rounded-2xl min-h-484px bg-white shadow-md"
            >
              <img src={item.img} alt="card-img" className="mb-6 max-md:max-h-32 max-h-52" />
              <p className="max-xs:text-[10px]" >{item.text}</p>
            </div>
          ))}
        </div>

        <div className="gap-x-[22px] max-md:flex hidden mt-6 mx-auto">
          <ButtonPrimary
            className="w-16 max-w-16 h-[58px]"
            onClick={slidePrevHandler}
          >
            <ArrowBackIosNew />
          </ButtonPrimary>

          <ButtonPrimary
            className="w-16 max-w-16 h-[58px]"
            onClick={slideNextHandler}
          >
            <ArrowForwardIos />
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServicesSlider;
