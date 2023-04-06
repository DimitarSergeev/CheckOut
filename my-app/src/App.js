import "./App.css";

import { Route,Routes } from "react-router-dom";
// import { CheckOut } from "./components/CheckOut/CheckOut";
import CheckOut from "./components/CheckOut/CheckOut";
import { ConfirmEmail } from "./components/CheckOut/ConfirmEmail/ConfirmEmail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CheckOut />} />
        <Route path="/confirm/email" element={<ConfirmEmail/>} />
      </Routes>
    </div>
  );
}

export default App;
