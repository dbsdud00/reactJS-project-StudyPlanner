import "./css/App.css";
import PlannerMain from "./comps/PlannerMain";
import { PLContextProvider } from "./provider/PlannerProvider";

function App() {
  return (
    <div className="App">
      <PLContextProvider>
        <PlannerMain />
      </PLContextProvider>
    </div>
  );
}

export default App;
