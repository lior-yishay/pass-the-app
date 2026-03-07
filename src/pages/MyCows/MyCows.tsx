import { Container } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxHooks";
import Navbar from "../../components/Navbar";
import Shop from "../../components/Shop";

export const MyCows = () => {
  const ownedCows = useAppSelector((state) => state.persistedReducer.cows.ownedCows);

  return (
    <>
      <Navbar />

      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Shop cows={ownedCows} showActions={false}/>
      </Container>
    </>
  );
};

export default MyCows;
