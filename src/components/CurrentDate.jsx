import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [time, setTime] = useState(() => new Date().toUTCString()); // Initialize with current UTC time

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <p className="text-xs">
      {time}
    </p>
  );
};

export default CurrentDate;
