import "../css/Planner.css";
import PlannerBody from "./PlannerBody";
import PlannerHeader from "./PlannerHeader";
import PlannerNav from "./PlannerNav";
import { PlannerDto } from "../data/PlannerDto";
import { useState, useEffect } from "react";

const PlannerMain = () => {
  return (
    <>
      <PlannerNav />
      <PlannerHeader />
      <PlannerBody />
    </>
  );
};
export default PlannerMain;
