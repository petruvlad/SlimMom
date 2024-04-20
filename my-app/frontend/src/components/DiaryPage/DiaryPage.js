import React from "react";
import {DiaryPageWrapper, PageTitle, MainContent} from "./DiaryPage.styled"
import RightSideBar from "./RightSideBar";
const DiaryPage = () => {
  return (
    <DiaryPageWrapper>
      <MainContent>
        <PageTitle>Diary Page</PageTitle>
        {/* Aici puteți adăuga conținutul specific paginii jurnalului */}
      </MainContent>
      <RightSideBar />
    </DiaryPageWrapper>
  );
};

export default DiaryPage;