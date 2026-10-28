import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ItemDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItem() {
      try {
        const res = await fetch("/menu.json");
        if (!res.ok) throw new Error("Failed to load menu");
        const data = await res.json();
        const found = data.items.find((i) => String(i.id) === id);
        if (!found) throw new Error("Item not found");
        setItem(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadItem();
  }, [id]);

  if (loading) return <p className="state-msg">Loading item...</p>;
  if (error) return <p className="state-msg error">Error: {error}</p>;

  return (
    <article className="details">
      <Link to="/" className="back">
        ← Back to menu
      </Link>
      <div className="details-body">
        <img src={item.image} alt={item.name} className="details-img" />
        <div>
          <h1>{item.name}</h1>
          <p className="category-tag">{item.category}</p>
          <p>{item.description}</p>
          <p>Calories: {item.calories} kcal</p>
          <p className="price">Rs. {item.price}</p>
          <button type="button" className="btn" onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}