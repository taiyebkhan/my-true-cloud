import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import headerImg from "../../../../assets/img/header-vdo-img.png";
import parse from "html-react-parser";
import { motion } from "framer-motion";

import img1 from "../../../../assets/img/home-header-img-1.png";
import img2 from "../../../../assets/img/home-header-img-2.png";
import img3 from "../../../../assets/img/home-header-img-3.png";
import img4 from "../../../../assets/img/home-header-img-4.png";
import img5 from "../../../../assets/img/home-header-img-5.png";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";
import TeamIcon from "../../../icon/TeamIcon";
import DocumentIcon from "../../../icon/DocumentIcon";
import WebConferencesIcon from "../../../icon/WebConferencesIcon";
import SecurityLockIcon from "../../../icon/SecurityLockIcon";
import { ArrowForward, ManageAccounts } from "@mui/icons-material";
import ReqDemo from "./ReqDemo";

const data = [
  {
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. Companies that make the calls at the right time, with the right information and the right people will win the business",
    img: img1,
    heading: "My <span className='colorPrimary' >CRM</span>",
  },
  {
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. Companies that make the calls at the right time, with the right information and the right people will win the business",
    img: img2,
    heading: "My <span className='colorPrimary' >Documents</span>",
  },
  {
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. Companies that make the calls at the right time, with the right information and the right people will win the business",
    img: img3,
    heading: "My <span className='colorPrimary' >Web Conferences</span>",
  },
  {
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. Companies that make the calls at the right time, with the right information and the right people will win the business",
    img: img4,
    heading: "My <span className='colorPrimary' >Security</span>",
  },
  {
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. Companies that make the calls at the right time, with the right information and the right people will win the business",
    img: img5,
    heading: "ERP",
  },
];

const btnsData = [
  {
    heading: "My CRM",
    text: "Comprehensive CRM platform for customer-facing teams. ",
    icon: <TeamIcon />,
    color: "#8d8d8d",
  },
  {
    heading: "My Documents",
    text: "Comprehensive CRM platform for customer-facing teams. ",
    icon: <DocumentIcon />,
    color: "#ADADAD",
  },
  {
    heading: "My Web Conferences",
    text: "Comprehensive CRM platform for customer-facing teams. ",
    icon: <WebConferencesIcon />,
    color: "#BFBFBF",
  },
  {
    heading: "My Security",
    text: "Comprehensive CRM platform for customer-facing teams. ",
    icon: <SecurityLockIcon />,
    color: "#D8D8D8",
  },
  {
    heading: "ERP",
    text: "Comprehensive CRM platform for customer-facing teams. ",
    icon: <ManageAccounts />,
    color: "#EAEAEA",
  },
];

const btns = btnsData.map((item) => item.heading);

let isClicked = false;
const Header = () => {
  // const [activeTab, setActiveTab] = useState<keyof typeof data>("My CRM");
  const [activeTab, setActiveTab] = useState(0);
  const [showReqDemoForm, setShowReqDemoForm] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isClicked) {
      interval = setInterval(() => {
        if (activeTab + 1 === btns.length) {
          setActiveTab(0);
        } else {
          setActiveTab(activeTab + 1);
        }

        isClicked = false;
      }, 10000);
    } else {
      interval = setInterval(() => {
        if (activeTab + 1 === btns.length) {
          setActiveTab(0);
        } else {
          setActiveTab(activeTab + 1);
        }
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeTab]);

  const cardClickHandler = (i: number) => {
    setActiveTab(i);
    isClicked = true;
  };

  const heading = ["Welcome", "To", "MY", "TRUE", "CLOUD"];

  return (
    <>
      <ReqDemo
        show={showReqDemoForm}
        onClose={() => {
          setShowReqDemoForm(false);
        }}
      />
      <div className="innerContainer mx-auto flex max-lg:flex-col max-lg:text-center max-2xl:px-2 max-xl:justify-between max-xl:gap-x-0 gap-x-[184px] pt-1 pb-4 items-center">
        <h1 className="max-xl:leading-none max-lg:mb-2">
          {heading.splice(0, 2).map((item, i) => (
            <motion.span
              className="colorPrimary max-sm:text-xl max-md:text-3xl text-[40px] leading-none mr-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeIn",
                delay: 0.3 * (i + 1),
              }}
            >
              {item}
            </motion.span>
          ))}
          {/* <span className="colorPrimary max-sm:text-xl max-md:text-3xl text-[40px] leading-none">
            Welcome To
          </span> */}
          <br />{" "}
          {heading.map((item, i) => (
            <motion.span
              className={i + 1 !== heading.length ? "mr-3" : ""}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: 0.4 + 0.3 * (i + 1),
              }}
            >
              {item}
            </motion.span>
          ))}
          {/* MY TRUE CLOUD */}
        </h1>

        <div className="w-full max-lg:flex-col max-lg:justify-center flex justify-between">
          <p className="mb-4 leading-snug max-sm:text-xs">
            True Secure Cloud Collaboration - Anytime, <br />
            Anywhere, Any Device
          </p>

          {/* <ButtonPrimary
              className="max-sm:min-w-[140px] max-md:min-w-[175px] min-w-[208px]"
              variant="outlined"
            >
              Free Demo
            </ButtonPrimary> */}
          <ButtonPrimary
            onClick={() => {
              setShowReqDemoForm(true);
            }}
            py="py-3"
            className="self-start max-lg:mx-auto max-sm:min-w-[140px] max-md:min-w-[175px] min-w-[208px]"
          >
            Request a Demo
          </ButtonPrimary>
        </div>
      </div>

      <header className="bgDark">
        <div className="innerContainer max-2xl:px-0 max-2xl:max-w-[1536px] mx-auto overflow-x-hidden">
          {/* text and video container */}
          <div className="flex items-center max-lg:flex-col justify-between max-xl:items-center gap-x-5">
            <div className="text-white max-sm:max-w-[90%] max-lg:max-w-[80%] w-full relative max-w-[377px] max-sm:min-w-0 min-w-[377px] mx-auto min-h-[300px] max-2xl:px-3">
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.productTextContainer} ${
                    activeTab === i ? styles.slideIn : ""
                  } absolute top-1/2 -translate-y-1/2 hideAll`}
                >
                  <h2 className="font-extrabold mb-3 leading-tight">
                    {parse(item.heading)}
                  </h2>
                  <p className="max-xs:text-xs max-xs:leading-[18px] max-md:text-sm text-[15px] leading-6">
                    {item.text}{" "}
                    <a className="colorPrimary font-bold underline cursor-pointer">
                      READ MORE
                    </a>
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[997px] max-lg:w-full max-lg:max-h-[400px] max-h-[450px] max-[1400px]:w-[80%]">
              <img src={headerImg} alt="img" className="w-full h-full" />
            </div>
          </div>

          {/* cards */}
          <div className="grid max-lg:flex overflow-x-auto grid-cols-5 relative">
            {btnsData.map((item, i) => (
              <div
                onClick={() => {
                  // const heading = item.heading as keyof typeof data;
                  // setActiveTab(heading);
                  cardClickHandler(i);
                }}
                key={i}
                style={{
                  background: activeTab === i ? "#0D71AC" : item.color,
                }}
                className={`${
                  activeTab === i ? "text-white" : "text-[#131313]"
                } max-sm:py-3 pt-3 py-4 max-sm:px-3 max-xl:px-5 max-xs:min-w-32 max-lg:min-w-60 cursor-pointer transition-all duration-200`}
              >
                <div className="max-w-60 mx-auto">
                  <span
                    className={`${styles.cardIcon} ${
                      activeTab === i ? styles.activeCardIcon : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <p className="max-xs:text-xs max-lg:text-base text-xl font-extrabold mb-2">
                    {item.heading}
                  </p>
                  <p className="max-xs:hidden text-sm max-w-[190px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
