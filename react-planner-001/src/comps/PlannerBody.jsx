import PlannerContent from "./PlannerContent";
import PlannerDateList from "./PlannerDateList";

const PlannerBody = () => {
  return (
    <div className="appBody">
      <PlannerDateList />
      <PlannerContent />
    </div>
  );
};
export default PlannerBody;
