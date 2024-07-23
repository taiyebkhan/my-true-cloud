import React from "react";
import parse from "html-react-parser";

import Eventsbg1 from "./../../../assets/img/EventsBg-img-1.png";
import Events2 from "./../../../assets/img/Events-img-2.png";
import Events3 from "./../../../assets/img/Events-img-3.png";
import Events4 from "./../../../assets/img/Events-img-4.png";
import Events5 from "./../../../assets/img/Events-img-5.png";
import Events6 from "./../../../assets/img/Events-img-6.png";
import Events7 from "./../../../assets/img/Events-img-7.png";
import { Hidden } from "@mui/material";

const cardData = [
  {
    date: "Aug 20 – 23, 2012",
    place: "San Diego, CA",
    img_url: Events2,
    heading: "Gartner Catalyst <br className='max-md:hidden'/> Conference",
    text: "A powerful intersection of mobility, cloud and information technologies is making significant promises to end users and now IT organizations must deliver on them. The concept of “any device, any service, any source” is the new business reality.",
    linkUrl: "https://www.gartner.com/en/conferences/calendar",
    url: "http://www.gartner.com/technology/summits/na/catalyst/",
  },
  {
    date: "Oct 21 – 25, 2012",
    place: "Orlando, FL",
    img_url: Events3,
    heading: "Gartner Symposium IT <br/> expo 2012",
    text: "Disruptive technologies like cloud, social, mobile and information are revolutionizing business. The opportunity to leverage information innovation is right before us. The most successful CIOs and senior IT leaders will ...",
    linkUrl:
      "https://www.gartner.com/en/conferences/na/symposium-us?utm_medium=assets&utm_source=vanity&utm_campaign=evt_us_yoy_sym%3f",
    url: "http://www.gartner.com/technology/symposium/orlando/",
  },
  {
    date: "Dec 3 – 5, 2012",
    place: "Las Vegas, NV",
    img_url: Events4,
    heading: "Gartner Application <br/> Architecture",
    text: "This Summit delivers on today’s key applications issues- from understanding the real business value of cloud computing, and to making your SOA application development more productive, dynamic and simple.",
    linkUrl: "https://www.gartner.com/en/conferences/na/applications-us",
    url: "http://www.gartner.com/technology/summits/na/applications/",
  },
  {
    date: "Dec 3 – 5, 2012",
    place: "Las Vegas, NV",
    img_url: Events5,
    heading: "Gartner Identify and Access Management Summit",
    text: "Cloud Security, IAM Program Management, Identity and Access Management, Identity Authentication, Password Management, User Provisioning, Web Access Management.",
    linkUrl:
      "https://www.gartner.com/en/conferences/na/identity-access-management-us",
    url: "http://www.gartner.com/technology/summits/na/identity-access/",
  },
  {
    date: "Apr 29 – May 1, 2013",
    place: "San Diego, CA",
    img_url: Events6,
    heading: "Gartner Portals Content and Collaboration Summit",
    text: "Accelerating Innovation, Analytics, Business Value of IT, Cloud Computing, Collaboration, Content Management, Context-Aware Computing, Enterprise Content Management, Enterprise Mobility, Mobile Security.",
    linkUrl: "https://www.gartner.com/en/conferences/na/applications-us",
    url: "http://www.gartner.com/technology/summits/na/portals/",
  },
  {
    date: "Jun 10 – 13, 2013",
    place: "National Harbor, MD",
    img_url: Events7,
    heading: "Gartner Security and Risk Management Summit",
    text: "Business and IT Continuity Services, Business Continuity Management, Cloud Security, Data Security, Disaster Recovery, Enterprise Network Security Equipment, Enterprise Risk Management, Governance, Risk and ..",
    linkUrl: "https://www.gartner.com/en/conferences/calendar",
    url: "http://www.gartner.com/technology/summits/na/security/",
  },
];

function EventsSubCards() {
  return (
    <section>
      <div className="innerContainer">
        {cardData.map((item, i) => (
          <>
            <div className="flex max-md:flex-col gap-[50px] max-xl:gap-[15px] py-5">
              <div className="flex  max-sm:gap-[20px] max-md:gap-[40px]  max-xl:gap-[15px] gap-[50px]">
                <div className="relative top-0 left-0 max-xs:w-[123px] max-md:w-[200px]  max-w-[265px] pt-3">
                  <img src={Eventsbg1} alt="" />
                  <h1 className="max-sm:text-[15px] max-xs:text-[10px] max-sm:left-[12px] max-xl:text-[16px]   max-md:top-[30px] max-md:left-[20px] max-lg:top-[14px] max-lg:left-[6px]  absolute top-[30px] left-[20px] text-xl max-xl:leading-normal Line-height-[33px] Letter-spacing-[3%] font_family font-semibold text-[#131313]">
                    {item.date} <br />
                    <span className="max-sm:text-[15px] max-xs:text-[10px] max-xl:text-[16px]  text-[#0D71AC] text-xl Line-height-[33px] Letter-spacing-[3%] font_family font-semibold ">
                      {item.place}
                    </span>
                  </h1>
                </div>

                <div className="  max-md:w-[200px] max-w-[300px]">
                  <img src={item.img_url} alt="" />
                </div>
              </div>
              <div className="max-md:w-full max-lg:w-[400px] max-w-[620px] max-lg:pt-1 max-xl:pt-5 pt-8">
                <div className="w-full">
                  <h1 className="max-sm:text-xl max-lg:text-[25px] max-xl:text-[30px] text-[40px]  leading-tight font-bold text-[#000000] font_family_heading">
                    {parse(item.heading)}
                  </h1>
                  {/* <p>{item.pay}</p> */}
                  <p className="max-sm:text-sm max-lg:text-[14px] max-lg:leading-normal max-xl:text-[16px] max-xl:py-1 text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] py-5">
                    {item.text}
                  </p>

                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-sm:text-sm  text-[#0D71AC] font-semibold"
                  >
                    {item.url}
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default EventsSubCards;
