import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";
import { useForm, SubmitHandler } from "react-hook-form";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import moment from "moment";
import ReqDemoSuccessScreen from "./ReqDemoSuccessScreen";

const timeBtns = [
  "9:30",
  "12:30",
  "1:30",
  "2:30",
  "3:30",
  "4:30",
  "5:30",
  "6:30",
  "7:30",
];

const formFields = [
  {
    placeholder: "Name*",
    required: true,
    name: "name",
  },
  {
    placeholder: "Email*",
    required: true,
    type: "email",
    name: "email",
  },
  {
    placeholder: "Phone number *",
    required: true,
    type: "number",
    name: "mobile",
  },
  {
    placeholder: "Company Name",
    required: false,
    name: "companyName",
  },
  {
    placeholder: "Website",
    required: false,
    name: "website",
  },
  {
    placeholder: "Company Size",
    required: false,
    name: "companySize",
  },
];

const errorMessages = {
  name: {
    value: /^[a-zA-Z][a-zA-Z\s]*$/,
    message: "Enter a valid Name.",
  },
  email: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Enter a valid email address.",
  },
  mobile: {
    value: /^\d{10,15}$/,
    message: "Enter a valid mobile number.",
  },
};

const ReqDemo: React.FC<{ onClose: () => void; show: boolean }> = ({
  onClose,
  show,
}) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [formSteps, setFormSteps] = useState(1);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    setFormSteps(1);
    setSelectedTime("");
    setSelectedDate("");
  }, [show]);

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const submitDateAndTimeHandler = () => {
    if (!selectedTime || !selectedDate) {
      alert("Please select the date and time");
      return;
    }
    console.log("selectedDate:", selectedDate, "selectedTime:", selectedTime);
    setFormSteps(formSteps + 1);
  };

  const formSubmitHandler = () => {
    console.log("submit==", watch());
    setIsFormSubmit(true);
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed h-full duration-300 top-0 left-0 z-30 bg-black/80 ${
          show ? "w-full" : "w-0"
        }`}
      />
      <div
        id={show ? "showReqDemoForm" : ""}
        className={`fixed h-full duration-300 overflow-y-auto top-0 right-0 z-40 rounded-tl-xl rounded-bl-xl bg-white flex flex-col justify-center items-end ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto py-16 px-[90px]">
          {!isFormSubmit && (
            <>
              <h2 className="max-sm:text-2xl max-md:text-3xl leading-[50px] max-lg:text-4xl text-[40px] max-w-[502px] mb-7">
                Book a <span className="colorPrimary">Free Demo</span> with our
                experts
              </h2>

              {formSteps === 1 && (
                <>
                  <p className="max-md:text-sm max-lg:text-xl text-2xl font-extrabold mb-3 text-[#3A3A3A]">
                    Pick Date and Time
                  </p>

                  <div
                    className={`mb-7 shadow px-5 rounded-xl ${styles.datePickerContainer}`}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticDatePicker
                        orientation="landscape"
                        onChange={(e) => {
                          const date = moment(`${e}`).format("DD-MM-YYYY");
                          setSelectedDate(date);
                        }}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="py-[14px] px-9  shadow grid grid-cols-3 gap-x-11 gap-y-4 mb-[60px] rounded-xl">
                    {timeBtns.map((item, i) => (
                      <button
                        onClick={() => {
                          setSelectedTime(item);
                        }}
                        key={i}
                        className={`text-center font-[Open Sans] rounded-xl w-full py-2 transition-all duration-200 active:scale-95 ${
                          selectedTime === item
                            ? "bgPrimary text-white"
                            : "bg-[#F3F2F5] hover:bg-gray-300"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <ButtonPrimary onClick={submitDateAndTimeHandler} px="px-20">
                    Next
                  </ButtonPrimary>
                </>
              )}

              {formSteps === 2 && (
                <>
                  <p className="max-md:text-sm max-lg:text-xl text-2xl font-extrabold mb-5 text-[#3A3A3A]">
                    Enter your details
                  </p>

                  <form
                    className="flex flex-col gap-y-5"
                    onSubmit={handleSubmit(formSubmitHandler)}
                  >
                    {formFields.map((item) => {
                      const errObj =
                        errorMessages[item.name as keyof typeof errorMessages];

                      return (
                        <div>
                          {errors[item.name] && errors[item.name] && (
                            <p className="text-sm text-red-600">
                              {errors[item.name]?.message
                                ? `${errors[item.name]?.message}`
                                : `${item.placeholder} is required`}
                            </p>
                          )}
                          <input
                            {...register(item.name, {
                              required: item.required,
                              pattern: errObj ? errObj : undefined,
                            })}
                            placeholder={item.placeholder}
                            required={item.required}
                            className={`w-full px-5 py-3 rounded-lg border duration-200 focus:outline-none ${
                              errors[item.name]
                                ? "border-red-600"
                                : "border-gray-400 hover:border-gray-500 focus:border-gray-600"
                            }`}
                          />
                        </div>
                      );
                    })}

                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder={"Message"}
                      className="px-5 py-3 rounded-lg border duration-200 focus:outline-none border-gray-400 hover:border-gray-500 focus:border-gray-600"
                    />

                    <ButtonPrimary className="max-w-max" px="px-[50px]">
                      Request Demo
                    </ButtonPrimary>
                  </form>
                </>
              )}
            </>
          )}

          {isFormSubmit && (
            <>
              <ReqDemoSuccessScreen onClose={onClose} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReqDemo;
