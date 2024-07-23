import React from "react";

export default function PartnerBecomeToday() {
  return (
    <section className="bg-[#131313]">
      <div className="innerContainer">
        <div className="max-w-[1090px] m-auto py-16">
          <h1 className="text-center max-sm:text-lg max-lg:text-[40px] text-[44px] leading-tight font-extrabold text-[#FFFFFF] font_family_heading">
            Become a <span className="text-[#199DEB]">Partner</span> Today!
          </h1>
          <p className="text-center max-sm:text-sm max-md:text-[14px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#FFFFFF] pt-5 px-10">
            MTC’s Partners provide the needed consulting capabilities, vertical
            solutions and industry expertise for our mutual customers to be more
            agile, productive and competitive. MTC provides expertise, training,
            product support and resources to ensure your success. Click the link
            below to fill out and submit your application form to begin the
            process of becoming part of our Partner ecosystem and start building
            recurring revenue in the cloud today.
          </p>

          <div className="text-center text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#199DEB] pt-5">
            <a href="https://mytruecloud.com/partner-application-form">
              Click Here for Partner Application Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
