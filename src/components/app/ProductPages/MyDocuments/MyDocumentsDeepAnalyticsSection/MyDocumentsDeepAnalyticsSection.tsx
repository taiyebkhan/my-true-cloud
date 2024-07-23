import React from "react";
import styles from "./MyDocumentsDeepAnalyticsSection.module.css";
import lineChartImg from "../../../../../assets/img/line-chart.png";
import pieChartImg from "../../../../../assets/img/pie-chart.png";
import { OpenInNew } from "@mui/icons-material";
import effectImg from "../../../../../assets/img/effect.png";

const MyDocumentsDeepAnalyticsSection = () => {
  return (
    <section className=" max-md:mb-10 mb-28 relative">
      {/* effect images */}
      <>
        <img
          src={effectImg}
          alt="effect-img"
          className={styles.effectRightImg}
        />
        <img
          src={effectImg}
          alt="effect-img"
          className={styles.effectLeftImg}
        />
      </>

      <div className="innerContainer">
        <h2 className="text-center max-xs:text-xl max-md:text-[30px] max-md:leading-normal text-center text-[44px] font-black font-['Inter'] leading-[57.20px] mb-5">
          Unlock invaluable insights with our deep analytics
        </h2>

        <p className="max-xs:text-sm max-sm:text-base max-w-[1059px] mx-auto text-center text-lg font-normal font-['Montserrat'] mb-16 tracking-wide">
          Gain actionable insights into document usage, storage trends, and user
          behavior with our comprehensive deep analytics suite.
        </p>

        <div className="flex max-sm:flex-col max-sm:gap-y-10 items-center gap-x-5 justify-center mx-auto relative">
          {/* line chart */}
          <div className="bg-white py-[30px] px-6 rounded-[20px] shadow max-w-2xl">
            <p className="text-lg font-semibold font-['Inter'] leading-relaxed mb-4">
              Line chart
            </p>
            <img src={lineChartImg} alt="line-chart-img" className="w-full" />
          </div>

          {/* pie chart */}
          <div className="bg-white p-6 pb-10 max-w-80 rounded-xl shadow">
            <div className="flex items-center  mb-4">
              <p className="text-base font-bold font-['Roboto'] leading-normal">
                Pie Chart Example
              </p>
              <a
                href="#"
                className="colorPrimary text-sm font-normal font-['Roboto'] leading-tight flex items-center gap-x-1"
              >
                View Details
                <OpenInNew />
              </a>
            </div>

            <img
              src={pieChartImg}
              alt="pieChartImg"
              className="max-lg:w-40 max-w-56 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDocumentsDeepAnalyticsSection;
