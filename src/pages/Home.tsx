import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";

import SlipperyButton from "../components/SlipperyButton";
import Toast from "../components/Toast";
import HackScreen from "./HackScreen";
import { runCaughtSequence } from "../utils/runCaughtSequence";

// keep your existing redux imports if you use them
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { increment } from "../store/counterSlice";

export default function Home() {
  // const dispatch = useAppDispatch();
  // const value = useAppSelector((s) => s.counter.value);

  const [toast, setToast] = useState<string | null>(null);
  const [mode, setMode] = useState<"home" | "hack">("home");

  const startCaughtSequence = () => {
    runCaughtSequence({
      setToast,
      onDone: () => {
        setMode("hack");
        // “new page” feel without router:
        window.history.pushState({}, "", "#/system-recovery");
      },
    });
  };

  if (mode === "hack") return <HackScreen />;

  return (
    <>
      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Typography variant="h3">🚀</Typography>

        <Typography variant="h5" sx={{ mt: 2 }}>
          Counter: 0{/* Counter: {value} */}
        </Typography>

        <SlipperyButton
          label="Increment"
          difficulty={1.4}
          onCaught={startCaughtSequence}
        />
      </Container>

      <Toast message={toast} />
    </>
  );
}
