import React from "react";
import styles from "./AboutHeader.module.css";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";
import img from "../../../../assets/img/about-header.png";
import effectImg from "../../../../assets/img/about-header-bg-effect.png";
import mtcHeadingImg from "../../../../assets/img/about-header-mtc.svg";

const AboutHeader = () => {
  return (
    <header
      className={`max-sm:pt-[20px] max-md:pt-[30px] pt-[90px] relative ${styles.header}`}
    >
      <img src={effectImg} alt="effect-img" className={styles.effectImg} />
      <div className="innerContainer">
        <h2 className="text-center max-sm:mb-4 mb-6 font-black">
          Shaping the Future through{" "}
          <span className="colorPrimary" >Strategic Investments</span>
        </h2>

        <p className=" mx-auto max-w-[1288px] max-xs:text-sm mb-10 text-center max-lg:text-lg text-xl font-normal font-['Inter'] leading-[37.60px] tracking-wide">
          AtPanaya Holdings, we are more than just a business entity – we are
          architects ofopportunity, builders of growth, and stewards of
          prosperity. As a premierholdings company, we specialize in nurturing
          and enhancing the potential ofdiverse enterprises across various
          industries. With a commitment to innovation,sustainability, and
          excellence, we shape the future by strategically investingin the
          companies that drive progress and inspire change.
        </p>

        <div className="flex max-w-md gap-x-5 max-md:mb-3 mb-6 mx-auto relative z-10">
          <ButtonPrimary className="w-[50%] mx-auto ">
            Request a Demo
          </ButtonPrimary>
          {/* <ButtonPrimary className="w-full" variant="outlined">
            Free Demo
          </ButtonPrimary> */}
        </div>

        <div className="mb-16 relative">
          {/* <div
            className={`${styles.mtcImgText} text-[183px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-black font-['Inter'] leading-none tracking-[5.49px]`}
          >
            MYTRUECLOUD
          </div> */}
          <img
            className={`${styles.mtcImgText} max-sm:mb-6 mb-10`}
            src={mtcHeadingImg}
            alt="img"
          />
          <img src={img} alt="img" className=" w-full" />
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
