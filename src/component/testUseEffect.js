import React, { useState, useEffect } from "react";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
        setValue((value) => value + 1);
    }, intervalValue)
  }, [intervalValue])

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
}

export default function Component() {
  const [intervalValue, setIntervalValue] = useState();
  handleIntervalClick = (ms) => {
    setIntervalValue(ms)
  }
  return (
    <div className="container">
      <Timer intervalValue={intervalValue}></Timer>
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>100ms</Button>
      <Button variant="primary" onClick={() => handleIntervalClick(500)}>500ms</Button>
      <Button variant="primary" onClick={() => handleIntervalClick(1000)}>1s</Button>
    </div>
  );
}
