import Educatiom1 from "./../../../../assets/img/eductaion/Education-1.png";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";

function EducationHeader() {
  return (
    <section>
      <div className="innerContainer max-xl:px-5 flex max-md:flex-col min-sm:px-10 max-md:pt-2 md:max-lg:py-10 pt-20 gap-x-10 justify-around">
        <div className="xl:w-[50%]">
          <h1 className=" text-[30px] max-lg:text-[40px] text-[56px] Line-height-[72px] Letter-spacing-[3%] font_family_heading font-black text-[#131313]">
            EDUCATION
          </h1>
          <p className="max-lg:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal py-2 text-[#131313]">
            Our solutions offer trainers, educators, tutors, teachers, parents
            and students an improved environment for individual learning and
            increased participation. Anyone can review the information and use
            it in a way that best fits their individual learning process. Track
            the students understanding, issues, progress.  Our virtual solution
            may require our Document Management System (DMS) also.
          </p>
          <div className="w-[181px] h-[62px] rounded-lg pt-5 mb-10">
            <ButtonPrimary>Book a Demo</ButtonPrimary>
          </div>
        </div>
        <div>
          <div className="m-auto max-lg:w-[360px]  max-xl:w-[400px] max-w-[450px]">
            <img src={Educatiom1} alt="" className="max-sm:w-[334px] " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationHeader;
