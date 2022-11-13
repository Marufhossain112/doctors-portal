import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentOptions from "../AvailableAppointment/AppointmentOptions";
import AvailableAppointments from "../AvailableAppointment/AvailableAppointments";

const Appointment = () => {
  const [loading, setLoading] = useState(false);

  const [datePick, setDatePick] = useState(new Date());
  const [selected, selectedDate] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        selectedDate(data);
        setLoading(false);
      });
  }, []);
  console.log(selected);
  if (loading) {
    return <p>I am loading now...</p>;
  }
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
