import React from "react";
import { SectionTitle, DailyCalorieIntakeWrapper } from "./DailyCalorieIntake.styled"
const DailyCalorieIntake = ({ dailyIntake }) => {
  return (
    <DailyCalorieIntakeWrapper>
      <SectionTitle>Daily Calorie Intake</SectionTitle>
      <p>Your daily calorie intake is: {dailyIntake} kcal</p>
    </DailyCalorieIntakeWrapper>
  );
};

export default DailyCalorieIntake;
