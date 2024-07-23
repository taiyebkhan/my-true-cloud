import React from "react";
// import banking6 from "./../../../assets/img/BankingServices-img-6.png";

const BankingServicesImgCards:React.FC<{heading: string, paragraph:string, imges:string}> = ({heading, paragraph,imges})=>  {
  return (
    <div className="innerContainer py-10 flex relative top-0">
      <div className="bg-[#EDF8FF] max-w-[1200px] justify-end">
        <div className="p-14">
          <h1 className=" text-[44px] font-black text-[#000000] max-w-[800px] font_family_heading pb-4">
           {heading}
          </h1>
          <p className="text-lg leading-7 tracking-widest font_family font-normal text-[#131313]  mr-[137px]">
           {paragraph}
          </p>
        </div>
        <div className="max-w-[442px] pt-8 absolute top-[44.45px] right-[2px]">
          <img src={imges} alt="" className="max-w-[337.07px]" />
        </div>
      </div>
    </div>
  );
}

export default BankingServicesImgCards;
