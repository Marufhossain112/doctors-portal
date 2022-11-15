import React from "react";
import MakeAppointment from "../../Appointment/MakeAppointment/MakeAppointment";
import InfoCards from "../../InfoCards/InfoCards";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
