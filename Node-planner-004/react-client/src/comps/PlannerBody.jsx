import PlannerContent from "./PlannerContent";
import PlannerDateList from "./PlannerDateList";

const PlannerBody = (props) => {
  return (
    <div className="appBody">
      <PlannerDateList />
      <PlannerContent />
    </div>
  );
};
export default PlannerBody;
