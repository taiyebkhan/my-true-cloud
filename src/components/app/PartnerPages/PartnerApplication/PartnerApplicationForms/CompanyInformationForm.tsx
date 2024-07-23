import React from "react";
import img from "../../../../../assets/img/partner-application-form-images/company-info.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";

const fields = [
  {
    placeholder: "Company Name",
    required: true,
    col: "col-span-full",
  },
  {
    placeholder: "Website URL",
    required: true,
    col: "col-span-full",
  },
  {
    placeholder: "Street",
    required: true,
    col: "col-span-full",
  },
  {
    placeholder: "City.",
    required: true,
    col: "col-span-2",
  },
  {
    placeholder: "Zip.",
    required: true,
    type: "number",
    col: "col-span-1",
  },
  {
    placeholder: "State.",
    required: true,
    col: "col-span-2",
  },
  {
    placeholder: "Country*",
    required: true,
    dropdown: ["country 1", "country 2", "country 3"],
    col: "col-span-1",
  },
];

const CompanyInformationForm: React.FC<{ containerClass?: string }> = ({
  containerClass,
}) => {
  return (
    <form className={`min-w-full ${containerClass ? containerClass : ""}`}>
      <div className="flex justify-between items-center mb-5">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 max-w-xl">
          {fields.map((item, i) =>
            !item.dropdown ? (
              <input
                key={i}
                placeholder={item.placeholder}
                type={item.type ? item.type : "text"}
                className={`py-3 px-4 bg-transparent w-full border-b border-gray-800 ${item.col}`}
              />
            ) : (
              <select
                className={`w-full px-4 py-3 bg-transparent border-b border-gray-800 ${item.col}`}
              >
                {item.dropdown.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
            )
          )}
        </div>

        <img src={img} alt="img" className="max-w-[430px]" />
      </div>

      <div className="max-w-60 mx-auto">
        <ButtonPrimary>Save and continue</ButtonPrimary>
      </div>
    </form>
  );
};

export default CompanyInformationForm;
