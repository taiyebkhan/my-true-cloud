import React from "react";
import img1 from "../../../../assets/img/why-us-img-1.png";
import img2 from "../../../../assets/img/why-us-img-2.png";
import img3 from "../../../../assets/img/why-us-img-3.png";
import img4 from "../../../../assets/img/why-us-img-4.png";

const cardsData = [
  {
    heading: "True Commitment",
    text: "MTC combines state of the art secure cloud-computing and mobile technologies into our solutions; we are committed to providing our customers an advance secure collaboration platform like no other in the market.",
    img: img1,
    imgWidth: "max-xs:w-[140px] max-lg:w-[280px] max-w-[340px]",
  },
  {
    heading: "True Solutions",
    text: "Effective internal and external communication, managing vast amounts of documents and data and conducting business anywhere, any time and on any device is a complex process. We are constantly working hard to develop solutions that make these complex processes simple so our customers can focus on what they do best – building their businesses. MTC is committed to being a technology leader that addresses the challenges impacting our customers while providing the most secure mobile cloud solutions in the industry.",
    img: img2,
    imgWidth:
      "max-xs:w-[280px] max-lg:w-[330px] xs:h-[250px] max-xl:w-[415px] max-w-[555px]",
  },
  {
    heading: "True Secure Collaboration",
    text: "MTC offers the only above military-grade secure collaboration suite that can satisfy these unique requirements. Our goal is to replace the traditional office with a fully-functional collaborative, secure mobile office suite providing CRM, document management, project management, e-campaigns, social business, web conferencing, file sharing and 2-Factor Authentication/Virtual Private Network Tunneling. We provide true secure solutions that take the mobile office to the next level.",
    img: img3,
    imgWidth: "max-xs:w-[280px]  max-lg:w-[355px] xs:h-[300px] max-w-[530px]",
  },
  {
    heading: "True Partners",
    text: "MTC strives to be a Partner that is open, honest, and accountable to each of our customers. we provide industry-specific roles so customers can get the functionality they require, not useless modules that don’t meet their needs. Second, no long term contracts mandated, we provide a variety of contracts that allow customers to work with us in a manner that suits their needs. Third, our customers own their own data – we do not hold your data hostage. Lastly, we offer data and file storage space at a fair price. As you search for solutions and examine the companies behind those solutions, you will find that our approach is different. You have our 100% commitment to your satisfaction and making it easy to do business with us, that is what a trusted Partner does",
    img: img4,
    imgWidth:
      "max-lg:w-[325px] max-xl:w-[380px] max-w-[580px]",
  },
];

const Card: React.FC<{
  heading: string;
  text: string;
  img: string;
  imgWidth: string;
  className?: string;
}> = ({ heading, text, img, className, imgWidth }) => {
  const classes = className;
  return (
    <div
      className={`flex max-md:flex-col items-center max-lg:gap-x-[20px] max-xl:gap-x-[50px]  gap-x-[100px] ${classes}`}
    >
      <div className="max-w-[650px]">
        <h2 className="max-xs:text-xl  max-lg:text-[30px] max-lg:whitespace-nowrap max-xl:text-[40px] text-[44px] font-extrabold font-['Inter'] leading-[73px] max-xs:mb-3 ms:mb-2.5">
          {heading}
        </h2>
        <div className="max-xs:text-sm max-lg:text-[15px] max-xl:text-lg  text-xl font-normal font-['Inter'] max-lg:leading-relaxed max-xs:leading-[22px] leading-[37.60px] tracking-wide">
          {text}
        </div>
      </div>
      <img className={`${imgWidth}`} alt="img" src={img} />
    </div>
  );
};

const AboutWhyUsSection = () => {
  return (
    <section className="max-lg:mb-16 mb-32">
      <div className="innerContainer">
        <h1 className="text-center mb-6">
          Why <span className="colorPrimary">Us?</span>
        </h1>

        <p className=" max-w-[900px]  max-xs:text-sm max-sm:mb-14 mb-24 mx-auto text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          Trust in our proven track record of security and performance
          excellence, empowering you to focus on innovation while we handle the
          rest.
        </p>

        <div className="flex flex-col max-lg:gap-y-10 gap-y-20">
          {cardsData.map((item, i) => (
            <Card
              key={i}
              heading={item.heading}
              text={item.text}
              img={item.img}
              imgWidth={item.imgWidth}
              className={!(i % 2) ? "" : "flex-row-reverse"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUsSection;
