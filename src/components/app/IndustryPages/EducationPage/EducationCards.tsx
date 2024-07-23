import React from "react";
import ImgTextFlexComponent from "../../../partials/ImgTextFlexComponent/ImgTextFlexComponent";
import SecurityEndHeading from "../../SecurityPage/SecurityEndHeading";
import Card1 from "./../../../../assets/img/eductaion/EducationCard-1.png";
import Card2 from "./../../../../assets/img/eductaion/EducationCard-2.png";
import Card3 from "./../../../../assets/img/eductaion/EducationCard-3.png";
import Card4 from "./../../../../assets/img/eductaion/EducationCard-4.png";

const cardData = [
  {
    heading: "Connect and collaborate in one unified platform",
    text: "Quick, efficient, and engaging collaboration is made easier by MYTRUECLOUD with features including instant messaging, online presence, file sharing and annotations as well as audio calls and video conference calling functionality.",
    img: Card1,
    imgClasses: "max-xs:w-[250px] max-lg:w-[335px] max-w-[473px]",
  },
  {
    heading: "Increase Productivity",
    text: "Migrating to a cloud education solution means the daily resources you and your students need are at your fingertips. Whether you’re in the classroom, at home, in the office, in meetings or on the move, your critical resources can be stored and shared at the click of a button, all within your dedicated cloud platform. Choosing the right cloud-based application for your education centre means you and your teams can streamline processes, save time and improve productivity among staff and students.",
    img: Card2,
    imgClasses: "max-xs:w-[218px] max-w-[347px]",
  },
  {
    heading: "Minimizing IT costs",
    text: "With MTC, the costs of developing and maintaining a school network are significantly reduced. Since the network infrastructure is cloud-based, there are no developmental or maintenance costs as these are assumed by the cloud service provider.",
    img: Card3,
    imgClasses: "max-xs:w-[218px] max-w-[347px]",
  },
  {
    heading: "World-class technical support",
    text: "Not only does MYTRUECLOUD give you the confidence in using a resilient, reliable unified communications solution that’s been commended by industry analysts, it also allows your teams to benefit from MYTRUECLOUD’s world-class support services, on hand to help iron out any teething problems quickly and easily.",
    img: Card4,
    imgClasses: "max-xs:w-[218px] max-w-[347px]",
  },
];
function EducationCards() {
  return (
    <section>
      <SecurityEndHeading
        heading="Keep up with the demand of online learning"
        paragraph="Investing in one single multi-cloud solution not only helps you to reduce costs. Finding the right cloud solution can truly improve the efficiency of your organisation’s communications with parents, students and internally with a more friction-free user experience."
      />
      <div className="innerContainer max-md:my-10 my-20">
        {cardData.map((item, i) => (
          <ImgTextFlexComponent
            key={i}
            {...item}
            textContainerWidthClass="max-w-[692px]"
            cardClasses={`${i > 1 ? "m" : ""} ${
              i % 2 ? "flex-row-reverse" : "my-10"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default EducationCards;
