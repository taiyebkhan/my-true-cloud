import React from "react";
import banking3 from "./../../../assets/img/BankingServices-img-3.png";
function BankingServicesCard() {
  return (
    <>
      <div className="innerContainer   flex max-md:flex-col py-5 md:pt-20 max-2xl:justify-between  py-20 relative top-0">
        <p className="max-sm:text-sm max-2xl:px-5 max-md:w-full text-lg Line-height-[30px] max-lg:w-[470px] max-xl:w-[540px] Letter-spacing-[3%] font_family text-[#131313] max-w-[680px]">
          All financial services need a reliable way to share confidential
          documents such as customer personal information, customer activity
          reports and cash flow statements. Traditional methods of sharing files
          over email, FTP and USB drive are wrought with security problems, and
          often run the risk of violating SEC regulations. DMS offers companies
          a secure and compliance-focused platform to share files of any type
          and size. DMS enables users to create shared, permission-based
          folders, which serve as protected access points for collaboration. DMS
          also provides the ability to share specific files by creating links
          with the option to set file expiration dates and recipient open
          notifications; while administrators have the ability to monitor and
          wipe any outstanding file links.
        </p>

        <div className="max-w-[641px] ml-auto  md:absolute md:top-[20px]  md:right-[-95px]">
          <img
            src={banking3}
            alt=""
            className="max-md:w-[360px] ml-auto  max-lg:w-[400px] max-w-[550px]"
          />
        </div>
      </div>
    </>
  );
}

export default BankingServicesCard;
