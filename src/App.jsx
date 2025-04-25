import { Outlet } from "react-router-dom";

import { useContext } from "react";

import { CountdownContext } from "./context/CountdownContext";

import CountDown from "./assets/countdown1.jpg";

import "./App.css";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="App"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${CountDown})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
