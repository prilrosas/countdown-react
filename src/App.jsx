import { Outlet } from "react-router-dom";

import CountDown from "./assets/countdown1.jpg";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${CountDown})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
