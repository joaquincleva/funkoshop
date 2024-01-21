import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    //Se carga un loading como true que se setea a false cuando se trae el producto con la id especificada de firebase
    setLoading(true);

    const documento = doc(db, "items", itemId);

    getDoc(documento)
      .then((res) => {
        const data = res.data();
        const producto = { id: res.id, ...data };
        setProduct(producto);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="itemDetail" style={{ minHeight: "80vh" }}>
      {loading ? (
        <Spinner animation="border" variant="warning" className="spinner" />
      ) : (
        <ItemDetail props={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
