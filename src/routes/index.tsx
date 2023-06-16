import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";

const RoutesList: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
);

export default RoutesList;
