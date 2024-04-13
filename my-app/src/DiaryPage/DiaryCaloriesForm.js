import React, { useState } from "react";
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from "./DailyCaloriesForm.styled";

function DailyCaloriesForm() {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    bloodType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Age:
        <FormInput
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Height:
        <FormInput
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Weight:
        <FormInput
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Blood Type:
        <FormInput
          type="text"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        />
      </FormLabel>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
}

export default DailyCaloriesForm;
