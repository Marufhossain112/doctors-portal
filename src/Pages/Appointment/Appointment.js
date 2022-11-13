import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointment/AvailableAppointments";

const Appointment = () => {
  const [datePick, setDatePick] = useState(new Date());
  // let footer = <p>Please pick a date.</p>;
  // if (datePick) {
  //   footer = <p>You have selected {format(datePick, "PP")}</p>;
  // }
  return (
    <div>
      <AppointmentBanner
        datePick={datePick}
        setDatePick={setDatePick}
      ></AppointmentBanner>
      <AvailableAppointments datePick={datePick}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
