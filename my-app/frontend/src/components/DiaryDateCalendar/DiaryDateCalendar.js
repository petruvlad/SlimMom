import React from "react";
import { CalendarWrapper,CalendarTitle,DateItem,DateList } from "./DiaryDateCalendar.styled";



const DiaryDateCalendar = () => {
  // Simulăm o listă de date pentru afișare
  const dates = ["2024-04-19", "2024-04-18", "2024-04-17", "2024-04-16"];

  return (
    <CalendarWrapper>
      <CalendarTitle>Calendar</CalendarTitle>
      <DateList>
        {dates.map((date, index) => (
          <DateItem key={index}>{date}</DateItem>
        ))}
      </DateList>
    </CalendarWrapper>
  );
};

export default DiaryDateCalendar;
