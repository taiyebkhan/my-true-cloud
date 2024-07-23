import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import img from "../../../assets/img/crm-pricing-img.png";
// import effect from "../../../assets/img/effect-dark-left.png";
import effect from "../../../assets/img/effect-dark-left.png";

const ProductPricingComponent: React.FC<{ sectionClasses?: string }> = ({
  sectionClasses,
}) => {
  return (
    <section
      className={`lightBackground relative ${
        sectionClasses ? sectionClasses : ""
      }`}
    >
      <div className="absolute h-full overflow-y-hidden max-sm:left-[35%] max-sm:w=[160%] max-md:w-[120%] max-lg:w-[80%] max-md:left-1/2 max-lg:left-[70%] left-[55%] top-0">
        <img
          src={effect}
          alt="img"
          className="max-md:-translate-y-[10%] -translate-y-[20%] opacity-80"
        />
      </div>
      <div className="innerContainer max-md:flex-col flex max-md:items-center max-lg:items-end justify-between">
        <div className="max-lg:py-7 py-[70px] max-lg:max-w-xl max-w-[719px]">
          <h2 className="font-extrabold max-sm:mb-2.5 max-md:mb-3 mb-4">
            Pricing
          </h2>

          <p className="font-normal tracking-wide mb-2">
            Customer Relationship Management (CRM) is all about how you want to
            touch your Prospects and Customers. MTC understands a key element in
            achieving efficiency and produc
          </p>

          <p className="max-md:mb-4 mb-[22px] max-xs:text-xs max-sm:text-sm max-md:text-lg max-lg:text-xl text-2xl font-medium font-['Montserrat'] leading-10 tracking-wide">
            For only 20$/Month
          </p>

          <ButtonPrimary>Book a Demo</ButtonPrimary>
        </div>

        <img
          src={img}
          alt="img"
          className="max-xs:max-w-72 max-lg:max-w-80 max-xl:max-w-[400px] z-10 relative max-w-[424px] max-lg:translate-y-7 translate-y-12"
        />
      </div>
    </section>
  );
};

export default ProductPricingComponent;
