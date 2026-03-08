import React, { useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  onCaught?: () => void;
  difficulty?: number;
  preventEnterClick?: boolean
};

export default function SlipperyButton({
  label,
  onCaught,
  difficulty = 1,
  preventEnterClick = false

}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [caughtOnce, setCaughtOnce] = useState(false);

  // Start in the middle so you ALWAYS see it
  const [pos, setPos] = useState(() => ({
    x: Math.max(20, window.innerWidth / 2 - 70),
    y: Math.max(20, window.innerHeight / 2 - 20),
  }));

  // Keep it inside the viewport if screen resizes
  useEffect(() => {
    const clampIntoView = () => {
      const btn = ref.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const padding = 10;

      const maxX = window.innerWidth - rect.width - padding;
      const maxY = window.innerHeight - rect.height - padding;

      setPos((p) => ({
        x: Math.min(Math.max(padding, p.x), maxX),
        y: Math.min(Math.max(padding, p.y), maxY),
      }));
    };

    window.addEventListener("resize", clampIntoView);
    return () => window.removeEventListener("resize", clampIntoView);
  }, []);

  const escape = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = cx - e.clientX;
    const dy = cy - e.clientY;

    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const push = (220 * difficulty) / Math.max(0.6, dist / 60);

    let nx = pos.x + (dx / dist) * push;
    let ny = pos.y + (dy / dist) * push;

    const padding = 10;
    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    nx = Math.min(Math.max(padding, nx), maxX);
    ny = Math.min(Math.max(padding, ny), maxY);

    setPos({ x: nx, y: ny });
  };

  const onClick = (e: React.MouseEvent) => {
    // ✅ First click always “catches” it
    if (!caughtOnce) {
      setCaughtOnce(true);
      onCaught?.();
      return;
    }

    // After the first catch, keep trolling
    escape(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        padding: "12px 18px",
        borderRadius: 12,
        border: "1px solid #ccc",
        cursor: "pointer",
        transition: "transform 60ms linear",
        boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
        zIndex: 99999, // 👈 force on top
        opacity: 1,
      }}
      onMouseMove={escape}
      onMouseEnter={escape}
      onMouseDown={escape}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && preventEnterClick && e.preventDefault()}
    >
      {label}
    </button>
  );
}
