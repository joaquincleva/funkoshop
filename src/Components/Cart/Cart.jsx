import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  return totalQuantity === 0 ? (
    <div className="carritoVacio" style={{ minHeight: "50vh" }}>
      <h1 style={{ color: "darkgray" }}>There are no products in the cart</h1>
      <Link
        to="/"
        className="verProductos"
        style={{ padding: "5px", backgroundColor: "#FF3333", color: "white" }}
      >
        See products
      </Link>
    </div>
  ) : (
    <div className="cart" style={{ minHeight: "63vh" }}>
      <div className="cartItemCart">
        {cart.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </div>
      <h3
        className="total"
        style={{ backgroundColor: "white", color: "black" }}
      >
        Total: ${total}
      </h3>
      <div className="footer">
        <button
          onClick={() => clearCart()}
          className="clearCart"
          title="Remove products from cart"
        >
          Empty Cart
        </button>
        <Link to="/checkout" className="checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
