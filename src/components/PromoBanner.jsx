import { useState, useEffect } from 'react';

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 година в секундах

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Важливо очистити інтервал!
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="promo-banner">
      <h3>🔥 АКЦІЯ! Знижка -20% на всі гальмівні колодки!</h3>
      <p>До кінця акції: <span className="timer">{formatTime(timeLeft)}</span></p>
    </div>
  );
}