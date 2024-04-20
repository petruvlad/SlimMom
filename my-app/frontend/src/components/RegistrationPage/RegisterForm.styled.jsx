import styled from "styled-components";

// Stilizarea containerului pentru formularul de înregistrare
export const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

// Stilizarea titlului formularului
export const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;

// Stilizarea câmpurilor de input
 export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Stilizarea butonului de submit
 export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
