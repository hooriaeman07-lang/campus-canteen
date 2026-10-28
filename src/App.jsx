import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Menu from "./pages/Menu.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}