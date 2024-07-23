import React from "react";
import styles from "./MyCrmHeader.module.css";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import img from "../../../../../assets/img/home-header-img-1.png";
import effectImg from "../../../../../assets/img/effect.png";
const MyCrmHeader = () => {
  return (
    <>
      <header className="max-md:pt-8 max-lg:pt-12 pt-24 max-md:mb-16 mb-28">
        <div className="innerContainer relative max-lg:flex-col flex justify-center items-center">
          <img src={effectImg} alt="effect-img" className={styles.effectImg} />
          <div className="max-w-[815px] max-lg:mr-auto">
            <h1 className="font-black font-['Inter'] max-md:mb-2.5 mb-3">
              My CRM
            </h1>
            <h6 className="max-xs:text-xs max-sm:text-sm max-md:text-lg max-lg:text-xl text-2xl font-bold font-['Montserrat'] leading-10 tracking-wide max-md:mb-2.5 mb-3">
              Empower Your Team - Win More Business
            </h6>
            <p className="font-normal font-['Montserrat'] tracking-wide max-md:mb-4 mb-6">
              Customer Relationship Management (CRM) is all about how you want
              to touch your Prospects and Customers. MTC understands a key
              element in achieving efficiency and productivity is simplicity.
              Our comprehensive CRM solution goes beyond the boundaries of
              traditional CRM solutions by including features that will
              differentiate your sales team from the laundry list of
              competitors, and empower the sales and marketing teams to
              collaborate in a simple environment to form winning strategies.
            </p>

            <div className="max-w-48">
              <ButtonPrimary>Book a Demo</ButtonPrimary>
            </div>
          </div>

          <img src={img} alt="img" className="max-sm:max-w-[308px] max-md:max-w-xs max-w-md max-md:mt-6" />
        </div>
      </header>
    </>
  );
};

export default MyCrmHeader;
