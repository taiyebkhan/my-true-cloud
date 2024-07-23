import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";
import img from "../../../../assets/img/home-about-section.png";

const HomeAboutComponent = () => {
  return (
    <section className="max-sm:mt-10 max-md:mt-14 max-lg:mt-20 mt-32 max-md:mb-14 max-lg:mb-24 mb-44">
      <div className="flex max-lg:flex-col max-w-screen-2xl gap-x-10 mx-auto max-lg:items-start items-center gap-y-5 justify-between max-lg:pl-0 max-[1280px]:pl-14 max-2xl:pl-24">
        <motion.div
          className="max-lg:px-9 max-lg:max-w-full max-lg:w-full max-w-[605px] max-2xl:w-1/2"
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.5,
          }}
        >
          <div className="mb-3 px-[22px] py-[7px] bgPrimaryLight rounded-[21px] justify-center items-center gap-0.5 inline-flex">
            <div className="text-center text-xs font-medium font-['Inter'] leading-normal">
              COMMITMENT
            </div>
          </div>

          <h2 className="">
            <span className="text-neutral-900 text-[44px] font-extrabold font-['Inter'] leading-[58px]">
              About{" "}
            </span>
            <span className="colorPrimary text-[44px] font-extrabold font-['Inter'] leading-[58px]">
              Us
            </span>
          </h2>

          <div className="mb-8 font-normal">
            Welcome! The team at MY TrueCloud is committed to providing a
            partnership that our customers can count on to help them compete in
            a global market. To accomplish this, we are focused on developing
            cutting-edge technology that changes the paradigm on how businesses
            conduct their day-to-day activities.
            <br />
            MTC combines state of the art secure cloud-computing and mobile
            technologies into our solutions; we are committed to providing our
            customers an advance secure collaboration platform like no other in
            the market.
          </div>

          <div className="max-w-48">
            <ButtonPrimary>Read More</ButtonPrimary>
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg mt-3 max-lg:ml-auto max-md:w-[85%] max-w-[680px] max-h-[500px] rounded-r-none border-[8px] border-transparent shadow-2xl"
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(8px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.5,
          }}
        >
          <img
            src={img}
            alt="img"
            className="w-full h-full rounded-md rounded-r-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutComponent;
