import React, { useState } from "react";
import appointmentImg from "../../assets/images/appointment.png";
import DatePicker from "react-datepicker";
const Appointment = () => {
  const [datePick, setDatePick] = useState(new Date());
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <DatePicker
            selected={datePick}
            onSelect={(datePick) => setDatePick(datePick)} /* অন সিলেক্ট না দিলে ডেট সিলেক্ট করতে পারবা না | */
          ></DatePicker>
        </div>
        <div className="w-1/2">
          <img src={appointmentImg} alt="apn.img" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Appointment;
