import React from "react";
import SecurityEndHeading from "../SecurityPage/SecurityEndHeading";
import banking2 from "./../../../assets/img/BankingServices-img-2.png";
import banking10 from "./../../../assets/img/BankingServices-img-10.png";

function BankingServicesHelp() {
  return (
    <>
      <div className="innerContainer">
        <SecurityEndHeading
          heading="How can we help ?"
          paragraph="Banking & Financial Services require integrated electronic document management solutions that enable enterprise-wide access to and management of business critical data. Intelligent document search and retrieval tools ensure rapid customer response time and informed document delivery. With a single click, you’ll work quicker, smarter and more collaboratively all in a Secured Domain."
        />
        <div className="max-sm:hidden  md:block max-xl:px-5 max-lg:w-[700px]  max-w-[1208px] m-auto">
          <img src={banking2} alt="" className=" w-full" />
        </div>
        <div className="max-sm:block sm:hidden  max-lg:p-5">
          <img
            src={banking10}
            alt=""
            className=" max-sm:w-[255px] max-sm:m-auto w-full"
          />
        </div>
      </div>
    </>
  );
}

export default BankingServicesHelp;
