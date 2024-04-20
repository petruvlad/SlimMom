import React, { useState } from "react";
import {
  AddProductFormWrapper,
  FormTitle,
  Input,
  SubmitButton,
} from "./DiaryAddProductForm.styled";

const DiaryAddProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ product, calories });
    setProduct("");
    setCalories("");
  };

  return (
    <AddProductFormWrapper onSubmit={handleSubmit}>
      <FormTitle>Add Product</FormTitle>
      <Input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </AddProductFormWrapper>
  );
};

export default DiaryAddProductForm;
