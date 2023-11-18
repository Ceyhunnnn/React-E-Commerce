import React from "react";
import DateTimeDisplay from "./../components/DateTimeDisplay/DateTimeDisplay";
import { useCountdown } from "./../hooks/useCountdown";
import { TwoDot } from "components/Icons/Icons";

const ExpiredNotice = () => {
  return (
    <div>
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <TwoDot />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <TwoDot />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <TwoDot />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
