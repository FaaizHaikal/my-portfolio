import { useEffect, useState } from 'react';
import './TypingTexts.css';

interface TypingTextsProps {
  texts: string[];
  speed: number;
  backSpeed: number;
}

function TypingTexts({ texts, speed, backSpeed }: TypingTextsProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? backSpeed : speed;

    const handleTyping = () => {
      const currentText = texts[index];
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentText.substring(0, prev.length - 1);
        } else {
          return currentText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayText, isDeleting, index, texts, speed, backSpeed]);

  return (
    <>
      {displayText}
      <span className="placeholder"></span>
    </>
  );
}

export default TypingTexts;
