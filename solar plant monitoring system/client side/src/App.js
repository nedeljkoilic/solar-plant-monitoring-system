import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
/*import Login from "./components/Login";
import ResetPass from "./components/ResetPass";*/
import Dashboard from "./components/Dashboard";
import CurentState from "./components/CurrentState";
import Graphics from "./components/Graphics";
import Actions from "./components/Actions";
function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Login />} />
      <Route path="resetPassword" element={<ResetPass />} />*/}
      <Route path="/" element={<Dashboard />}>
      <Route path="home" element={<CurentState />} />
      <Route path="graph" element={<Graphics />} />
      <Route path="actions" element={<Actions />} />  
      </Route>
    </Routes>
  );
}
export default App;
