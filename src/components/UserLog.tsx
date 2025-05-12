import { useEffect, useState } from 'react';
import './UserLog.css';

interface UserLogProps {
  message: string;
  duration?: number;
  clearLog: () => void;
}

function UserLog({ message, duration = 1, clearLog }: UserLogProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        clearLog();
      }, duration * 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setVisible(false);
    }
  }, [message, duration, clearLog, visible]);

  return (
    <div className={`container ${visible ? 'visible' : ''}`}>
      <p>{message}</p>
    </div>
  );
}

export default UserLog;
