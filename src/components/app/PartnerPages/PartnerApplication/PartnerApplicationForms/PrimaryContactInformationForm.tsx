import React from "react";
import img from "../../../../../assets/img/partner-application-form-images/contact-information.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";

const fields = [
  {
    placeholder: "First Name",
    required: true,
  },
  {
    placeholder: "Last Name",
    required: true,
  },
  {
    placeholder: "Email",
    required: true,
    type: "email",
  },
  {
    placeholder: "Phone no.",
    required: true,
    type: "number",
  },
];
const dropdownFieldsData = [
  {
    placeholder: "Select Contact Role.",
    required: true,
    dropdown: ["Select Contact Role.", "option 1", "option 2", "option 3"],
  },
  {
    placeholder: "How Did You Hear About Us? *",
    required: true,
    dropdown: [
      "How Did You Hear About Us?",
      "Linkedin",
      "Facebook",
      "Instagram",
      "Twitter",
    ],
  },
];

const PrimaryContactInformationForm: React.FC<{ containerClass?: string }> = ({
  containerClass,
}) => {
  return (
    <form className={`min-w-full ${containerClass ? containerClass : ""}`}>
      <div className="flex items-center mb-10 gap-x-14 justify-between">
        <div className="flex w-full flex-col gap-y-10 ">
          {fields.map((item, i) => (
            <input
              key={i}
              placeholder={item.placeholder}
              type={item.type ? item.type : "text"}
              className="py-3 px-4 bg-transparent w-full border-b border-gray-800"
            />
          ))}
        </div>

        <div className="w-full">
          <img src={img} alt="img" className="max-w-[380px] mx-auto" />
        </div>
      </div>

      <div className="flex justify-between gap-x-14 mb-12">
        {dropdownFieldsData.map((item) => (
          <select className="w-full px-4 py-3 bg-transparent border-b border-gray-800">
            {item.dropdown.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
        ))}
      </div>

      <div className="max-w-60 mx-auto">
        <ButtonPrimary>Save and continue</ButtonPrimary>
      </div>
    </form>
  );
};

export default PrimaryContactInformationForm;
