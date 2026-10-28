import { useEffect, useState } from "react";
import MenuList from "../components/MenuList.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favourites, setFavourites] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch("/menu.json");
        if (!res.ok) throw new Error("Failed to load menu");
        const data = await res.json();
        setItems(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  const toggleFavourite = (id) =>
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const categories = ["All", ...new Set(items.map((i) => i.category))];

  const visible = items.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || i.category === category)
  );

  if (loading) return <p className="state-msg">Loading menu...</p>;
  if (error) return <p className="state-msg error">Error: {error}</p>;

  return (
    <>
      <h1>Today's Menu</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <MenuList
        items={visible}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
        onAdd={addToCart}
      />
    </>
  );
}