import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../assets/img/logo.png";
import { Button, TextField } from "@mui/material";
import SelectDropdown from "../../partials/SelectDropdown/SelectDropdown";
import ButtonPrimary from "../../partials/Buttons/ButtonPrimary";
import { Facebook, LinkedIn } from "@mui/icons-material";
import InstagramFilledIcon from "../../icon/InstagramFilledIcon";
import TwitterIcon from "../../icon/TwitterIcon";
import FaceBookIcon from "../../icon/FaceBookIcon";
import LinkedinIcon from "../../icon/LinkedinIcon";
import { useLocation } from "react-router-dom";

const links = {
  products: [
    { text: "My CRM", link: "#" },
    { text: "My Documents", link: "#" },
    { text: "My Web Conferences", link: "#" },
    { text: "My Security", link: "#" },
    { text: "ERP", link: "#" },
  ],
  company: [
    { text: "About Us", link: "#" },
    { text: "Contact", link: "#" },
    { text: "Career", link: "#" },
  ],
};
const linksArr = Object.keys(links);

const Footer = () => {
  const { pathname } = useLocation();

  const hideGetStarted = [
    "/careers",
    "/partner-application-form",
    "/contact",
    "/company-events",
  ];

  return (
    <>
      {!hideGetStarted.includes(pathname) ? (
        <div className="max-sm:py-10 max-lg:py-14 py-20 bgGray">
          <h2 className="text-center mb-3">
            <span className="text-black font-black font-['Inter'] leading-[57.20px]">
              Get Started with{" "}
            </span>
            <span className="colorPrimary font-black font-['Inter'] leading-[57.20px]">
              MY TRUE CLOUD.
            </span>
          </h2>

          <p className="max-sm:max-w-[330px] mx-auto max-xs:text-xs max-sm:text-sm max-md:text-base max-lg:text-xl text-2xl text-center mb-9 font-medium font-['Montserrat'] leading-10 tracking-wide">
            True Secure Cloud Collaboration - Anytime, Anywhere, Any Device
          </p>

          <div className="flex justify-center items-center gap-x-5 max-w-md mx-auto">
            <ButtonPrimary>Start for free</ButtonPrimary>
            <ButtonPrimary variant="outlined">Free Demo</ButtonPrimary>
          </div>
        </div>
      ) : (
        ""
      )}

      <footer className="pt-20 pb-24 ">
        <div className="innerContainer">
          {/* links and form */}
          <div className="max-md:flex-col flex gap-y-10 max-lg:gap-x-10 justify-between mb-16">
            <div>
              <img src={logo} alt="img" className="max-w-[248px] mb-11" />

              {/* links */}
              <div className="flex gap-x-16">
                {linksArr.map((item, i) => {
                  const key = item as keyof typeof links;
                  return (
                    <div key={i} className="flex flex-col gap-y-3">
                      <p className=" text-lg font-bold font-['Inter'] capitalize mb-1">
                        {key}
                      </p>
                      {links[key].map((link) => (
                        <a
                          className="opacity-75 pl-1 hover:underline"
                          key={link.text}
                          href={link.link}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
            <form className={`max-md:max-w-full max-lg:max-w-[50%] max-w-xl w-full ${styles.form}`}>
              <input placeholder="Name *" />
              <input placeholder="Email" />
              <select>
                <option defaultChecked value={""}>
                  Select Product
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <textarea placeholder="Message" rows={4} />

              <ButtonPrimary>Send</ButtonPrimary>
            </form>
          </div>

          {/* copyright and social */}
          <div className="flex max-md:flex-col-reverse gap-y-5 items-center justify-between">
            <p className="max-sm:text-xs max-md:max-w-72 max-md:text-center text-[15px] font-normal font-['Montserrat'] leading-relaxed">
              COPYRIGHT © 2024 MY TRUE CLOUD. ALL RIGHTS RESERVED.
            </p>

            <div
              className={`flex gap-x-10 items-center ${styles.footerIconContainer}`}
            >
              <FaceBookIcon />
              <InstagramFilledIcon />
              <LinkedinIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
