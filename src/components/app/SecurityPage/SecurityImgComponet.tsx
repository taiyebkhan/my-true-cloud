import React from "react";
import img1 from "./../../../assets/img/Security-img-3.png";
import img2 from "./../../../assets/img/Security-img-5.png";
import img5 from "./../../../assets/img/Security-img-4.png";
import img6 from "./../../../assets/img/Security-img-6.png";
import img3 from "./../../../assets/img/Security-img-7.png";
import img8 from "./../../../assets/img/Security-img-8.png";
import img4 from "./../../../assets/img/Security-img-9.png";
import img11 from "./../../../assets/img/Security-img-11.png";

const Data = [
  {
    img: img1,
    heading: "2-Factor Authentication",
    text: "2-Factor Authentication utilizes 2 forms of unique identification (an Individuals password and a unique One-Time Password) during the sign-in process to insure users are who they claim to be.",
    imgwidth: "max-w-[331px]",
    smImgWidth: "max-sm:w-[241px]",
  },
  {
    img: img5,
    heading: "One-Time Passwords",
    text: "One-Time Passwords can be sent via Mobile Text, email Notification and e-Token apps for all SmartPhones and Tablets.",
    imgwidth: "max-w-[272px]",
    smImgWidth: "max-sm:w-[213px]",
  },
  {
    img: img2,
    heading: "SSL VPN Tunneling",
    text: "SSL VPN Tunneling utilizes proprietary algorithms to establish an AES encrypted network link providing true entry-to-exit security.",
    imgwidth: "max-w-[367px]",
    smImgWidth: "max-sm:w-[254px]",
  },
  {
    img: img6,
    heading: "Minimizes rogue employee mal-use",
    text: "Access Rules by individual users to minimizes rogue employee mal-use.",
    imgwidth: "max-w-[369px]",
    smImgWidth: "max-sm:w-[269px]",
  },
  {
    img: img3,
    heading: "System Diagnostics",
    text: "System Diagnostics to monitor what applications and release levels are on each device to ensure compliance each time a transmission is established.",
    imgwidth: "max-w-[341px]",
    smImgWidth: "max-sm:w-[281px]",
  },
  {
    img: img8,
    heading: "Digital Certificate",
    text: "Unique Digital Certificate is assigned to each company account.",
    imgwidth: "max-w-[386px]",
    smImgWidth: "max-sm:w-[286px]",
  },
  {
    img: img4,
    heading: "Automatic bulk registration",
    text: "Active Directory or LDAP Link that allows for automatic bulk registration.",
    imgwidth: "max-w-[377px]",
    smImgWidth: "max-sm:w-[261px]",
  },
  {
    img: img11,
    heading: "Forensic Monitoring",
    text: "Forensic Monitoring to capture real-time transmission data (who, what and when) and provides security audits and logs.",
    imgwidth: "max-w-[310px]",
    smImgWidth: "max-sm:w-[255px]",
  },
];

function SecurityImgComponent() {
  return (
    <>
      {Data.map((item, i) => (
        <section className={` ${i % 2 === 0 ? "" : " bg-[#F1F1F1]"}`}>
          <div className="innerContainer max-xl:px-5 my-10">
            <div
              className={`flex lg:gap-[50px] ${
                i % 2 === 0
                  ? "max-md:flex-col flex-row-reverse "
                  : "max-md:flex-col bg-[#F1F1F1]"
              }`}
            >
              <div className="flex-1">
                <h1 className="md:hidden max-sm:text-xl max-md:pt-7 max-lg:text-[30px] text-[44px] right-auto leading-tight font-black text-[#131313] font_family_heading pb-2">
                  {item.heading}
                </h1>
                <img
                  src={item.img}
                  alt=""
                  className={`${item.imgwidth} ${item.smImgWidth} m-auto `}
                />
              </div>
              <div className={`py-10 max-md:pt-0 flex-1`}>
                <div className="max-w-[625px] lg:mt-8">
                  <h1 className="max-md:hidden max-lg:text-[30px] text-[44px] right-auto leading-tight font-black text-[#131313] font_family_heading pb-2">
                    {item.heading}
                  </h1>
                  <p className="max-md:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] m-auto">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default SecurityImgComponent;
