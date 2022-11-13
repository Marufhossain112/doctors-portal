import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import appointmentImg from "../../assets/images/appointment.png";
const Appointment = () => {
  const [datePick, setDatePick] = useState(new Date());
  let footer = <p>Please pick a date.</p>;
  if (datePick) {
    footer = <p>You have selected {format(datePick, "PP")}</p>;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-lg">
          <img src={appointmentImg} alt="measuring.jpg" />
        </div>
        <div>
          <DayPicker
            className="mr-6"
            mode="single"
            selected={datePick}
            onSelect={setDatePick}
            footer={footer}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
