import { Container } from "@mui/material";
import "./Home.css";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import { specialHerd } from "../proxyServer/Data";
import { Cow } from "../shared/types";
import { useAppSelector } from "../hooks/reduxHooks";

export default function Home() {
  const ownedCows: Cow[] = useAppSelector(
    (state) => state.persistedReducer.cows.ownedCows,
  );

  const rentedCows: Cow[] = useAppSelector(
    (state) => state.persistedReducer.cows.rentedCows,
  );

  const availableCows: Cow[] = specialHerd.filter((cow) => {
    return (
      !ownedCows.find((ownedCow) => ownedCow.name === cow.name) &&
      !rentedCows.find((rentedCow) => rentedCow.name === cow.name)
    );
  });

  return (
    <>
      <Navbar />
      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Shop cows={availableCows}></Shop>
      </Container>
    </>
  );
}
