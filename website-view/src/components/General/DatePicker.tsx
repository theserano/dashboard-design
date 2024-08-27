import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./general.scss";

const MyDatePicker = () => {
  const [selectedDay, setSelectedDay] = useState<Date>();

  return (
    <div className="date-picker-container">
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        weekStartsOn={0}
        showOutsideDays
        styles={{
          day: { height: "30px", width: "20px", fontSize: '12px' },
          day_selected: { backgroundColor: "#4a6cf7", color: "white" },
          day_today: { color: "#4a6cf7" },
          caption: { color: "#111", fontSize: "14px" },
          nav_button: { color: "#4a6cf7" },

        }}
      />
    </div>
  );
};

export default MyDatePicker;
