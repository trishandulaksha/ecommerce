import { useEffect, useState } from "react";
import  "./DealsSection.css";

type CountdownProps = {
  targetTime: Date;
}
  
const Timecountdown = ( {targetTime}:CountdownProps) => {
   

  const calculateRemaining = (targetTime: Date) => {
    const now = new Date().getTime();
    const timeDiff = targetTime.getTime() - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };
    
  const [timeRemaining, setTimeRemaining] = useState(calculateRemaining(targetTime));

  useEffect(() => {

   

    const intervalId = setInterval(() => {
      setTimeRemaining(calculateRemaining(targetTime));
    }, 1000);


    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="countdownTime">
      <div className="day">
        <span>{timeRemaining.days.toString().padStart(2, '0')}</span>
        <p>Days</p>
      </div>
      <div className="hour">
        <span>{timeRemaining.hours.toString().padStart(2, '0')}</span>
        <p>Hr</p>
      </div>
      <div className="mins">
        <span>{timeRemaining.minutes.toString().padStart(2, '0')}</span>
        <p>Mins</p>
      </div>
      <div className="second">
        <span>{timeRemaining.seconds.toString().padStart(2, '0')}</span>
        <p>Sec</p>
      </div>
    </div>
  ) 
};

export default Timecountdown;