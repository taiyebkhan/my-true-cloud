import React, { useState } from "react";
import ButtonPrimary from "../components/partials/Buttons/ButtonPrimary";
import CallIcon from "../components/icon/CallIcon";
import OutlinedLocationIcon from "../components/icon/OutlinedLocationIcon";
import { GoogleMap } from "@react-google-maps/api";
import ContactPageMap from "../components/ContactPageComponents/ContactPageMap";
import mapImg from "../assets/img/map-img.png";

const feilds = [
  {
    placeholder: "Name *",
  },
  {
    placeholder: "Company Name",
  },
  {
    placeholder: "Phone number *",
  },
  {
    placeholder: "Support",
  },
  {
    placeholder: "Comment",
  },
];

const contactDetailsData = [
  {
    title: "PHONE",
    text: "(949) 622-5483",
    icon: <CallIcon />,
  },
  {
    title: "MY TrueCloud — Corporate Headquarters",
    text: "19200 Von Karman Avenue, Suite 400 Irvine, CA 92612",
    icon: <OutlinedLocationIcon />,
  },
  {
    title: "PHONE",
    text: "(949) 413-3217",
    icon: <CallIcon />,
  },
  {
    title: "MY TrueCloud — Technical Support and Data Center",
    icon: <OutlinedLocationIcon />,
  },
];

const ContactPage = () => {
  return (
    <section className="relative max-xs:pt-0 max-lg:pt-5 pt-[73px] min-[540px]:mb-10">
      <div className="absolute top-0 h-full right-0 min-[995px]:w-[25%] bg-black -z-10" />
      <div className="innerContainer max-[995px]:flex-col flex gap-x-10 justify-between">
        <div className="max-w-[547px] mx-auto">
          <h1 className="max-sm:text-[30px] max-md:text-[40px] text-[54px] fontInter md:mb-5">
            Get in <span className="colorPrimary">Touch</span>
          </h1>

          <p className="max-w-[470px] font-medium mb-6">
            Feel free to contact us and we will get back to you as soon as
            possible.
          </p>

          <form className="flex flex-col gap-y-5 mb-6">
            {feilds.map((item, i) => (
              <input
                key={i}
                placeholder={item.placeholder}
                className="py-3 px-5 rounded-2xl border border-gray-500 hover:border-gray-800 transition duration-200"
              />
            ))}

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" />
              <label>
                I agree to the{" "}
                <a
                  className="underline"
                  href="https://mytruecloud.com/contact/#spu-388"
                >
                  Terms of Use and Subscription Agreement
                </a>{" "}
                of the company
              </label>
            </div>

            <ButtonPrimary>SEND</ButtonPrimary>
          </form>

          <div className="grid max-[540px]:grid-cols-1 grid-cols-3 max-sm:gap-x-5 gap-x-11 gap-y-6">
            {contactDetailsData.map((item, i) => (
              <div
                key={i}
                className={`flex gap-x-4 ${i % 2 ? "col-span-2" : ""}`}
              >
                {item.icon}
                <div className="font-normal">
                  <p className="text-[13px] font-medium mb-1">{item.title}</p>
                  {item.text && (
                    <p className="text-[13px] colorPrimary">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" mx-auto pt-5 max-w-[608px] ">
          {/* <ContactPageMap /> */}
          <img
            src={mapImg}
            alt="img"
            className="max-xs:w-[320px] max-sm:w-[400px] max-md:w-[500px] w-full max-[1160px]:w-[500px] max-w-[608px] mx-auto "
          />
        </div>
      </div>
      {/* <div className="max-[540px]:bg-[#131313] max-[540px]:h-[250px] max-[540px]:relative max-[540px]:top-[-120px] z-[-1]"></div> */}
    </section>
  );
};

export default ContactPage;
