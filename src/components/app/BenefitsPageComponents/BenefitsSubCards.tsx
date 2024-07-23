import React from "react";
import Benefits1 from "./../../../assets/img/Benefits-img-1.png";
import Benefits2 from "./../../../assets/img/Benefits-img-2.png";
import Benefits3 from "./../../../assets/img/Benefits-img-3.png";
import Benefits4 from "./../../../assets/img/Benefits-img-4.png";
import Benefits5 from "./../../../assets/img/Benefits-img-5.png";
import Benefits6 from "./../../../assets/img/Benefits-img-6.png";
import Benefits7 from "./../../../assets/img/Benefits-img-7.png";
import Benefits8 from "./../../../assets/img/Benefits-img-8.png";
import Benefits9 from "./../../../assets/img/Benefits-img-9.png";
import Benefits10 from "./../../../assets/img/Benefits-img-10.png";
import Benefits11 from "./../../../assets/img/Benefits-img-11.png";

const Data = [
  {
    img: Benefits1,
    heading: "High Adoption",
    text: "Because most people are familiar with using the Internet to find what they need, SaaS apps tend to have high adoption rates, with a lower learning curve.",
    width: "max-w-[538px]",
  },
  {
    img: Benefits2,
    heading: "True Mobile Collaboration",
    text: "A SaaS application makes it possible to gain access to customer data and documents from anywhere that has an Internet connection.  Remote and mobile workers can collaborate effectively with colleagues and share information using any mobile device.  SaaS applications are available from any computer or any device, anytime and anywhere.",
    width: "max-w-[724px]",
  },
  {
    img: Benefits3,
    heading: "Lower Initial Costs",
    text: "SaaS applications are subscription based. No license fees mean lower initial costs. Having the SaaS provider manage the IT infrastructure means lower IT costs for hardware, software, and the people needed to manage it all.   SaaS allows you to gain access to the functionality that had previously been available only to larger enterprises with deep pockets. With the need for capital outlay and upfront costs eliminated, any organization can pay...",
    width: "max-w-[843px]",
  },
  {
    img: Benefits4,
    heading: "High Security",
    text: "When you move important data offsite to a service provider, you need assurance that the system is secure.  MTC houses our applications in world-class SAS 70 Type III compliant data centers, with state-of-the-art power, ventilation and security features. We also employ ...",
    width: "max-w-[725px]",
  },
  {
    img: Benefits5,
    heading: "Reliability, Redundancy and Recovery",
    text: "Automatic failover between hardware platforms and disaster recovery services to bring your server up in a separate data center should your primary data center experience an outage.  With your company’s data safely stored and backed up on secure data centers instead of your server room, you are back at work as long as you have an internet connection.",
    width: "max-w-[842px]",
  },
  {
    img: Benefits6,
    heading: "Painless Upgrades",
    text: "MTC manages all updates and upgrades. We also manage resource availability, there’s no need for customers to add hardware, software, or bandwidth as the user base grows.   If your demands grow, you can add and pay for only what your needs require.",
    width: "max-w-[724px]",
  },
  {
    img: Benefits7,
    heading: "Comprehensive Support",
    text: "Unlike a traditional software license, the SaaS model includes comprehensive support in the subscription fee. This also includes product maintenance and upgrades, so there are no hidden costs or additional fees, nor do you have to worry about hardware maintenance or failures.",
    width: "max-w-[776px]",
  },
  {
    img: Benefits8,
    heading: "Easy Deployment",
    text: "An on-premise implementation can be a costly and time-consuming proposition.   In addition to the investment in technology infrastructure to run the application, you must devote resources to installing and customizing the application.",
    width: "max-w-[724px]",
  },
  {
    img: Benefits9,
    heading: "Lower Energy and Maintenance Costs",
    text: "Less physical resources and less hardware to power and maintain is why Cloud Computing is a Green Technology. .",
    width: "max-w-[724px]",
  },
  {
    img: Benefits10,
    heading: "Value Based Pricing",
    text: "Select what your company needs, when you need it and use it how you want to… you only use and pay for applications and functionality that you need.",
    width: "max-w-[724px]",
  },
  {
    img: Benefits11,
    heading: "Even the Playing Field",
    text: "Compete more effectively with larger businesses, balancing the playing field.  Your business can utilize the same tools that Fortune 100 companies use and can do this because with cloud computing, your business will only pay for the infrastructure and resources you need.",
    width: "max-w-[842px]",
  },
];

function BenefitsSubCards() {
  return (
    <section>
      <div className="innerContainer max-md:my-0 my-10">
        {Data.map((item, i) => (
          <div
            className={`flex max-md:flex-col max-xs:gap-[5px] max-lg:gap-[20px] max-lg:justify-between  gap-[50px] pb-10 ${
              (i + 1) % 2 === 0 ? "flex-row-reverse " : ""
            }`}
          >
            <h1 className="max-md:block md:hidden max-xs:text-xl max-lg:text-[30px] text-[44px] leading-tight font-black text-[#131313] font_family_heading pb-2">
              {item.heading}
            </h1>
            <div>
              <img
                src={item.img}
                alt=""
                className="max-xs:w-[213px] max-md:m-auto max-md:w-[380px] max-lg:w-[300px] max-w-[383px]"
              />
            </div>
            <div className={`${item.width} max-lg:py-2  py-10`}>
              <h1 className="max-md:hidden md:block max-lg:text-[30px] text-[44px] leading-tight font-black text-[#131313] font_family_heading pb-2">
                {item.heading}
              </h1>
              <p className="max-xs:text-sm max-lg:text-[15px] text-lg max-lg:leading-relaxed Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] m-auto">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitsSubCards;
