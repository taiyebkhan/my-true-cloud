import React from "react";
import Partner2 from "./../../../assets/img/Partner-img-2.png";
import Partner3 from "./../../../assets/img/Partner-img-3.png";

export default function PartnerImgPage() {
  return (
    <>
      <div className="bg-[#EDF8FF]">
        <div className="innerContainer max-xl:gap-[20px] max-xl:justify-between max-md:flex-col-reverse flex gap-[80px] max-lg:py-5 py-10">
          <div className="max-md:w-full max-lg:w-[550px] max-w-[700px] max-md:pt-0 pt-[70px]">
            <p className="max-sm:text-sm max-lg:text-[14px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313]">
              The world of  Alliance Partners is gradually transitioning from
              traditional licensing to SaaS and there is a tremendous
              opportunity to build a thriving business for the Alliance Partner.
              SaaS Cloud Computing is the hottest trend in the SMB due to fast
              ROI, ease of implementation and high user adoption rate.  The MTC
              Partner program offers you a wealth of opportunities to grow your
              business as your customers look to cloud computing and MTC’s
              integrated Collaboration suite to power their business demands in
              a mobile world. The breath of MTC’s Collaboration Suite provides
              for a greater range of solutions than just the typical stand-alone
              offering such as CRM, social business or Document Management,
              which in turn, provides for greater opportunities.
            </p>
          </div>
          <img
            src={Partner2}
            alt=""
            className="max-sm:w-[320px] max-sm:h-[320px] max-lg:w-[400px] max-xl:h-[400px] max-md:m-auto max-w-[480px]"
          />
        </div>
      </div>

      <div className="innerContainer max-xl:px-5  max-xl:gap-[20px] max-xl:justify-between max-md:flex-col flex gap-[80px] pb-10">
        <img
          src={Partner3}
          alt=""
          className="max-sm:w-[320px] max-sm:h-[320px] max-lg:w-[400px] max-xl:h-[400px] max-md:m-auto max-w-[480px] max-md:pt-10 pt-20"
        />
        <div className="max-md:w-full max-lg:w-[550px] max-w-[700px] max-md:pt-1  pt-[70px]">
          <p className="max-sm:text-sm max-lg:text-[14px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313]">
            The world of  Alliance Partners is gradually transitioning from
            traditional licensing to SaaS and there is a tremendous opportunity
            to build a thriving business for the Alliance Partner. SaaS Cloud
            Computing is the hottest trend in the SMB due to fast ROI, ease of
            implementation and high user adoption rate.  The MTC Partner program
            offers you a wealth of opportunities to grow your business as your
            customers look to cloud computing and MTC’s integrated Collaboration
            suite to power their business demands in a mobile world. The breath
            of MTC’s Collaboration Suite provides for a greater range of
            solutions than just the typical stand-alone offering such as CRM,
            social business or Document Management, which in turn, provides for
            greater opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
