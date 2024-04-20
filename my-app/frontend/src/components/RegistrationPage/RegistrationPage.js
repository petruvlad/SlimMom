import React, { useState } from "react";
import { RegistrationPageWrapper, PageTitle } from "./RegistrationPage.styled";
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = ({ onRegister }) => {
  // eslint-disable-next-line no-unused-vars
  const [registrationData, setRegistrationData] = useState({});

  const handleRegister = (data) => {
    // Trimitem datele de înregistrare către componenta părinte
    onRegister(data);
  };

  return (
    <RegistrationPageWrapper>
      <PageTitle>Register</PageTitle>
      <RegistrationForm onRegister={handleRegister} />
    </RegistrationPageWrapper>
  );
};

export default RegistrationPage;


