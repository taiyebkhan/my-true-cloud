import React from "react";
import img1 from "../../../../../assets/img/training-services-images/card-img-1.png";
import img2 from "../../../../../assets/img/training-services-images/card-img-2.png";
import img3 from "../../../../../assets/img/training-services-images/card-img-3.png";
import img4 from "../../../../../assets/img/training-services-images/card-img-4.png";
import BorderDashCards from "../../../../partials/BorderDashCards/BorderDashCards";

const cardData = [
  {
    heading: "Training Manuals",
    text: "Gives good insight into the functionality found in each module and lays a solid general foundation for more hands-on training (part of your monthly subscription). Follow this link to a list of available Training Manuals.",
    img: img1,
  },
  {
    heading: "Training Videos",
    text: "ands-on training that should be taken during and post implementation to ensure users are comfortable with key processes, features and role-specific functionality. In most cases, the combination of training video and training manuals will be sufficient to get your team effectively using MTC solutions (part of your monthly subscription). Follow this link to list of available Training Videos.",
    img: img2,
  },
  {
    heading: "Virtual Training",
    text: "Advance training courses are offered via the web for up to 14 users that want more hands-on training related to specific modules. Focus is on the more complex areas of each module with time devoted to answering some company specific issues. However, company’s that would prefer to have a tailored program, our training team will work with you to create the appropriate program, which can later be used to train new employees. This approach reduces an employee’s start-up time, makes them more efficient and more comfortable with the solutions.",
    img: img3,
  },
  {
    heading: "On-Site Training",
    text: "A custom tailored training program that is delivered to your entire team on-site. Best used if a company wants all users in one location to encourage discussion and collaboration as part of the course program.",
    img: img4,
  },
];

const TrainingServicesToolsSection = () => {
  return (
    <section className="bgGray pt-3 px-5 max-md:pb-12 max-lg:pb-20 pb-56">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-black my-5 max-xs:w-[220px] mx-auto text-center">
          Training Tools to Assist You
        </h2>
        <p className="text-center max-sm:mb-5 mb-20">
          The typical result of this approach is extreme frustration and bigger
          operational issues arising than would normally occur. MTC wants to
          make the experience of adopting our solutions as smooth and enjoyable
          as possible. We have provided the following training tools to assist
          you:
        </p>

        <BorderDashCards cardData={cardData} />
      </div>
    </section>
  );
};

export default TrainingServicesToolsSection;
