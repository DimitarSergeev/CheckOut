import "./App.css";

import { Route,Routes } from "react-router-dom";
// import { CheckOut } from "./components/CheckOut/CheckOut";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
