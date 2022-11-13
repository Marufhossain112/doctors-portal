import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ datePick }) => {
  return (
    <section className="text-center text-secondary text-2xl mt-16">
      <p>You have selected {format(datePick, "PP")}</p>
    </section>
  );
};

export default AvailableAppointments;
