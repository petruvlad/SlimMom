import React from "react";
import { LoaderContainer, LoaderElement } from "./Loader"; // Asigură-te că calea către fișierul Loader.js este corectă

const MyComponent = () => {
  return (
    <LoaderContainer>
      <LoaderElement />
    </LoaderContainer>
  );
};

export default MyComponent;
