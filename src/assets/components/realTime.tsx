import { useState, useEffect } from 'react';

const RealTimeClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = (): void => {
    // Update the time every second
    setTime(new Date());
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return (
    <h2>{formatTime(time)}</h2>
  );
};

export default RealTimeClock;