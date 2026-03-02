import { Button, Typography, Container } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { increment } from "../store/exampleSlice";
import { reset } from "../store/corruptionSlice";
import { CORRUPTION_MAX_VALUE } from "../shared/consts";

export default function Home() {
  const corruptionValue = useAppSelector((state) => state.corruption.value);
  const dispatch = useAppDispatch();

  return (
    <Container style={{ textAlign: "center", marginTop: "20vh" }}>
      {corruptionValue === CORRUPTION_MAX_VALUE ? (
        <>
          <Typography variant="h1">👽</Typography>
          <Typography
            variant="h1"
            sx={{ mt: 2, color: "white", fontWeight: "bold" }}
          >
            HACKED! CORRUPTION VALUE AT {CORRUPTION_MAX_VALUE}%
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h3">👽</Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, color: "white", fontWeight: "bold" }}
          >
            Corruption: {corruptionValue}%
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, color: "white", fontWeight: "bold" }}
          >
            Click anywhere to corrupt
          </Typography>
        </>
      )}
      <Button
        variant="contained"
        sx={{
          mt: 3,
          color: "white",
          backgroundColor: "maroon",
          fontWeight: "bold",
        }}
        onClick={() => dispatch(reset())}
      >
        Reset
      </Button>
    </Container>
  );
}
