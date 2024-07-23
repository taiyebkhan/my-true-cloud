import React, { useRef } from "react";
import styles from "./MyCrmWebConferenceFunctionality.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import blogImg1 from "../../../../../assets/img/my-crm-web-conferences/blog-1.png";
import blogImg2 from "../../../../../assets/img/my-crm-web-conferences/blog-2.png";
import blogImg3 from "../../../../../assets/img/my-crm-web-conferences/blog-3.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import {
  ArrowBackIosNew,
  ArrowBackIosRounded,
  ArrowForwardIos,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const blogData = [
  {
    img: blogImg1,
    text: "Toll Free, absolutely no telephony charges, we provide you a toll free 800 number. Also, compatible with Skype and VOIP.",
  },
  {
    img: blogImg2,
    text: "Email Invitations sent by simply using the email address of your attendees. The meeting will be automatically added to the participant’s MTC and Outlook calendars",
  },
  {
    img: blogImg3,
    text: "Meetings and Webinars with up to 1,000 Participants so you can have all of the right people in attendance.",
  },
  {
    img: blogImg2,
    text: "Email Invitations sent by simply using the email address of your attendees. The meeting will be automatically added to the participant’s MTC and Outlook calendars",
  },
  {
    img: blogImg1,
    text: "Toll Free, absolutely no telephony charges, we provide you a toll free 800 number. Also, compatible with Skype and VOIP.",
  },
  {
    img: blogImg3,
    text: "Meetings and Webinars with up to 1,000 Participants so you can have all of the right people in attendance.",
  },
];

const MyCrmWebConferenceFunctionality = () => {
  const sliderContainerRef = useRef<null | HTMLDivElement>(null);
  const cardRef = useRef<null | HTMLDivElement>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slideNextHandler = () => {
    slideHandler();
  };
  const slidePrevHandler = () => {
    slideHandler(true);
  };

  const slideHandler = (prev?: boolean) => {
    const currentPosition = (sliderContainerRef.current as HTMLDivElement)
      .scrollLeft;
    const cardWidth = cardRef.current?.offsetWidth;

    if (!cardWidth) return;

    // need to make gap (22) value dynamic
    if (prev) {
      (sliderContainerRef.current as HTMLDivElement).scrollLeft =
        currentPosition - (cardWidth + 22);
    } else {
      (sliderContainerRef.current as HTMLDivElement).scrollLeft =
        currentPosition + (cardWidth + 22);
    }
  };

  const BlogCard: React.FC<{ img: string; text: string }> = ({ img, text }) => {
    return (
      <div
        ref={cardRef}
        className="p-4 bg-white rounded-lg shadow-md max-w-[422px] min-h-[460px] max-lg:min-h-[330px] "
      >
        <img
          src={img}
          alt="img"
          className="max-xs:max-w-[260px] max-sm:max-w-[272px] max-lg:max-w-[300px] max-w-[390px] mb-5 rounded-lg "
        />
        <p className="text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide max-lg:text-[15px] max-lg:leading-5 ">
          {text}
        </p>
      </div>
    );
  };

  return (
    <section className="mb-40">
      <div className="innerContainer max-xs:mb-5 max-sm:mb-7 max-md:mb-12 mb-16">
        <h2 className="text-center max-sm:mb-2.5 max-md:mb-4 mb-6 font-black">
          Power of Seamless Collaboration: Key Features
        </h2>

        <p className="max-w-[951px] mx-auto text-center">
          Connect with ease using our cloud-based platform, seamlessly
          integrating with your existing tools and workflows
        </p>

        {/* <div className="max-w-[1280px] mx-auto"> */}
        {/* <Slider {...settings}>
          {blogData.map((item, i) => (
            <BlogCard key={i} img={item.img} text={item.text} />
          ))}
        </Slider> */}
        {/* </div> */}
      </div>

      <div className={`max-w-screen-2xl mx-auto ${styles.blogsContainer}`}>
        <ButtonPrimary disableElevation onClick={slidePrevHandler}>
          <ArrowBackIosRounded fontSize="large" />
        </ButtonPrimary>

        <div
          ref={sliderContainerRef}
          className="flex gap-x-6 overflow-x-hidden scroll-smooth py-2 px-2 innerContainer"
        >
          {blogData.map((item, i) => (
            <BlogCard key={i} img={item.img} text={item.text} />
          ))}
        </div>

        <ButtonPrimary disableElevation onClick={slideNextHandler}>
          <ArrowForwardIosRounded fontSize="large" />
        </ButtonPrimary>
      </div>
    </section>
  );
};

export default MyCrmWebConferenceFunctionality;
