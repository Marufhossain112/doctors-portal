import React from "react";
import { DayPicker } from "react-day-picker";
import appointmentImg from "../../assets/images/appointment.png";

const AppointmentBanner = ({ datePick, setDatePick }) => {
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
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
