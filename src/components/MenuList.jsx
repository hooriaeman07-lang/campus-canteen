import ItemCard from "./ItemCard.jsx";

export default function MenuList({ items, favourites, onToggleFavourite, onAdd }) {
  if (items.length === 0) {
    return <p className="state-msg">No items found.</p>;
  }

  return (
    <section className="menu-grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
}