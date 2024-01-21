import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="cartItem">
      <Link
        to={`/item/${item.id}`}
        className="linkProducto"
        title="See the product"
      >
        <img
          src={item.pictureUrl[0]}
          height={"75"}
          alt={item.title}
          title={item.title}
        />
      </Link>
      <p className="cartItem__Item">{item.title}</p>
      <p className="cartItem__Item">
        ${item.price} {"\u00D7"} {item.quantity} = ${item.price * item.quantity}
      </p>
      <button
        onClick={() => removeItem(item.id)}
        className="removeItem"
        title="Remove product from the cart"
      >
        {"\u00D7"}
      </button>
    </div>
  );
};

export default CartItem;
