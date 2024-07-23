import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";
import { useInView } from "react-intersection-observer";
import styles from './NumberCounter.module.css'

const data = [
  {
    number: 10,
    symbol: "+",
    title: "Years in Business",
  },
  {
    number: 150,
    symbol: "+",
    title: "Years in Business",
  },
  {
    number: 10,
    symbol: "+",
    title: "Years in Business",
  },
];

const NumberCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div className={`innerContainer flex rounded-[14px] py-16 items-center justify-center gap-x-40 my-16 ${styles.container}`} ref={ref}>
      {data.map((item) => (
        <div className="text-center" >
          <h3 className="flex text-[40px] justify-center font-extrabold font-['Inter'] items-center" >
            <CountUp isCounting={startCount} end={item.number} duration={5} />
            {item.symbol}
          </h3>
          <div className="colorPrimary text-2xl font-normal font-['Inter']">
            Years in Business
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumberCounter;
