import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      <p>Digital Clock</p>
      <div className="time-border">
        <span>{currentTime}</span>
      </div>
    </div>
  );
}
