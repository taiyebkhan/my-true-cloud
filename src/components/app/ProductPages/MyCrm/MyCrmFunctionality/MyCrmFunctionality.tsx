import React from "react";
import MyCrmImageTextCard from "../MyCrmImageTextCard/MyCrmImageTextCard";
import saleImg from "../../../../../assets/img/crm-functionality-img.png";
import img2 from "../../../../../assets/img/crm-functionality-img-2.png";
import img3 from "../../../../../assets/img/crm-functionality-img-3.png";
import img4 from "../../../../../assets/img/crm-functionality-img-4.png";
import img5 from "../../../../../assets/img/crm-functionality-img-5.png";

const cardData = [
  {
    heading: "Sales Team <br />Automation",
    points: [
      "Lead, Contact, and Opportunity Management to pursue new business, share sales information, track deal progress, and record deal-related interactions.",
    ],
    img: saleImg,
    imgStyles: "max-w-[460px]",
  },
  {
    heading: "Marketing <br />Automation",
    points: ["Lead Management", "Email Marketing", "Campaign Management"],
    img: img2,
    imgStyles: "max-w-[738px] max-h-[432px]",
  },
  {
    heading: "Web-Conferencing <br />/Video",
    points: [
      "Meetings and Webinars with up to 1000 Participants",
      "Meeting Privacy",
      "Audio Broadcasting",
    ],
    img: img3,
    imgStyles: "max-w-[590px]",
  },
  {
    heading: "Social Business",
    points: [
      "Instant Messaging",
      "Content Syndication",
      "Private Wikis",
      "Integrated Social Media",
      "Link and Sync with your email, Google & Outlook calendars",
    ],
    img: img4,
    imgStyles: "max-w-[484px]",
  },
  {
    heading: "Administration",
    points: [
      "Authorization Setting",
      "Edit user settings, views, and layouts quickly",
      "Studio capabilities to customize the application",
      "Module Builder to create custom modules",
      "Conversion Toolkit to move data from Salesforce.com, ACT! and Goldmine",
    ],
    img: img5,
    imgStyles: "max-w-[565px]",
  },
];

const MyCrmFunctionality = () => {
  return (
    <section className="mb-20">
      <div className="innerContainer">
        <h2 className="max-w-3xl mx-auto text-center mb-5 font-black font-['Inter']">
          Powerful Features to Streamline Your Workflow
        </h2>
        <p className="max-w-[1059px] mx-auto text-center max-md:mb-9 mb-12 font-normal font-['Montserrat']">
          Lorem ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus
          justo egestas. Massa a pulvinar felis mattis leo in semper in. Lorem
          ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus justo
          egestas. Massa a pulvinar felis mattis leo in semper in.
        </p>

        <div className="flex flex-col max-sm:gap-y-7 max-md:gap-y-8 max-lg:gap-y-10 gap-y-20">
          {cardData.map((item, i) => (
            <MyCrmImageTextCard
              cardClasses={i % 2 ? "lightBackground flex-row-reverse" : ""}
              key={i}
              heading={item.heading}
              img={item.img}
              imgClasses={item.imgStyles}
              points={item.points}
              effectClasses={`max-lg:h-[130vh] ${
                i % 2 ? "-translate-x-[20%]" : "translate-x-[10%]"
              }`}
            />
          ))}
        </div>

        {/* <div className="bg-white rounded-3xl py-20 px-[70px] flex justify-between items-center gap-x-20 relative">
          <img src={img} alt="img" className="max-w-[460px]" />
          <div className="">
            <h2 className="text-[65px] font-extrabold font-['Inter'] leading-[73px] mb-5">
              Sales Team <br />
              Automation
            </h2>
            <ul className="pl-5">
              <li className="list-disc text-xl font-normal font-['Inter'] leading-[37.60px] tracking-wide mb-8">
                Lead, Contact, and Opportunity Management to pursue new
                business, share sales information, track deal progress, and
                record deal-related interactions.
              </li>
            </ul>
            <div className="max-w-40">
              <ButtonPrimary>Read More</ButtonPrimary>
            </div>
          </div>

          <img src={effect} alt="effect" className="absolute -z-10" />
        </div> */}
      </div>
    </section>
  );
};

export default MyCrmFunctionality;
