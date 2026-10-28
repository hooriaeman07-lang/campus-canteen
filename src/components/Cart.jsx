import { Link } from "react-router-dom";

export default function Cart({ cart, total, onAdd, onDecrease, onRemove, onClear }) {
  if (cart.length === 0) {
    return (
      <div className="state-msg">
        <p>Your cart is empty.</p>
        <Link to="/" className="btn">
          Browse menu
        </Link>
      </div>
    );
  }

  return (
    <section className="cart">
      <ul className="cart-list">
        {cart.map((c) => (
          <li key={c.id} className="cart-row">
            <img src={c.image} alt={c.name} className="cart-img" />
            <div className="cart-info">
              <strong>{c.name}</strong>
              <span>Rs. {c.price} each</span>
            </div>
            <div className="qty">
              <button type="button" onClick={() => onDecrease(c.id)}>
                −
              </button>
              <span>{c.qty}</span>
              <button type="button" onClick={() => onAdd(c)}>
                +
              </button>
            </div>
            <span className="line-total">Rs. {c.price * c.qty}</span>
            <button type="button" className="remove" onClick={() => onRemove(c.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p className="total">
          Total: <strong>Rs. {total}</strong>
        </p>
        <button type="button" className="btn btn-outline" onClick={onClear}>
          Clear cart
        </button>
      </div>
    </section>
  );
}