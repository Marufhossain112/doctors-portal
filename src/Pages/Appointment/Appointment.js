import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentOptions from "../AvailableAppointment/AppointmentOptions";
import AvailableAppointments from "../AvailableAppointment/AvailableAppointments";

const Appointment = () => {
  const [datePick, setDatePick] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        datePick={datePick}
        setDatePick={setDatePick}
      ></AppointmentBanner>
      <AvailableAppointments datePick={datePick}></AvailableAppointments>
      <AppointmentOptions></AppointmentOptions>
    </div>
  );
};

export default Appointment;
