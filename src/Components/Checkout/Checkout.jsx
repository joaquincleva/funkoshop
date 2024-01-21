import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Checkout.css";
import {
  Timestamp,
  writeBatch,
  where,
  addDoc,
  collection,
  query,
  getDocs,
  documentId,
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);
  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        products: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "items");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="cargando">
          <Spinner animation="border" variant="warning" />
          <br />
          <h2 className="h2Cargando">Your order is being generated</h2>
        </div>
      ) : orderId ? (
        <div className="cargando">
          <h2 className="h2Cargando">Your order id is: {orderId}</h2>
          <br />
          <Link
            to="/"
            className="verProductos"
            style={{
              padding: "5px",
              backgroundColor: "#FF3333",
              color: "white",
            }}
          >
            Return to homepage
          </Link>
        </div>
      ) : (
        <div className="container2">
          <CheckoutForm onConfirm={createOrder} />
        </div>
      )}
    </>
  );
};

export default Checkout;
