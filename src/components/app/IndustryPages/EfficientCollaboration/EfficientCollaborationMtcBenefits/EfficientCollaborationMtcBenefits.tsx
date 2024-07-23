import React from "react";
import img from "../../../../../assets/img/enterprises-images/mtc-benefits.png";
import cardImg1 from "../../../../../assets/img/enterprises-images/card-1.png";
import cardImg2 from "../../../../../assets/img/enterprises-images/card-2.png";
import cardImg3 from "../../../../../assets/img/enterprises-images/card-3.png";
import cardImg4 from "../../../../../assets/img/enterprises-images/card-4.png";
import cardImg5 from "../../../../../assets/img/enterprises-images/card-5.png";
import cardImg6 from "../../../../../assets/img/enterprises-images/card-6.png";
import cardImg7 from "../../../../../assets/img/enterprises-images/card-7.png";
import ImgTextFlexComponent from "../../../../partials/ImgTextFlexComponent/ImgTextFlexComponent";

const cardData = [
  {
    heading: "Folder-Based File Sharing",
    text: "MTC provides powerful capabilities to enable employees and partners to work together using shared folders. Administrators create shared folders for teams and a private folder for each employee. Users can create subfolders to further organize files. This structure follows a familiar physical file server model with shared folders for groups and a “/Private” folder for each employee. Folder access is controlled using granular access permissions (read/write/delete). These access controls ensure that each user can see only the folders intended for their projects.",
    img: cardImg1,
    imgClasses: "max-w-[473px]",
  },
  {
    text: "This sustained file-sharing model reduces the need for large email attachments, which can take a long time and overload email servers. File versions are automatically created as users make changes, and files can be locked to prevent multiple users from making changes at the same time. Automated notifications are available to keep users informed about changes in the files.",
    img: cardImg2,
    imgClasses: "max-w-[347px]",
  },
  {
    heading: "Ad Hoc File Sharing",
    text: "Employees that need to share files quickly or publish to a wide audience can create a link (URL) to one or more of your files. These links can easily be emailed, embedded in a PDF or Word document or made available on any third-party application or website such as Twitter, Facebook, LinkedIn, or instant messaging. Files are automatically downloaded when a recipient clicks on the link; there¡¯s no need to require them to log in to MTC.",
    img: cardImg3,
    imgClasses: "max-w-[428px]",
  },
  {
    heading: "Cross-Office Collaboration",
    text: "MTC cloud based collaboration platform allows multiple offices to enable distributed employees to work together using a single set of files. The granular permissions are also synchronized to each location. This allows enterprise organizations to provide a file server-like experience to users in each office, where users simply access the files they have access to using the cloud.",
    img: cardImg4,
    imgClasses: "max-w-[420px]",
  },
  {
    heading: "Flexible Access to Files with Drag and Drop",
    text: "Employees need to be productive in the office and on the go. Native applications for iPad, iPhone, Android and Windows mobile allow access to while on the road. Access is also available with any device through a web browser. MTC allows employees to synchronize files with their PC and Mac desktop and make modifications, even when they are offline. MTC provides convenient file drag & drop and edit capabilities (Windows, Mac, and Linux compatible). With all access methods, folder-based permissions are consistently enforced.",
    img: cardImg5,
    imgClasses: "max-w-[394px]",
  },
  {
    heading: "Central Administration & Reporting",
    text: "DMS can be managed and controlled by one or more designated administrators. The administrator has the authority to create and manage all user information including passwords; for example the administrator can quickly remove access if an employee leaves the company. All access to files is based on permissions set by the administrator, therefore ensuring that employees and partners only see relevant files. Integration with directory services (e.g. Open LDAP, Active Directory Services) reduces time for setup and user management. MTC DMS provides a rich set of reports to manage and monitor the account usage. Reports provide information including storage utilization, access audits (who has permissions to view what files) and full transaction history on the server (who uploaded, downloaded, or deleted files and folders.",
    img: cardImg6,
    imgClasses: "max-w-[566px]",
  },
  {
    heading: "Security & Privacy",
    text: "MTC provides state of the art Strong 2 Factor Authentication with either a Token or Token-less technology. MTC’s token-less technology removes end-user complexity by making the process behind the One Time Passwords (OTPs) invisible for the end user. With this new feature you greatly increase the security of your data while lowering the deployment costs of typical token technology. MTC’s File Server is hosted in world-class facilities, which are SAS-70 Type III and HIPAA compliant. MTC’s architecture has built-in redundancy, maintaining multiple copies of data to protect against hardware failures. Data is protected during transmission using 256-bit AES encryption over SSL.",
    img: cardImg7,
    imgClasses: "max-w-[538px]",
  },
];

const EfficientCollaborationMtcBenefits = () => {
  return (
    <section className="mb-[68px]">
      <div className="innerContainer">
        <h2 className="text-center mx-auto max-w-[860px] mb-16">
          Benefits of MTC Cloud Based Collaboration Platform
        </h2>

        <img
          src={img}
          alt="img"
          className="max-w-[1250px] max-h-[999px] mx-auto mb-28 "
        />

        <div>
          {cardData.map((item, i) => (
            <ImgTextFlexComponent
              key={i}
              {...item}
              textContainerWidthClass="max-w-[692px]"
              cardClasses={`${i > 1 ? 'mb-10' : ''} ${i % 2 ? "flex-row-reverse" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficientCollaborationMtcBenefits;
