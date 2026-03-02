import React, { useEffect, useMemo, useRef, useState } from "react";

type Popup = {
  id: number;
  x: number;
  y: number;
  r: number;
  s: number;
};

function playWindowsErrorSequence(totalSounds: number, spacingMs = 120) {
  const audio = new Audio("error.mp3");
  audio.volume = 0.7;

  let played = 0;
  const interval = window.setInterval(() => {
    const clone = audio.cloneNode(true) as HTMLAudioElement;
    clone.play().catch(() => {});

    played += 1;
    if (played >= totalSounds) {
      window.clearInterval(interval);
    }
  }, spacingMs);
}

export default function HackScreen() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [popups, setPopups] = useState<Popup[]>([]);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const ranRef = useRef(false);

  const script = useMemo(
    () =>
      [
        "[BOOT] initializing system recovery…",
        "[OK]   loading modules ██████████ 100%",
        "[WARN] unusual activity detected",
        "[OK]   establishing secure tunnel…",
        "[OK]   syncing packets…",
        "[INFO] running diagnostics",
        "[INFO] scanning directories…",
        "[INFO] indexing files…",
        "[INFO] rewriting permissions…",
        "[OK]   operation complete ✅",
        "",
        "hint: you should have used a different branch 😈",

        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGA NIG NIGGERRRRRRRRRRRR",
        "NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "       NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "              NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "                     NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "              NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "       NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        "NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
      ].join("\n"),
    [],
  );

  useEffect(() => {
    let i = 0;
    const speed = 14;

    const t = window.setInterval(() => {
      i += 1;
      setText(script.slice(0, i));
      if (i >= script.length) {
        window.clearInterval(t);
        setDone(true);
      }
    }, speed);

    return () => window.clearInterval(t);
  }, [script]);

  useEffect(() => {
    const blink = window.setInterval(() => {
      if (!cursorRef.current) return;
      const el = cursorRef.current;
      el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    }, 450);

    return () => window.clearInterval(blink);
  }, []);

  // When typing finishes: spawn 100 popups + beep
  useEffect(() => {
    if (!done || ranRef.current) return;
    ranRef.current = true;

    const count = 1000;
    playWindowsErrorSequence(50, 120); // spaced crash sounds

    const w = 320; // approx popup width
    const h = 140; // approx popup height
    const pad = 8;

    const maxX = Math.max(pad, window.innerWidth - w - pad);
    const maxY = Math.max(pad, window.innerHeight - h - pad);

    const items: Popup[] = Array.from({ length: count }, (_, idx) => ({
      id: idx,
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
      r: Math.random() * 10 - 5, // small rotation
      s: 0.85 + Math.random() * 0.35, // scale variance
    }));

    // Stagger them in quickly (feels more chaotic)
    let i = 0;
    const interval = window.setInterval(() => {
      i += 5; // add 5 at a time
      setPopups(items.slice(0, Math.min(i, items.length)));
      if (i >= items.length) window.clearInterval(interval);
    }, 35);

    return () => window.clearInterval(interval);
  }, [done]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        color: "#00ff66",
        padding: 24,
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        fontSize: 14,
        lineHeight: 1.5,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
          {text}
          {!done && <span ref={cursorRef}>█</span>}
        </pre>

        {/* Popups */}
        {popups.map((p) => (
          <img
            key={p.id}
            src="error_img.png"
            alt="error"
            draggable={false}
            style={{
              position: "fixed",
              left: p.x,
              top: p.y,
              width: 320,
              height: "auto",
              transform: `rotate(${p.r}deg) scale(${p.s})`,
              zIndex: 999999,
              imageRendering: "auto",
              userSelect: "none",
              pointerEvents: "none",
              filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.6))",
            }}
          />
        ))}
      </div>
    </div>
  );
}
