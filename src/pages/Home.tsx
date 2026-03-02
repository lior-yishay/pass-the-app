import { Button, Container, Typography } from "@mui/material";
import SlipperyButton from "../components/SlipperyButton";

// keep your existing redux imports as-is
// import { useAppDispatch, useAppSelector } from "...";
// import { increment } from "...";

export default function Home() {
  // const dispatch = useAppDispatch();
  // const value = useAppSelector(...);

  return (
    <>
      <SlipperyButton label="Catch me!" onCaught={() => alert("Caught!")} />

      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Typography variant="h3">🚀</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Counter: 0
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Increment
        </Button>
      </Container>
    </>
  );
}
