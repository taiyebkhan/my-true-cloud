import React from "react";
import parse from "html-react-parser";
import img1 from "../../../../../assets/img/manufacturing-page-images/card-1.png";
import img2 from "../../../../../assets/img/manufacturing-page-images/card-2.png";
import img3 from "../../../../../assets/img/manufacturing-page-images/card-3.png";
import img4 from "../../../../../assets/img/manufacturing-page-images/card-4.png";

const cardData = [
  {
    heading: "improved <br />productivity",
    img: img1,
    imgStyle: "max-w-[230px]",
  },
  {
    heading: "increased <br />efficiencies",
    img: img2,
    imgStyle: "max-w-[157px]",
  },
  {
    heading: "decreased <br />costs",
    img: img3,
    imgStyle: "max-w-[208px]",
  },
  {
    heading: "increased regulatory <br />compliance",
    img: img4,
    imgStyle: "max-w-[214px]",
  },
];

const ManufacturingAdvantagesSection = () => {
  return (
    <section className="pt-[74px] pb-24 bgGray">
      <div className="innerContainer">
        <h2 className="text-center max-w-[867px] mx-auto mb-14">
          Advantages to implementing an ERP solution
        </h2>

        <div className="max-sm:grid-cols-1 max-lg:grid-cols-2 grid grid-cols-4 max-sm:gap-8 max-lg:gap-[40px]  gap-y-[26px]  gap-x-[26px]">
          {cardData.map((item, i) => (
            <div
              key={i}
              className="py-9 max-xs:py-4 max-xs:px-2 px-[30px] max-xs:w-[290px] max-sm:w-[400px] w-full mx-auto bg-white rounded-2xl shadow flex flex-col justify-center text-center"
            >
              <img
                src={item.img}
                alt="img"
                className={`${item.imgStyle} max-xs:w-[210px] mx-auto`}
              />
              <h5 className="max-xs:text-lg text-2xl font-extrabold mt-2.5 capitalize">
                {parse(item.heading)}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingAdvantagesSection;
