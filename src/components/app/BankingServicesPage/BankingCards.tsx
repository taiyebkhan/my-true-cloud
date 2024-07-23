import banking4 from "./../../../assets/img/BankingServices-img-4.png";
import banking5 from "./../../../assets/img/BankingServices-img-5.png";
import banking6 from "./../../../assets/img/BankingServices-img-6.png";
import banking7 from "./../../../assets/img/BankingServices-img-7.png";

import banking9 from "./../../../assets/img/BankingServices-img-9.png";

import BankingServicesImgCard from "./BankingServicesImgCard";

const Data = [
  {
    heading: "Complete Control and <br/> Visibility",
    para: `financial service employees don’t always have online access to their
        files, but saving company data such as client account information on
        personal laptops or mobile devices can compromise confidential data.
        MTC addresses the security needs of financial companies by providing
        complete control over folder access and real-time visibility on all
        user activity. Administrators can deactivate user accounts as needed
        as well as assign and revoke permissions on any folder. MTC also
        provides administrators with a rich set of controls such as trash
        retention policy, audit reports, file versioning, link controls,
        shared folder notifications, and desktop sync enablement.`,
    img: banking4,
    imgStyles: "max-w-[442px]",
  },
  {
    heading: "Better Work Flow for Maximum <br/> Efficiency",
    para: `Compiling and managing a customer loan file is very time consuming and document centric process. You have to organize and manage considerable amounts of documents and correspondence contained in a customer loan file. Credit reports, applications, signature cards, administrative documents and correspondence.`,
    img: banking6,
    imgStyles: "max-w-[424px]",
  },
  {
    heading: "Secure File Access with Enforced <br/> Folder Permissions",
    para: `Remote file access is a necessity for many financial service employees, but access beyond the firewall using traditional VPN systems can be cumbersome. MTC DMS solves that problem by offering secure online file access with enforced user authentication and folder permissions. No matter what location or access method (web browser, mapped drive, secure FTP, desktop sync, mobile/tablet app) employees are always authenticated using company specific authentication policies. By using MTC’s secure mobile collaboration platform businesses are able to provide file access to employees across multiple remote offices while maintaining permission control with centralized administration.`,
    img: banking7,
    imgStyles: "max-w-[352px]",
  },
  {
    heading: "State of the Art Security",
    para: `The financial services and banking industries play a critical role in the economy and the sensitive data they manage requires the highest standards for digital storage security. DMS provides a secure, centralized, electronic repository for capture, management and protection of critical documents to preserve the security and confidentiality of customer information. MTC offers multiple levels of security including typical one factor authentication with user name and password, mobile text, e-token and our new industry first, token-less 2 Factor Authentication.`,
    img: banking5,
    imgStyles: "max-w-[538px]",
  },

  {
    heading: "Secure Online Storage and Recovery",
    para: `Banks and financial businesses require the most secure repositories for storing their critical business data. That data storage must be protected at all stages, ensuring SEC record keeping and bank regulation compliance. By using DMS companies get a FINRA compliant online storage solution with complete end-to-end data protection. From the end user perspective, employees are always authenticated using their centrally administered credentials and only given access to the folders they have permissions to. All data is completely encrypted during transmission, providing full protection throughout the entire communication process.`,
    img: banking9,
    imgStyles: "max-w-[370px]",
  },
];

function BankingCards() {
  return (
    <section>
      <div className="flex flex-col">
        {Data.map((item, i) => (
          <BankingServicesImgCard
            key={i}
            reverse={
              i % 2 === 0 ? "flex-row-reverse  bg-[#FFFFFF] " : " bg-[#EDF8FF]"
            }
            heading={item.heading}
            img={item.img}
            para={item.para}
            imgStyles={item.imgStyles}
          />
        ))}
      </div>
    </section>
  );
}

export default BankingCards;
