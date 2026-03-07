import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyCows from "./pages/MyCows/MyCows";
import RentedCows from "./pages/RentedCows/RentedCows";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/my-cows" element={<MyCows />} />
        <Route path="/rentals" element={<RentedCows />} />
        <Route path="/profile" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
