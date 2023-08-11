import { useState, useEffect } from "react";
import { usePLContext } from "../provider/PlannerProvider";

const PlannerDateList = () => {
  // const { dateList } = props;
  const { dateList, callTodoList } = usePLContext();
  const dateClick = async (e) => {
    callTodoList(e);
  };
  const printDateList = dateList.map((item) => {
    return (
      <li key={item.dt_seq} data-seq={item.dt_seq}>
        {item.dt_date}
      </li>
    );
  });
  return (
    <div className="appBodyLeft">
      <ul className="studyDateList" onClick={dateClick}>
        {printDateList}
      </ul>
    </div>
  );
};
export default PlannerDateList;
