import React from "react";
import { RightSideBarWrapper } from "./RightSideBar.styled";
import DiaryDateCalendar from "./DiaryDateCalendar";
import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";

const RightSideBar = () => {
  return (
    <RightSideBarWrapper>
      {/* Componentele incluse în bara laterală dreaptă */}
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </RightSideBarWrapper>
  );
};

export default RightSideBar;