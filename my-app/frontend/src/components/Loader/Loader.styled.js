import styled, { keyframes } from "styled-components";

// Definirea animației pentru rotirea loader-ului
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Stilizarea containerului pentru loader
export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* pentru a asigura că loader-ul este întotdeauna deasupra celorlalte elemente */
`;

// Stilizarea loader-ului în sine
export const LoaderElement = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 2s linear infinite; /* Aplicarea animației */
`;
