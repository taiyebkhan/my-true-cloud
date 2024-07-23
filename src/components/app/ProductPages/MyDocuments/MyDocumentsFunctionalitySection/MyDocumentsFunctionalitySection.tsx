import React, { useEffect, useRef } from "react";
import parse from "html-react-parser";

import numberLineImg from "../../../../../assets/img/my-documents-functionality/number-line.png";
import img1 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-1.png";
import img2 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-2.png";
import img3 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-3.png";
import img4 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-4.png";
import img5 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-5.png";
import img6 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-6.png";
import img7 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-7.png";
import img8 from "../../../../../assets/img/my-documents-functionality/my-documents-functionality-img-8.png";
import ImgTextFlexComponent from "../../../../partials/ImgTextFlexComponent/ImgTextFlexComponent";

// import { gsap } from "gsap-trial";

// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

// /* The following plugins are Club GSAP perks */
// import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
// import { GSDevTools } from "gsap-trial/GSDevTools";
// import { MotionPathHelper } from "gsap-trial/MotionPathHelper";

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, GSDevTools, MotionPathHelper);

const cardData = [
  {
    heading: "Advanced Search Techniques and Tag Clouds",
    text: "Advanced Search Techniques and Tag Clouds to assign a Document ID and Meta-Tag to each document for easy access. Search based on criteria or key words. Manage saved searches and index new documents in a unique user specific Dropped Document Folder.",
    img: img1,
    imgClasses: "max-w-[362px]",
  },
  {
    heading: "Advance Forensic Monitoring",
    text: "Allows for Version Control and Transaction History at the document level that allows the document owner to audit who touched a specific document, what modifications, if any, were made and at what specific time was the document affected.",
    img: img2,
    imgClasses: "max-w-[387px]",
  },
  {
    heading: "Document and User Access Control",
    text: "Supporting copy, move, archive, delete and change ownership of documents and folders. Bulk Upload and Download features allow you to transfer and exchange large folders and files. Delegated Management and Permission rights provide access control for all users and groups.",
    img: img3,
    imgClasses: "max-w-[374px]",
  },
  {
    heading: "Folder Access and Exchange",
    text: "Allows for the viewing, uploading and downloading of documents and folders.",
    img: img4,
    imgClasses: "max-w-[362px]",
  },
  {
    heading: "Work-Flow and Collaborate",
    text: "Work-Flow and Collaborate for creating Discussions and Workflow Documents between users. Checkout the document for personal review and editing, or sequence individuals to review and edit documents.",
    img: img5,
    imgClasses: "max-w-[447px]",
  },
  {
    heading: "Synchronization",
    text: "Synchronization to establish automatic or on-demand links between your local device and remote directories (& vice versa). Also, synchronize to Google Docs and Amazon Cloudfront.",
    img: img6,
    imgClasses: "max-w-[445px]",
  },
  {
    heading: "Advance Drag and Drop",
    text: "Allows for the transferring of files between servers, your PC, Tablet or Smart Phone using easily accessible bookmarks. The owner is notified each time a document is moved into the owner’s folder via email.",
    img: img7,
    imgClasses: "max-w-[340px]",
  },
  {
    heading: "Advance Optical Character Read",
    text: "To search on hand-written notes or comments on the margins of documents.",
    img: img8,
    imgClasses: "max-w-[392px]",
  },
];

const MyDocumentsFunctionalitySection = () => {
  // useEffect(() => {
  //   const main = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: "#svg",
  //         scrub: true,
  //         start: "top center",
  //         end: "bottom center",
  //         markers: true,
  //       },
  //     })
  //     .fromTo(
  //       ".theLine",
  //       { drawSVG: "0%", duration: 10 },
  //       { drawSVG: "100%", duration: 10 }
  //     );
  // }, []);

  // const LineSvgIcon = () => {
  //   return (
  //     <svg
  //       width="264"
  //       height="3064"
  //       viewBox="0 0 264 3064"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="absolute h-full top-0 left-1/2 -translate-x-1/2"
  //       id="svg"
  //     >
  //       <path
  //         d="M148.501 2.99999L193.875 60.0635C269.548 155.232 257.228 293.037 165.874 373.273L82.5 446.5V446.5C-24.6316 533.576 -21.3181 698.175 89.2309 780.87L125.5 808L171.87 848.126C279.287 941.078 276.475 1108.56 166.001 1197.86L148.502 1212V1212C17.6108 1298.24 17.5023 1490.43 148.502 1576.5V1576.5V1576.5C268.686 1669.9 254.512 1855.68 121.55 1929.76L96 1944V1944C-1.55027 1999.84 0.611087 2141.25 99.8223 2194.08L148.502 2220L163.224 2230.37C284.507 2315.77 293.237 2492.41 180.965 2589.36L131 2632.5L112.975 2644.48C-10.0152 2726.24 -24.0139 2901.56 84.4455 3001.8L148.501 3061"
  //         stroke="black"
  //         stroke-opacity="0.38"
  //         stroke-width="7"
  //         stroke-dasharray="14 14"
  //         className="theLine"
  //       />
  //     </svg>
  //   );
  // };

  return (
    <section>
      <div className="innerContainer">
        <h2 className="text-center  max-xs:text-xl max-md:text-[30px] max-md:leading-normal text-[44px] font-black font-['Inter'] leading-[57.20px] max-sm:mb-2 mb-[22px]">
          Effortless Document Management
        </h2>

        <p className="max-xs:text-sm max-sm:text-base max-w-[1059px] mx-auto text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide mb-16">
          Seamlessly upload, organize, and access documents from anywhere with
          our intuitive cloud-based document management system.
        </p>

        <div
          id="myDocumentsFunctionalityCardContainer"
          className="max-w-screen-xl mx-auto flex flex-col gap-y-10 relative pb-28 mb-4"
        >
          <img
            src={numberLineImg}
            alt="img"
            className="absolute h-full top-0 left-1/2 -translate-x-1/2"
          />

          {/* <LineSvgIcon /> */}

          {cardData.map((item, i) => (
            <ImgTextFlexComponent
              key={i}
              {...item}
              textContainerWidthClass="max-[1200px]:max-w-[500px]"
              cardClasses={i % 2 ? "flex-row-reverse" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyDocumentsFunctionalitySection;
