import React from "react";
import img from "../../../../assets/img/req-form/success.png";
import { EventNote, VideocamRounded, WatchLater } from "@mui/icons-material";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";

const ReqDemoSuccessScreen: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <div className="max-w-[578px]">
      <h1 className="font-extrabold mb-5 text-center">Thank you</h1>
      <img src={img} alt="img" className="mb-1 mx-auto" />

      <div className="py-8 px-14 rounded-xl shadow-lg mb-8">
        <div>
          <p className="mb-1.5 text-gray-400 text-[15pxx]">Meeting Details</p>
          <div className="flex gap-x-5 mb-1">
            <VideocamRounded />
            <p className="font-medium">Online</p>
          </div>
          <div className="flex gap-x-5">
            <WatchLater />
            <p className="font-medium">1 hour</p>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-gray-400 text-[15pxx]">Date & Time</p>
          <div className="flex gap-x-5 mb-1">
            <EventNote />
            <p className="font-medium">
              Thu Feb 15, 2024
              <br />
              <span className="font-normal">12:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      <p className="text-xl font-normal mb-12 leading-8 text-center">
        Our team will reach out to you at the provided email address or phone
        number shortly to confirm your demo appointment.
      </p>

      <ButtonPrimary onClick={onClose} className="mx-auto" px="px-20">
        Close
      </ButtonPrimary>
    </div>
  );
};

export default ReqDemoSuccessScreen;
