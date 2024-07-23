import React from "react";
import { motion } from "framer-motion";
import Header from "../components/app/Home/Header/Header";
import NumberCounter from "../components/app/Home/NumberCounter/NumberCounter";
import AdvantagesSection from "../components/app/Home/AdvantagesSection/AdvantagesSection";
import HomeAboutComponent from "../components/app/Home/HomeAboutComponent/HomeAboutComponent";
import HomeInnovationSection from "../components/app/Home/HomeInnovationSection/HomeInnovationSection";
import HomeBlogsSection from "../components/app/Home/HomeBlogsSection/HomeBlogsSection";
import img from "../assets/img/home-get-solution-img.png";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <NumberCounter /> */}
      <motion.div
        className="max-w-screen-xl mx-auto max-sm:max-w-[90%] max-xl:max-w-[95%] homeGetSolutionCard max-sm:mt-[47px] max-sm:mb-[35px] my-[74px] rounded-2xl overflow-hidden max-sm:pb-2 max-lg:pt-[22px] max-lg:pl-8 pl-14 items-center max-lg:flex-col flex justify-between"
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: .3 }}
      >
        {/* <div className="innerContainer max-sm:max-w-[90%] max-xl:max-w-[95%] homeGetSolutionCard max-sm:mt-[47px] max-sm:mb-[35px] my-[74px] rounded-2xl max-sm:pb-2 max-lg:pt-[22px] max-lg:px-8 px-14 items-center max-lg:flex-col flex justify-between "> */}
        <div className="max-w-[635px]">
          <h4 className="max-xs:text-xs max-md:text-lg text-2xl font-extrabold fontInter mb-3">
            Get Solution To Your IT Problems, We Empower & Accelerate Your
            Digital Journey.
          </h4>
          <p className="max-xs:leading-4 max-xs:text-[10px] max-md:text-sm text-[15px]">
            Discover seamless integration and limitless possibilities with our
            cloud computing platform – your ultimate one-stop shop for all your
            digital needs
          </p>
        </div>

        <img
          src={img}
          alt="img"
          className="max-xs:max-w-36 max-sm:max-h-36 max-md:max-h-44 max-h-[244px]"
        />
        {/* </div> */}
      </motion.div>
      <AdvantagesSection />
      <HomeAboutComponent />
      <HomeInnovationSection />
      <HomeBlogsSection />
    </>
  );
};

export default HomePage;
