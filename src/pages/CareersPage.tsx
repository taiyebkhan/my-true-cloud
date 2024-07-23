import React from "react";
import CareerPageHeader from "../components/app/CompanyPages/CareerPageComponents/CareerPageHeader/CareerPageHeader";
import CareerOpportunitiesSection from "../components/app/CompanyPages/CareerPageComponents/CareerOpportunitiesSection/CareerOpportunitiesSection";
import img from "../assets/img/career-page-images/contact-img.png";

const CareersPage = () => {
  return (
    <>
      <CareerPageHeader />
      <div className="innerContainer rounded-2xl bg-black max-sm:py-10 py-20 max-md:mb-12 mb-28">
        <div className="max-w-[900px] mx-auto text-center leading-8">
          <p className="text-white">
            You will have the opportunity to allow your passion and creativity
            to flourish in MTC’s collaborative, entrepreneurial culture. As with
            any freedom, we will ask each team member to be accountable for
            their responsibilities by being true to your goals and objectives.
            We always seek the success of the individual, MTC and our customers.
            The success of our customers will always be our #1 priority.
          </p>
          <p className="text-[#2D9BE0] font-semibold mt-1">
            We all work hard and we are committed to having fun and getting to
            know one another to build a cohesive Team. 
          </p>
        </div>
      </div>
      <CareerOpportunitiesSection />

      <section className="relative overflow-hidden">
        <div className="bgGray absolute max-[670px]:top-[20px] top-12 w-full h-full -z-10" />
        <div className="max-w-[1170px] max-[670px]:pt-[50px] max-[670px]:flex-col max-xl:px-5  mx-auto flex items-center justify-between">
          <p className="max-w-[530px] max-xs:text-base max-sm:text-lg max-lg:text-xl max-[670px]:pb-5  text-2xl">
            If this sounds like a Team you would like to be a part of, please
            review the open job postings and send us your resume to{" "}
            <a
              className="text-[#2D9BE0] font-bold hover:underline"
              href="mailto:hrcareers@mytruecloud.com"
              rel="noreferrer"
              target="_blank"
            >
              hrcareers@mytruecloud.com.
            </a>
            We look forward to hearing from you!
          </p>

          <img
            src={img}
            alt="img"
            className="max-xs:w-[250px] max-lg:w-[300px] max-w-[485px]"
          />
        </div>
      </section>
    </>
  );
};

export default CareersPage;
