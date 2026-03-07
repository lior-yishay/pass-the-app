import { Container } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxHooks";
import Navbar from "../../components/Navbar";
import Shop from "../../components/Shop";
import { FC } from "react";

export const RentedCows: FC = () => {
  const rentedCows = useAppSelector((state) => state.persistedReducer.cows.rentedCows);

  return (
    <>
      <Navbar />

      <Container style={{ textAlign: "center", marginTop: "20vh" }}>
        <Shop cows={rentedCows} showActions={false}/>
      </Container>
    </>
  );
};

export default RentedCows;
