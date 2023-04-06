import "./App.css";

import { Route,Routes } from "react-router-dom";
// import { CheckOut } from "./components/CheckOut/CheckOut";
import CheckOut from "./components/CheckOut/CheckOut";
import { ConfirmEmail } from "./components/Emet/ConfirmEmail";
import { ConfirmEmailPizza } from "./components/CheckOut/ConfirmEmail/ConfirmEmailPizza";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CheckOut />} />
        <Route path="/emet/confirm/email" element={<ConfirmEmail />} />
        <Route path="/confirm/email" element={<ConfirmEmailPizza />} />
      </Routes>
    </div>
  );
}

export default App;
