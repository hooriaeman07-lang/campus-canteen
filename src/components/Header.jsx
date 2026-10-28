import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">
        🍽️ Campus Canteen
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Menu
        </NavLink>
        <NavLink to="/cart">
          Cart <span className="badge">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}
