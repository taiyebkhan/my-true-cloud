import React from "react";
import logo from "../../../assets/img/logo.png";
import { Outlet, Link } from "react-router-dom";
import styles from "./Nav.module.css";

const navLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  {
    text: "Products",
    dropdown: [
      { name: "My CRM", link: "/my-crm" },
      { name: "My Documents", link: "/my-documents" },
      { name: "My Web Conferences", link: "/my-web-conferences" },
      { name: "My Security", link: "/security" },
      { name: "ERP", link: "/erp" },
    ],
  },
  {
    text: "Industries",
    dropdown: [
      { name: "Enterprise", link: "/efficient-collaboration" },
      { name: "Healthcare", link: "/healthcare" },
      { name: "Pharmaceutical", link: "/pharmaceutical" },
      { name: "Banking/Financial Services", link: "/banking-services" },
      { name: "Legal", link: "/legal" },
      { name: "Manufacturing", link: "/manufacturing" },
      { name: "Education", link: "/education" },
    ],
  },
  {
    text: "Services",
    dropdown: [
      { name: "Consulting Services", link: "/consulting-service" },
      { name: "Training Services", link: "/training-services" },
    ],
  },
  {
    text: "Partner",
    dropdown: [
      { name: "Partner Program", link: "/partner-program" },
      { name: "Partner Application Form", link: "/partner-application-form" },
    ],
  },
  {
    text: "Company",
    dropdown: [
      { name: "Contact Us", link: "/contact" },
      { name: "Career", link: "/careers" },
      { name: "Press Releases", link: "/press-releases" },
      { name: "Events", link: "/company-events" },
      { name: "Benefits of SaaS", link: "/company-benefits" },
      { name: "Resources", link: "/resources" },
    ],
  },
];

const Nav = () => {
  return (
    <nav className="pt-4 pb-[14px] bg-white shadow border-b border-[#2b7dacc1] max-[1400px]:px-2">
      <div className="flex justify-between items-center innerContainer">
        <div className="max-w-[268px]">
          <Link to={"/"}>
            <img src={logo} alt="img" className="w-full max-h-11" />
          </Link>
        </div>

        <div className="flex items-center max-lg:hidden max-xl:gap-x-8 gap-x-12">
          {navLinks.map((item, i) => (
            <>
              {item.link ? (
                <a
                  className="text-lg font-medium hover:underline itemInter"
                  href={item.link}
                  key={item.text}
                >
                  {item.text}
                </a>
              ) : (
                <div className={`${styles.dropdownContainer} relative`}>
                  <h5 className="text-lg font-medium itemInter cursor-pointer">
                    {item.text}
                  </h5>

                  <div
                    className={`${styles.dropdown} z-20 px-3 py-3 border border-gray-200 -left-[30%] rounded min-w-max gap-y-2 drop-shadow-md flex flex-col absolute bg-white`}
                  >
                    {item.dropdown?.map((dropdown) => (
                      <a
                        className="px-2 py-1 rounded transition-all duration-200 hover:bg-gray-200"
                        href={dropdown.link}
                      >
                        {dropdown.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
