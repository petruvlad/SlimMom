// DiaryContent.js
import React from "react";
import DiaryDateCalendar from "./DiaryCalendar";

import DailyCaloriesForm from "./DiaryCaloriesForm";
import RightSideBar from "../RightSideBar";

function DiaryContent() {
  return (
    <div className="diary-content">
      <div className="left-column">
        <DiaryDateCalendar />
        <DailyCaloriesForm />
      </div>
      <div className="right-column">
        
        <RightSideBar />
      </div>
    </div>
  );
}

export default DiaryContent;
