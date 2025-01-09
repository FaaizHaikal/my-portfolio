import { useEffect, useState } from 'react';
import './UserLog.css';

interface UserLogProps {
  message: string;
  duration: number;
  clearLog: () => void;
}

function UserLog({message, duration = 3, clearLog}: UserLogProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message && !visible) {
      setVisible(true);
      
      const timer = setTimeout(() => {
        setVisible(false);
        clearLog();
      }, duration * 1000);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div className={`container ${visible ? 'visible' : ''}`}>
      <p>{message}</p>
    </div>
  )
};

export default UserLog;
