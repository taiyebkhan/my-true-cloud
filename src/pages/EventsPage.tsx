import React from "react";
import Events from "../components/app/EventsPageComponents/Events";
import EventsCards from "../components/app/EventsPageComponents/EventsCards";
import EventsGartnerHeading from "../components/app/EventsPageComponents/EventsGartnerHeading";
import EventSubscribeForm from "../components/app/EventsPageComponents/EventSubscribeForm";

const EventsPage = () => {
  return (
    <>
      <Events />
      <EventsCards />
      <EventsGartnerHeading />
      <EventSubscribeForm />
    </>
  );
};

export default EventsPage;
