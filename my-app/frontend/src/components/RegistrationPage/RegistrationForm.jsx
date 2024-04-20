import React, { useState } from "react";
import {
  RegistrationFormWrapper, FormTitle, Input, SubmitButton
} from "./RegisterForm.styled";
const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trimitem datele de înregistrare către componenta părinte
    onRegister(formData);
  };

  return (
    <RegistrationFormWrapper onSubmit={handleSubmit}>
      <FormTitle>Registration Form</FormTitle>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <SubmitButton type="submit">Register</SubmitButton>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
