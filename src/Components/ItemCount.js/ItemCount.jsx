import { useState } from "react";
import "./ItemCount.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ props }) => {
  const [cantidad, setCantidad] = useState(0);

  const aumentar = () => {
    if (cantidad < props.stock) {
      setCantidad(cantidad + 1);
    }
  };
  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const { addItem, isInCart } = useContext(CartContext);
  const handleOnAdd = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      pictureUrl: props.pictureUrl,
    };

    addItem(item, cantidad);
  };

  return (
    <div>
      {!isInCart(props.id) ? (
        <div style={{ display: "flex", gap: 15 }}>
          <div>
            <button className="disminuir" onClick={disminuir}>
              -
            </button>
            <span className="quantity">{cantidad}</span>
            <button className="aumentar" onClick={aumentar}>
              +
            </button>
          </div>
          <button
            className="addButton"
            style={{
              color: `${!props.stock || cantidad ? "white" : "grey"}`,
              backgroundColor: `${!props.stock || cantidad ? "#FF3333" : ""}`,
            }}
            onClick={handleOnAdd}
            disabled={!props.stock || cantidad === 0}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: 5 }}>
          <Link className="linkButton" to="/shop">
            See more products
          </Link>
          <Link to="/cart" className="linkButton">
            Finish buying
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
