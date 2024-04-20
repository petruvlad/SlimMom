
import styled from "styled-components";
// Stilizarea containerului pentru calendarul datelor din jurnal
 export const CalendarWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Stilizarea titlului calendarului
export const CalendarTitle = styled.h3`
  margin-top: 0;
`;

// Stilizarea listei de date din calendar
export const DateList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Stilizarea fiecărei date din calendar
export const DateItem = styled.li`
  margin-bottom: 10px;
`;
