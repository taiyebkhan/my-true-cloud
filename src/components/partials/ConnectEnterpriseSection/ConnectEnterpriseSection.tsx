import React from "react";
import img from "../../../assets/img/manufacturing-page-images/connect.png";

const ConnectEnterpriseSection: React.FC<{
  heading: string;
  text: string;
}> = ({ heading, text }) => {
  return (
    <section className="max-sm:pt-10 max-md:pt-14 pt-24">
      <div className="innerContainer max-md:flex-col-reverse flex justify-center">
        <img src={img} alt="img" className="max-md:mx-auto max-md:mt-5 max-md:max-w-[340px] max-xl:max-w-[50%] max-w-2xl max-h-[570px]" />
        <div className="max-w-[616px] max-md:mt-0 max-xl:mt-14 mt-28">
          <h2 className="mb-5 font-black fontInter">{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default ConnectEnterpriseSection;
