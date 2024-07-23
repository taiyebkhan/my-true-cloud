import React from "react";
import img1 from "../../../../../assets/img/industry-legal-page-images/card-1.png";
import img2 from "../../../../../assets/img/industry-legal-page-images/card-2.png";
import img3 from "../../../../../assets/img/industry-legal-page-images/card-3.png";
import img4 from "../../../../../assets/img/industry-legal-page-images/card-4.png";
import lineImg from "../../../../../assets/img/industry-legal-page-images/line-img.png";

const cardData = [
  { title: "Security", img: img4, top: 412 },
  { title: "Collaboration", img: img3, top: 332 },
  { title: "Speed", img: img2, top: 198 },
  { title: "Ease of use", img: img1, top: 0 },
];

const IndustryLegalPageEssentialTenantsSection = () => {
  return (
    <section className="max-sm:pb-[60px]  max-lg:pb-[100px] pb-[154px] relative">
      <div className="innerContainer">
        <p className="max-w-[1092px] mb-12">
          The essential tenants of our hosting service focus on core values of
          security, collaboration, speed, and ease-of-use. The SQL-based
          infrastructure is robust and reliable. The interface is clean and
          uncomplicated so you can focus on the review itself.
        </p>

        <div className="max-sm:grid-cols-1 max-lg:grid-cols-2 grid grid-cols-4 max-sm:gap-8 gap-14  ">
          {cardData.map((item, i) => {
            return (
              <div
                key={i}
                className={`py-7 pt-5 w-full max-xs:w-[240px] max-sm:w-[350px] mx-auto  min-h-[270px] bgGray rounded-2xl shadow-md flex justify-between flex-col items-center`}
              >
                <img
                  src={item.img}
                  alt="img"
                  className="mb-5 max-h-52 mt-auto"
                />
                <h6 className="text-2xl font-extrabold fontInter text-center">
                  {item.title}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryLegalPageEssentialTenantsSection;
