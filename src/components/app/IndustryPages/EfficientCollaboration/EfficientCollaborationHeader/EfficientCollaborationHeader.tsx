import React from "react";
import styles from "./EfficientCollaborationHeader.module.css";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import parse from "html-react-parser";

const EfficientCollaborationHeader: React.FC<{
  headerClasses?: string;
  mainHeading: string;
  heading: string;
  description: string;
}> = (props) => {
  return (
    <>
      <header
        className={`${styles.header} ${
          props.headerClasses ? props.headerClasses : ""
        }`}
      >
        <div className="innerContainer">
          <h1 className="max-md:leading-relaxed text-white max-sm:text-xl max-md:text-[30px] max-md:leading-relaxed max-lg:text-[40px] text-center">
            {parse(props.mainHeading)}
          </h1>
        </div>
      </header>

      <section className="max-sm:mb-10 max-lg:mb-16  mb-28">
        <div className="innerContainer text-center">
          <h1 className="max-sm:text-xl max-lg:text-[35px] max-lg:leading-relaxed max-sm:text-xl max-sm:mb-2 sm:mb-6 max-md:text-[30px]">
            {parse(props.heading)}
          </h1>
          <p className="text-lg max-xs:mb-4 mb-8 max-w-screen-lg mx-auto  max-sm:text-sm">
            {props.description}
          </p>
          <ButtonPrimary className="mx-auto">Book a Demo</ButtonPrimary>
        </div>
      </section>
    </>
  );
};

export default EfficientCollaborationHeader;
