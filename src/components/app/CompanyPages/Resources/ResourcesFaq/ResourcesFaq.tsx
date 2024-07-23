import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import { defaultFAQs } from "./defaultValues";
import ArrowDown from "../../../../../assets/img/resources/Arrowdown.png";
import ArrowUp from "../../../../../assets/img/resources/Arrowup.png";

type Props = {
  title: string;
  body: ReactNode;
};

const Disclosure = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col w-[1072px]  bg-[#F2F4F9] "
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button
        aria-controls={props.title}
        aria-expanded={isOpen}
        className="flex justify-between text-left items-center w-full space-x-4 h-[110px] px-12"
      >
        <div className="font-['inter'] text-2xl font-normal leading-[30.26px] tracking-normal text-left">
          {props.title}
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? (
              <img src={ArrowUp} alt={ArrowUp} />
            ) : (
              <img src={ArrowDown} alt={ArrowDown} />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.12,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.2,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
        className="font-light px-12 pt-0"
      >
        {props.body}
      </motion.div>
    </div>
  );
};

export default function ResourcesFaq() {
  return (
    <div className="w-full">
      <h1 className="font-['inter'] text-[24px] font-bold leading-[31px] tracking-normal text-left py-[19px]">
        FAQ
      </h1>
      <div className="m-auto">
        <h1 className="font-['inter'] text-4xl font-extrabold leading-12 tracking-normal text-center text-[#131313] pb-6">
          We have got the answers to your questions
        </h1>
        <div className="flex flex-col w-full p-5 justify-center items-center space-y-5">
          {defaultFAQs.map((faq, i) => (
            <Disclosure key={i} title={faq.question} body={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
