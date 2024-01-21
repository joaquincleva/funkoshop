import iconoCarrito from "./iconoCarrito.png";
import { Badge } from "react-bootstrap";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link
      title="Go to the cart"
      to="/cart"
      variant="outline-secodnary"
      className="carrito"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img src={iconoCarrito} width={30} alt="Cart Widget" href="#" />
      <Badge className="notification" bg="danger">
        {totalQuantity}
      </Badge>
    </Link>
  );
};

export default CartWidget;
