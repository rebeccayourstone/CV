import Clock from "./Clock";
import "./ClockApp.css";
// get hook useState
import { useEffect, useState } from "react";

function ClockApp() {
  // creates const time and the function setTime to update time ands sets it to the value of the new Date object
  const [time, setTime] = useState(new Date());
  // sets a timer to tick every second. Uses the setTime function to set state and New Date returns updated time.

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <>
      <div className="clock-div">
        {/* render Clock-component and sedn time as its prop */}
        <Clock time={time} />
      </div>
    </>
  );
}

export default ClockApp;
