import React from "react";

const PrimaryButton = ({ children }) => {
//   const handleAppointment = () => {
    // console.log("I have an appointment here.");
//   };
  return (
    <button
    //   onClick={handleAppointment}
      className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
