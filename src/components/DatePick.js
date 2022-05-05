import React, { useState } from "react";
import  DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [startDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} 
    onChange={(date) => setSelectedDate(date)} 
    dateFormat = "dd/MM/yyyy"
    showYearDropdown
    showMonthDropdown
    dropdownMode="select"
    />
  );
};

export default DatePick