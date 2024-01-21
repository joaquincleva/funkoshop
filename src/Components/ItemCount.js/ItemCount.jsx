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
            <button
              style={{
                padding: "6px",
                paddingLeft: "14px",
                paddingRight: "14px",
                backgroundColor: "#4F4F4F",
                color: "white",
                border: "none",
                fontWeight: "600",
              }}
              onClick={disminuir}
            >
              -
            </button>
            <span className="quantity">{cantidad}</span>
            <button
              style={{
                padding: "6px",
                paddingLeft: "12px",
                paddingRight: "12px",
                backgroundColor: "#4F4F4F",
                color: "white",
                border: "none",
                fontWeight: "600",
              }}
              onClick={aumentar}
            >
              +
            </button>
          </div>
          <button
            style={{
              padding: "6px",
              paddingLeft: "12px",
              paddingRight: "12px",
              border: "none",
              fontWeight: "500",
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
          <Link
            to="/shop"
            style={{
              padding: "6px",
              border: "none",
              color: "white",
              fontWeight: "500",
              backgroundColor: "#FF3333",
            }}
          >
            See more products
          </Link>
          <Link
            to="/cart"
            style={{
              padding: "6px",
              color: "white",
              border: "none",
              fontWeight: "500",
              backgroundColor: "#FF3333",
            }}
          >
            Finish buying
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
