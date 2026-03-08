import { Container, Typography } from "@mui/material";
import { useState } from "react";

import SlipperyButton from "../components/SlipperyButton";
import Toast from "../components/Toast";
import { runCaughtSequence } from "../utils/runCaughtSequence";
import HackScreen from "./HackScreen";


export default function Home() {

  const [toast, setToast] = useState<string | null>(null);
  const [mode, setMode] = useState<"home" | "hack">("home");
  const [isSaveButtonVisible, setVisibility] = useState<boolean>(false);
  const [timeoutIDs, setTimeoutIDs] = useState<number[]>([]);

  const startCaughtSequence = () => {
    setVisibility(true);
    runCaughtSequence({
      setToast,
      countdownSeconds: 10,
      setTimeoutIds: setTimeoutIDs,
      onDone: () => {
        setMode("hack");
        // “new page” feel without router:
        window.history.pushState({}, "", "#/system-recovery");
      },
    });
  };

  const saveMyComputer = () => {
    setToast("SAVED");
    timeoutIDs.forEach(timeout => clearTimeout(timeout));
  }

  if (mode === "hack") return <HackScreen />;

  return (
    <>
      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Typography variant="h1">⚠️</Typography>

        <SlipperyButton
          label="Don't Press Me"
          difficulty={1.4}
          onCaught={startCaughtSequence}
        />

        {isSaveButtonVisible && <SlipperyButton
          label="Make It Worse"
          difficulty={5}
          onCaught={saveMyComputer}
          preventEnterClick
        />}

      </Container>

      <Toast message={toast} />
    </>
  );
}
