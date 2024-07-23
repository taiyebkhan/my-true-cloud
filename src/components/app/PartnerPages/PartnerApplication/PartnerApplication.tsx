import React, { useRef, useState } from "react";
import PrimaryContactInformationForm from "./PartnerApplicationForms/PrimaryContactInformationForm";
import CompanyInformationForm from "./PartnerApplicationForms/CompanyInformationForm";
import AboutBusinessForm from "./PartnerApplicationForms/AboutBusinessForm";

const tabBtns = [
  "Primary Contact Information",
  "Company Information",
  "About Your Business",
];

const PartnerApplication = () => {
  const [activeTab, setActiveTab] = useState(tabBtns[0]);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderChildRef = useRef<HTMLDivElement | null>(null);

  const handleSlide = (index: number) => {
    const style = getComputedStyle(sliderRef.current as HTMLElement);

    const singleElementWidth = sliderChildRef.current?.clientWidth || 0;

    (sliderRef.current as HTMLElement).scrollLeft = singleElementWidth * index;
  };

  return (
    <section className="pb-24 bgGray">
      <div className="innerContainer">
        <h2 className="mb-5 font-balck text-center">
          PARTNER APPLICATION FORM
        </h2>
        <p className="max-w-[840px] mx-auto text-center mb-11">
          To apply please complete the form below. We will review your
          application and may contact you to obtain additional information.
        </p>
        <div className="flex items-center mb-11 justify-center">
          <h5 className="text-xl font-bold mr-12">Partner Type : </h5>
          <div className="colorPrimary font-bold flex gap-x-4 mr-12">
            <input type="radio" id="Reseller Partner" />
            <label htmlFor="Reseller Partner">Reseller Partner</label>
          </div>

          <div className="flex gap-x-4">
            <input type="radio" id="Reseller Partner" />
            <label htmlFor="Reseller Partner">Referral Partner</label>
          </div>
        </div>
        {/* form will come here */}

        <div className="bg-white rounded-2xl overflow-hidden shadow-md ">
          <div className="grid grid-cols-3 justify-center items-center">
            {tabBtns.map((btn, i) => (
              <button
                onClick={() => {
                  setActiveTab(btn);
                  handleSlide(i);
                }}
                key={btn}
                className={`py-4 font-bold text-white text-xl ${
                  btn === activeTab ? "bgPrimary" : "bgGrayDark"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="flex overflow-x-hidden scroll-smooth" ref={sliderRef}>
            <div ref={sliderChildRef} className="min-w-full">
              <PrimaryContactInformationForm containerClass="px-20 pt-12 pb-9" />
            </div>
            <div ref={sliderChildRef} className="min-w-full">
              <CompanyInformationForm containerClass="px-20 pt-12 pb-9" />
            </div>
            <div ref={sliderChildRef} className="min-w-full">
              <AboutBusinessForm containerClass="px-20 pt-12 pb-9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerApplication;
