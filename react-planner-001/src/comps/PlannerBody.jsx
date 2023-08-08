import PlannerContent from "./PlannerContent";
import PlannerDateList from "./PlannerDateList";
import { useState } from "react";

const PlannerBody = (props) => {
  const { dateList } = props;

  return (
    <div className="appBody">
      <PlannerDateList dateList={dateList} />
      <PlannerContent />
    </div>
  );
};
export default PlannerBody;
