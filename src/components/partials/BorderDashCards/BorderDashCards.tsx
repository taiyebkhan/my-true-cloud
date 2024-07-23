import React, { useState } from "react";
import styles from "./BorderDashCards.module.css";

type CardDataType = {
  img: string;
  heading: string;
  text: string;
  cardClasses?: string;
  imgClasses?: string;
};

const Card: React.FC<CardDataType> = (props) => {
  const [showMore, setShowMore] = useState(false);
  const text = props.text;
  return (
    <div
      className={`flex max-sm:flex-col relative max-sm:pb-2 pb-8 max-lg:gap-[20px] justify-between w-full mx-auto max-sm:items-start items-center py-6 max-w-screen-lg ${props.cardClasses}`}
    >
      <div className="max-sm:w-full">
        <h2 className=" sm:hidden  max-xs:text-xl max-sm:text-[25px] font-extrabold max-lg:text-[35px] mb-5">
          {props.heading}
        </h2>
        <img
          src={props.img}
          alt="img"
          className={`max-xs:w-[220px] max-sm:w-[280px] max-h-[400px] mx-auto z-10 relative ${props.imgClasses} bg-white`}
        />
      </div>
      <div className="max-sm:w-full max-lg:w-[700px] mx-auto max-w-[536px] relative z-10">
        <h2 className="max-sm:hidden sm:block font-extrabold max-lg:text-[35px] mb-5">
          {props.heading}
        </h2>

        <p className="max-xs:text-sm max-lg:text-base">
          {!showMore && text.length > 200 ? (
            <>
              {text.slice(0, 200)}...{" "}
              <button
                className="colorPrimary text-base max-lg:text-sm font-semibold ml-1"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                Read More
              </button>
            </>
          ) : (
            <>
              {text}{" "}
              {/* {text.length > 200 ? (
                <button
                  className="colorPrimary text-base font-semibold ml-1"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  Show Less
                </button>
              ) : (
                ""
              )} */}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const BorderDashCards: React.FC<{
  cardData: CardDataType[];
  cardContainerClasses?: string;
}> = ({ cardData, cardContainerClasses }) => {
  return (
    <div
      className={`${styles.cardContainer} ${
        cardContainerClasses ? cardContainerClasses : ""
      } flex flex-col`}
    >
      {cardData.map((item, i) => (
        <Card
          key={i}
          {...item}
          cardClasses={
            i % 2 ? `flex-row-reverse ${styles.evenCard}` : styles.oddCard
          }
        />
      ))}
    </div>
  );
};

export default BorderDashCards;
