import React from "react";
import BankingServices from "../components/app/BankingServicesPage/BankingServices";
import BankingServicesHelp from "../components/app/BankingServicesPage/BankingServicesHelp";
import BankingServicesCard from "../components/app/BankingServicesPage/BankingServicesCard";
import BankingCards from "../components/app/BankingServicesPage/BankingCards";

const BankingServicesPage = () => {
  return (
    <>
      <BankingServices />
      <BankingServicesHelp />
      <BankingServicesCard />
      <BankingCards />
    </>
  );
};

export default BankingServicesPage;
