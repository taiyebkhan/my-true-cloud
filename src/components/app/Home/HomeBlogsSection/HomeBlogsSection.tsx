import React from "react";
import { motion } from "framer-motion";
import blogImg1 from "../../../../assets/img/blog-img-1.png";
import blogImg2 from "../../../../assets/img/blog-img-2.png";
import blogImg3 from "../../../../assets/img/blog-img-3.png";

const blogData = [
  {
    img: blogImg1,
    heading: "Heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis ",
  },
  {
    img: blogImg2,
    heading: "Heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis ",
  },
  {
    img: blogImg3,
    heading: "Heading",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis ",
  },
];

const BlogCard: React.FC<{ img: string; index: number }> = ({ img, index }) => {
  return (
    <motion.div
      className="max-xs:max-w-[320px] max-md:max-w-[380px] max-w-[423px] max-md:min-w-[320px] min-w-[423px] max-sm:min-h-[300px] max-md:min-h-[400px] min-h-[501px] max-md:px-[14px] px-[17px] py-4 rounded-[9px] shadow backdrop-blur-[20px]"
      initial={{ opacity: 0, transform: "translateY(100px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "backOut",
        delay: 0.35 * (index + 1),
      }}
    >
      {/* <div className="max-xs:max-w-[320px] max-md:max-w-[380px] max-w-[423px] max-md:min-w-[320px] min-w-[423px] max-sm:min-h-[300px] max-md:min-h-[400px] min-h-[501px] max-md:px-[14px] px-[17px] py-4 rounded-[9px] shadow backdrop-blur-[20px]"> */}
      <img
        className="w-full max-xs:h-[124px] max-sm:h-[140px] max-md:h-[180px] h-[218px] rounded-[9px] mb-6"
        src={img}
      />
      <div className="w-[268.13px] h-[29px] justify-start items-start inline-flex mb-5">
        <div className="px-3 pt-2 pb-2.5 lightBackground rounded-tl-md rounded-bl-md justify-center items-center gap-2.5 flex">
          <div className="w-[69px] h-[11px] text-center max-xs:text-[10px] text-xs font-semibold font-['Inter'] uppercase leading-[14.40px]">
            2 min read
          </div>
        </div>
        <div className="px-3 pt-2 pb-2.5 bg-white rounded-tr-md rounded-br-md justify-center items-center gap-2.5 flex">
          <div className="w-[115px] h-[11px] max-xs:text-[10px] text-xs font-semibold font-['Inter'] uppercase leading-[14.40px]">
            JAN 13, 2024{" "}
          </div>
        </div>
      </div>
      <h5 className="max-xs:text-sm max-md:text-base max-lg:text-xl text-2xl font-extrabold font-['Inter'] leading-normal">
        Heading
      </h5>

      <div className="max-md:text-sm max-lg:text-base text-lg font-normal font-['Montserrat'] leading-[30.42px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Ut enim ad minim veniam, quis{" "}
      </div>
      {/* </div> */}
    </motion.div>
  );
};

const HomeBlogsSection = () => {
  return (
    <section className="mb-14">
      <div className="innerContainer">
        <h2 className="text-center mb-2.5 font-black font-['Inter'] max-xs:leading-6 max-sm:leading-10 max-xl:leading-[50px] leading-[57.20px]">
          Explore Insights and Innovations with Our Blog
        </h2>
        <p className="max-w-[590px] mx-auto max-xs:mb-5 max-lg:mb-10 mb-20 text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          We learn and share knowledge through stories. These are some of our
          latest.
        </p>

        <div className="max-md:px-0 max-xl:px-1 flex max-md:flex-col max-md:gap-y-6 max-md:items-center gap-x-6 max-[1400px]:justify-between justify-center overflow-y-visible py-2 max-xs:overflow-visible max-xl:overflow-x-auto">
          {blogData.map((item, i) => (
            <BlogCard key={i} img={item.img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogsSection;
