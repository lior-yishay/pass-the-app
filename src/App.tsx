import React, { useState, useEffect, useRef } from "react";

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCountdown = () => {
    setTimeLeft(10);
    setIsCounting(true);
  };

  useEffect(() => {
    if (isCounting && timeLeft !== null && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    }
    if (timeLeft === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsCounting(false);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCounting, timeLeft]);

  return (
    <div style={styles.container}>
      {!isCounting && timeLeft === null ? (
        <button style={styles.button} onClick={startCountdown}>
          Start Scary Countdown
        </button>
      ) : (
        <div style={styles.timer}>
          {timeLeft !== null ? timeLeft.toString().padStart(2, "0") : ""}
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button: {
    padding: "20px 40px",
    fontSize: "24px",
    backgroundColor: "darkred",
    color: "white",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 30px 10px #ff0000aa, 0 0 10px 2px #fff2 inset",
    letterSpacing: "2px",
    borderRadius: "12px",
    transition: "transform 0.1s",
    fontWeight: "bold",
    textTransform: "uppercase",
    animation: "shake 0.5s infinite alternate",
  },
  timer: {
    fontSize: "100px",
    color: "red",
    fontFamily: "monospace",
    textShadow: "0 0 20px red",
    animation: "scary-blink 0.7s steps(1) infinite alternate",
  },
};

const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes scary-blink {
  0% { color: #ff0000; text-shadow: 0 0 20px #ff0000, 0 0 40px #fff; }
  100% { color: #fff; text-shadow: 0 0 40px #ff0000, 0 0 80px #fff; }
}
@keyframes shake {
  0% { transform: translate(0, 0); }
  100% { transform: translate(2px, -2px); }
}`;
document.head.appendChild(styleSheet);

export default App;