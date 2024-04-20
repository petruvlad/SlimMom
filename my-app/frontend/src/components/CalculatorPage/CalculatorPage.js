// Renumește constanta care reprezintă stilurile din CalculatorPage.styled.js
import React from "react";
import {
  CalculatorPageWrapper,
  MainContent,
  PageTitle,
} from "./CalculatorPage.styled";
import CalculatorCalorieForm from "./CalculatorCalorieForm";

// Componenta CalculatorPage
const CalculatorPageComponent = () => {
  return (
    <CalculatorPageWrapper>
      <MainContent>
        <PageTitle>Calorie Calculator</PageTitle>
        <CalculatorCalorieForm />
      </MainContent>
    </CalculatorPageWrapper>
  );
};

export default CalculatorPageComponent;
