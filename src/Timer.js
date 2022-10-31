import React from "react";
import "./styles/Timer.css";

export default function Timer() {
  const [timer, setTimer] = React.useState({ min: 0, sec: 0 });
  const [isStarted, setStart] = React.useState(false);

  // useEffect will start or stop the timer based on the isStarted state
  React.useEffect(() => {
    let interval;

    if (isStarted) {
      interval = setInterval(() => {
        setTimer((prevValue) => {
          if (prevValue.sec > 58) {
            return { min: prevValue.min + 1, sec: 0 };
          } else {
            return { ...prevValue, sec: prevValue.sec + 1 };
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStarted]);

  function start() {
    setStart(true);
  }

  function stop() {
    setStart(false);
  }

  function reset() {
    setStart(false);
    setTimer({ min: 0, sec: 0 });
  }

  return (
    <div>
      <h1>2. Create a Basic Timer</h1>
      <span>{timer.min} mins </span>
      <span>{timer.sec} secs</span>
      <div>
        {/* Disable the button when the timer is started */}
        <button onClick={start} className="button green" disabled={isStarted}>
          Start
        </button>
        <button onClick={stop} className="button red">
          Stop
        </button>
        <button
          onClick={reset}
          className="button yellow"
          // disables the reset button when the min and sec is 0
          disabled={timer.min === 0 && timer.sec === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
