import styled from "styled-components";

// Stilizarea containerului pentru lista de produse din jurnal
export const ProductsListWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Stilizarea titlului listei de produse
export const ListTitle = styled.h3`
  margin-top: 0;
`;

// Stilizarea listei de produse
export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Stilizarea fiecărui produs din listă
export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

// Stilizarea butonului de ștergere a produsului
export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
