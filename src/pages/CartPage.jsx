import Cart from "../components/Cart.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
  const { cart, cartTotal, addToCart, decreaseQty, removeFromCart, clearCart } =
    useCart();

  return (
    <>
      <h1>Your Cart</h1>
      <Cart
        cart={cart}
        total={cartTotal}
        onAdd={addToCart}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </>
  );
}