import React, { useState } from "react";
import  DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = (props) => {
  const [startDate, setSelectedDate] = useState(new Date());
  return (
  <div>
    <DatePicker selected={startDate} 
    onChange={(date) => setSelectedDate(date)} 
    dateFormat = "MM/dd/yyyy"
    showYearDropdown
    showMonthDropdown
    dropdownMode="select"
  />
  <div><h1>{startDate ? startDate.toDateString(): null}</h1> </div>
  </div>
  );
};

export default DatePick