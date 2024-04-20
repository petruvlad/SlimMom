// DiaryProductsListComponent.js
import React from "react";
import {
  ProductsListWrapper,
  ListTitle,
  ProductList,
  ProductItem,
  DeleteButton,
} from "./DiaryProductsList.styled";

const DiaryProductsListComponent = ({ products, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ProductsListWrapper>
      <ListTitle>Product List</ListTitle>
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index}>
            <span>{product.name}</span>
            <DeleteButton onClick={() => handleDelete(index)}>
              Delete
            </DeleteButton>
          </ProductItem>
        ))}
      </ProductList>
    </ProductsListWrapper>
  );
};

export default DiaryProductsListComponent;
