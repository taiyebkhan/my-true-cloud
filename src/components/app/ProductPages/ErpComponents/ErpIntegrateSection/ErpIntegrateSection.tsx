import React from "react";
import logo1 from "../../../../../assets/img/erp-images/google.png";
import logo2 from "../../../../../assets/img/erp-images/shopify.png";
import logo3 from "../../../../../assets/img/erp-images/dropbox.png";
import logo4 from "../../../../../assets/img/erp-images/stripe.png";
import logo5 from "../../../../../assets/img/erp-images/slack.png";
import logo6 from "../../../../../assets/img/erp-images/aws.png";
import logo7 from "../../../../../assets/img/erp-images/razorpay.png";

const imgData = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ErpIntegrateSection = () => {
  return (
    <div className="innerContainer w-full -translate-y-9 pt-[60px] pb-[76px] px-28 bg-white rounded-[19px] shadow-lg mx-auto mb-28">
      <h2 className="text-center text-[44px] font-black font-['Inter'] mb-16">
        Integrate with your favorite apps
      </h2>

      <div className="flex items-end justify-between gap-y-14">
        {imgData.map((item) => (
          <img src={item} alt="img" className="max-h-[60px] " />
        ))}
      </div>
    </div>
  );
};

export default ErpIntegrateSection;
