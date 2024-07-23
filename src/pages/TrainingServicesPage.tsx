import React from "react";
import "../../src/index.css";
import TrainingServicesHeader from "../components/app/ServicesPages/TrainingServicesComponents/TrainingServicesHeader/TrainingServicesHeader";
import TrainingServicesToolsSection from "../components/app/ServicesPages/ConsultingServicesComponents/TrainingServicesToolsSection/TrainingServicesToolsSection";
import img from "../assets/img/training-services-images/contact-img.png";

const TrainingServicesPage = () => {
  return (
    <>
      <TrainingServicesHeader />
      <TrainingServicesToolsSection />

      <section className="bgDark">
        <div className="innerContainer max-md:flex max-md:flex-col w-full  max-md:py-10 pt-28 max-md:pb-0 pb-32 text-white relative">
          <div>
            <p className="max-w-[535px] max-sm:text-sm max-lg:text-lg  text-2xl leading-10">
              MTC will continue to focus on providing a comprehensive training
              program, so we would like to hear your feedback. If you have any
              inquiries, comments or questions, please
              <a className="colorPrimary font-bold cursor-pointer hover:underline">
                contact us..
              </a>
            </p>
          </div>
          <div>
            <img
              className="md:absolute md:right-0 md:bottom-0 picImg  mx-auto max-xs:w-[220px] max-sm:w-[330px] max-md:w-[430px]  max-w-[524px]"
              src={img}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingServicesPage;
