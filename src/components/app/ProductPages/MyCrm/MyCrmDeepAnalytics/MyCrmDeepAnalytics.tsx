import React from "react";
import styles from "./MyCrmDeepAnalytics.module.css";
import analyticsImg from "../../../../../assets/img/crm-deep-analytics-img.png";
import effectImg from "../../../../../assets/img/effect.png";

const MyCrmDeepAnalytics = () => {
  return (
    <section className={styles.section}>
      <div className="innerContainer relative">
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

        <h2 className="max-w-[835px] mx-auto text-center mb-5 font-black font-['Inter']">
          Unlock invaluable insights with our deep analytics
        </h2>

        <p className="max-w-[662px] mx-auto max-sm:mb-7 max-md:mb-10 mb-[72px] text-center font-normal font-['Montserrat']">
          Create custom reports and dashboards and measure operations in real
          time to stay on top of your business performance
        </p>

        <img
          src={analyticsImg}
          alt="analyticsImg"
          className="max-w-[1044px] w-full mx-auto"
        />
      </div>
    </section>
  );
};

export default MyCrmDeepAnalytics;
