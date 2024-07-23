import React from "react";
import parse from "html-react-parser";
import SecurityEndHeading from "../SecurityPage/SecurityEndHeading";

const data = [
  {
    heading: "Do you need more power and more functionality to help you grow",
  },
  {
    heading: "Do you need help to meet federal privacy compliance regulations",
  },
  {
    heading: "Do you have an increasing number of remote and mobile workers",
  },
  {
    heading:
      "Are you worried about the security of your data as more workers access it remotely",
  },
  {
    heading:
      "Is your technology infrastructure not up to the task of running today’s applications? Are you unable to make new capital investments in updated equipment",
  },
  {
    heading:
      "Is your IT staff overwhelmed with user support issues and other system administration tasks.  Or, do you not have a dedicated IT resource and have to outsource this work",
  },
];

function BenefitsTransition() {
  return (
    <section className="bg-[#EDF8FF]">
      <div className="innerContainer max-sm:pt-2 pt-10 pb-20">
        <SecurityEndHeading
          heading="Are you ready to make the <br/> transition to SaaS?"
          paragraph="Here are some key questions that might help you decide"
        />

        <div className="flex flex-col  max-sm:gap-[10px] gap-[30px] max-sm:py-5 py-10">
          {data.map((item, i) => (
            <div className=" w-full max-w-[1166px]  m-auto">
              <div
                className="p-5 bg-[#FFFFFF] border border-[#D3D3D3] rounded-lg"
                style={{ boxShadow: "0px 20px 50px 0px #0000001F" }}
              >
                <h1 className="max-sm:text-sm max-lg:text-[15px] text-xl leading-6 font-medium text-[#000000] font_family_heading">
                  {item.heading}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsTransition;
