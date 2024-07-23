import React, { useRef, useState } from "react";
import img1 from "../../../../../assets/img/enterprises-images/slider-1.png";

const btnData = [
  "Administrators",
  "Local Employees",
  "Remote Employees",
  "Partners & Clients",
];

const sliderData = [
  {
    points: [
      "Control user permissions",
      "Control file/folder accessibility",
      "Administrative reports & audits",
      "Active Directory & LDAP integration",
    ],
    img: img1,
  },
  {
    points: [
      "Control user permissions",
      "Control file/folder accessibility",
      "Administrative reports & audits",
    ],
    img: img1,
  },
  {
    points: [
      "Control user permissions",
      "Control file/folder accessibility",
      "Administrative reports & audits",
      "Active Directory & LDAP integration",
    ],
    img: img1,
  },
  {
    points: [
      "Control user permissions",
      "Administrative reports & audits",
      "Active Directory & LDAP integration",
    ],
    img: img1,
  },
];

const EfficientCollaborationHelpSection = () => {
  const [currentTab, setCurrentTab] = useState<string>(btnData[0]);
  const constainerRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const changeSlideHandler = (index: number) => {
    const slideWidth = (slideRef.current as HTMLElement).offsetWidth;

    if (constainerRef.current) {
      constainerRef.current.scrollLeft = slideWidth * index;
    }
  };

  return (
    <section className="mb-28">
      <div className="innerContainer">
        <h2 className="mb-9 text-center">How can we help ? </h2>
        <p className="text-center max-w-[1090px] mx-auto mb-16 text-lg">
          By adopting our Cloud platform, enterprise organizations can enhance
          their existing infrastructure or replace traditional file servers
          completely.
        </p>

        <div className="bgGray rounded-2xl overflow-hidden w-full">
          {/* btns */}
          <div className="grid grid-cols-4 border-b border-[#504F6A]">
            {btnData.map((item, i) => (
              <button
                onClick={() => {
                  changeSlideHandler(i);
                  setCurrentTab(item);
                }}
                className={`text-center text-2xl font-bold pt-9 pb-4 border-b-[6px] ${
                  item === currentTab
                    ? "border-[var(--color-primary)]"
                    : "border-transparent"
                }`}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>

          {/* content */}
          <div
            ref={constainerRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {sliderData.map((item, i) => {
              return (
                <div
                  ref={slideRef}
                  key={i}
                  className="pb-20 px-16 pt-3 flex gap-x-32 min-w-full justify-between"
                >
                  <ul className="text-2xl font-[Montserrat] pl-5 flex flex-col gap-y-5 mt-10">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-x-10">
                        <span className="w-14 h-14 rounded-lg bg-white shadow-lg flex justify-center items-center ">
                          {j}
                        </span>{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                  <img src={item.img} alt="img" className="max-w-[390px]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficientCollaborationHelpSection;
