import { useState, useEffect } from "react";
import { getDateList } from "../modules/FetchModule";
import { usePLContext } from "../provider/PlannerProvider";

const PlannerDateList = () => {
  // const { dateList } = props;
  const { dateList } = usePLContext();
  const printDateList = dateList.map((item) => {
    return <li>{item.td_date}</li>;
  });
  return (
    <div className="appBodyLeft">
      <ul className="studyDateList">{printDateList}</ul>
    </div>
  );
};
export default PlannerDateList;
