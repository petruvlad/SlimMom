import styled from "styled-components";

// Definim stilurile folosind styled-components
export const CalculatorCalorieFormContainer = styled.div`
  .calculator-calorie-form {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .calculator-calorie-form h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .calculator-calorie-form .form-group {
    margin-bottom: 15px;
  }

  .calculator-calorie-form label {
    display: block;
    margin-bottom: 5px;
  }

  .calculator-calorie-form input,
  .calculator-calorie-form select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .calculator-calorie-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .calculator-calorie-form button:hover {
    background-color: #0056b3;
  }
`;
