import React from "react";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import img from "../../../../../assets/img/manufacturing-page-images/header.png";

const ManufacturingHeader = () => {
  return (
    <header className="pt-11 max-sm:mb-10 max-md:mb-20 mb-28 bgGray">
      <div className="innerContainer text-center">
        <h1 className="mb-6  max-sm:mb-2 max-xs:text-xl">MANUFACTURING</h1>
        <p className="max-w-[810px] mx-auto mb-8">
          The integration of smart manufacturing systems is enabled by
          connecting people, systems and machines through a digital thread of
          information from design, manufacturing and field support.
        </p>

        <ButtonPrimary className="mx-auto">Book a Demo</ButtonPrimary>
      </div>
      <img
        src={img}
        alt="img"
        className="w-full max-w-[1380px] mx-auto max-xl:-translate-x-2 -translate-x-8"
      />
    </header>
  );
};

export default ManufacturingHeader;
