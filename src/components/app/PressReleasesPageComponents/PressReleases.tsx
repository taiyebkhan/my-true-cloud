import React from "react";
import PressReleasesimg from "./../../../assets/img/PressReleases-img.png";

const cardData = [
  {
    date: "Feb 04, 2013",
    heading:
      "New Accountants Solution Significantly Improves Client Collaboration and Compliance",
    link_url:
      "https://mytruecloud.com/my-truecloud-gaining-strong-traction-with-accounting-firms/",
    url_test: "MY TrueCloud Gaining Strong Traction With Accounting Firms",
  },
  {
    date: "Dec 02, 2013",
    heading:
      "2-Factor Secure File Sharing Service to Safeguard Confidential Files and Data",
    link_url:
      "https://mytruecloud.com/my-truecloud-announces-skype-integration-to-my-web-conferences/",
    url_test:
      "01/15/13 MY TRUECLOUD ANNOUNCES SKYPE INTEGRATION TO MY WEB CONFERENCES",
  },
  {
    date: "Jan 15, 2013",
    heading:
      "Skype’s Public Availability Within a Secure and Cost-Free Web-Conferencing Solution",
    link_url:
      "https://mytruecloud.com/my-truecloud-announces-skype-integration-to-my-web-conferences/",
    url_test:
      "01/15/13 MY TRUECLOUD ANNOUNCES SKYPE INTEGRATION TO MY WEB CONFERENCES TrueCloud Gaining Strong Traction With Accounting Firms",
  },
  {
    date: "Dec 11, 2012",
    heading:
      "Only Token-less 2 Factor Authentication Solution That Turns your Browser into a Virtual Token",
    link_url: "https://mytruecloud.com/mtc-invisible-cloud-token-pr/",
    url_test:
      "12/11/12    MY TRUECLOUD ANNOUNCES THE RELEASE OF INVISIBLE CLOUD-TOKEN",
  },
  {
    date: "Nov 28, 2013",
    heading:
      "First Truly Secured Collaboration Solutions to Deliver a Cloud-Based Mobile Office",
    link_url:
      "https://mytruecloud.com/my-truecloud-announces-release-of-nex-gen-collaboration-suite/",
    url_test:
      "11/28/12 MY TRUECLOUD ANNOUNCES RELEASE OF NEX-GEN COLLABORATION SUITE",
  },
];

function PressReleases() {
  return (
    <section>
      <div className="innerContainer max-2xl:px-5">
        <div className="flex max-lg:gap-[20px] gap-[60px] max-md:flex-col">
          <img
            src={PressReleasesimg}
            alt=""
            className="max-lg:w-[350px] max-md:m-auto max-w-[510px]"
          />
          <div className="flex  flex-col justify-center max-lg:gap-[5px] gap-[20px] mb-40">
            <h1 className="max-sm:text-xl max-lg:text-[35px] max-lg:whitespace-nowrap text-[56px] font-black text-[#131313] font_family_heading">
              PRESS <br className="max-sm:block max-lg:hidden " /> RELEASES
            </h1>
            <p className="max-sm:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] lg:pr-10">
              MYTrueCloud is striving to be different from the typical corporate
              entity. There are no politics here, our main focus is on our
              customers and how our solutions solve their problems. We are
              looking for team members that want the challenge of working with
              cutting-edge technology and helping our customer get the most from
              MTC’s solutions
            </p>
          </div>
        </div>

        <div className=" bg-[#F1F1F1] max-xs:w-[333px] max-sm:w-[445px] max-md:w-[620px] max-lg:w-[750px] max-xl:w-[1000px] max-w-[1252px] m-auto max-lg:translate-y-[-123px] translate-y-[-173px]">
          {cardData.map((item, i) => (
            <div className="flex  max-md:flex-col max-md:gap-[10px] max-lg:gap-[40px]  max-xl:gap-[80px] gap-[150px] max-w-[1143px] max-md:p-5  py-14 px-10 m-auto  border-b-2">
              <h2 className="max-sm:text-[10px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313]">
                {item.date}
              </h2>
              <div className="max-w-[789px]">
                <h1 className=" max-sm:text-sm max-md:text-[15px] max-lg:text-lg text-xl Line-height-[33px] Letter-spacing-[3%] font_family font-semibold text-[#131313] max-w-[787px]">
                  {item.heading}
                </h1>
                <a
                  href={item.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D71AC] Line-height-[30px] font_family font-bold max-sm:text-sm max-md:text-[15px] text-lg"
                >
                  {item.url_test}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressReleases;
