import { Link } from "react-router-dom";

export default function ItemCard({ item, isFavourite, onToggleFavourite, onAdd }) {
  return (
    <article className="card">
      <button
        type="button"
        className={`fav-btn ${isFavourite ? "active" : ""}`}
        onClick={() => onToggleFavourite(item.id)}
        aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
      >
        {isFavourite ? "♥" : "♡"}
      </button>

      <Link to={`/item/${item.id}`} className="card-link">
        <img src={item.image} alt={item.name} className="card-img" />
        <h3>{item.name}</h3>
        <p className="category-tag">{item.category}</p>
      </Link>

      <div className="card-footer">
        <span className="price">Rs. {item.price}</span>
        <button type="button" className="btn" onClick={() => onAdd(item)}>
          Add
        </button>
      </div>
    </article>
  );
}