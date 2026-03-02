import React from "react";

type ToastProps = {
  message: string | null;
};

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        padding: "12px 16px",
        borderRadius: 12,
        zIndex: 100000,
        fontFamily: "system-ui, Arial, sans-serif",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        letterSpacing: 0.2,
      }}
    >
      {message}
    </div>
  );
}
