import React from "react";

const data = [
  {
    heading: "Materials Management",
    points: [
      "Inventory Summary",
      "Inventory Tracking",
      "Bills of Material",
      "Bar Coding",
      "Job Tracking System",
      "Material Requirements Planning",
    ],
  },
  {
    heading: "Supply Chain Management",
    points: [
      "Online Order Tracking",
      "Problem Control",
      "Supply Chain Overview",
    ],
  },
  {
    heading: "Order Management",
    points: [
      "Commission Tracking",
      "Customer Orders",
      "EDI",
      "Order Entry Tracking",
      "Quote Tracking",
      "Sales Order",
    ],
  },
  {
    heading: "CRM",
    points: [
      "Configurator Pricing",
      "Cost Quote Estimating",
      "Customer Master List",
      "Opportunity Tracking",
      "Quick Quote",
      "Quote Tracking",
    ],
  },
  {
    heading: "Financial Management",
    points: [
      "Accounting Overview",
      "Accounts Receivable/Payables",
      "Costing and Expense Project Tracking",
      "Inventory Valuation",
      "Multi Company Financial Consolidation",
      "Credit Card Processing and Currency Manager",
      "EBA Foundation and General Ledger",
    ],
  },
  {
    heading: "Service and Support",
    points: ["Security", "Training", "Customer Portal"],
  },
  {
    heading: "Production Management",
    points: [
      "Capacity Planning",
      "Labor Time Tracking",
      "Multi-Plants",
      "Plant Floor Mobile Access – maybe",
      "Production Schedule Overview",
      "Statistical Process Controls",
    ],
  },
  {
    heading: "Enhanced Capabilities",
    points: [
      "Document Control System",
      "E-Commerce",
      "EDI",
      "HR Overview",
      "Branding Optional",
    ],
  },
];

const ErpEverythingYouNeedSection = () => {
  return (
    <section className="mb-28" >
      <div className="innerContainer">
        <div className="w-[743px] mx-auto mb-20 text-center flex-col justify-start items-start gap-[25px]">
          <h2 className="text-[44px] font-black font-['Inter']">
            Almost everything you need
          </h2>
          <p className="text-lg font-normal font-['Montserrat'] tracking-wide">
            Designed and Developed with very specific goals in mind. These goals
            have consistently underpinned development since its inception.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-y-[60px] justify-between">
          {data.map((item, i) => (
            <div key={i} className="max-w-80">
              <h6 className="text-2xl mb-[22px] font-extrabold font-['Inter']">
                {item.heading}
              </h6>
              <ul className="text-[15px] font-normal font-['Montserrat'] leading-7 tracking-wide flex flex-col gap-y-1">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpEverythingYouNeedSection;
