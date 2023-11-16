import "./App.css";
import Table from "./components/streamersTable";
import { StreamersData } from "./data/StreamersData";

function App() {
  return (
    <div className="main-wrapper">
      <Table data={StreamersData} />
    </div>
  );
}

export default App;
 