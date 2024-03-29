import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsToShow, setProductsToShow] = useState([]);

  const [filter, setFilter] = useState({
    searchInput: "",
    order: "",
    minPrice: "",
    maxPrice: "",
  });

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    setLoading(true);
    //Si categoryId está definida trae los productos de esa categoría, sino trae todos los productos
    const colecciones = categoryId
      ? query(collection(db, "items"), where("categoryId", "==", categoryId))
      : collection(db, "items");

    getDocs(colecciones)
      .then((res) => {
        const productos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productos);
        setProductsToShow(productos);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const filterProducts = () => {
    let productos = [...products];
    productos = productos.filter(
      (item) =>
        item.title?.toLowerCase().includes(filter.searchInput?.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(filter.searchInput.toLowerCase())
    );
    if (filter.minPrice.length > 0) {
      productos = productos.filter(
        (item) => item?.price >= Number(filter.minPrice)
      );
    }
    if (filter.maxPrice.length > 0) {
      productos = productos.filter(
        (item) => item?.price <= Number(filter.maxPrice)
      );
    }
    if (filter.order === "a-z") {
      productos.sort((a, b) => a.title?.localeCompare(b.title));
    } else if (filter.order === "z-a") {
      productos.sort((a, b) => b.title?.localeCompare(a.title));
    } else if (filter.order === "0-100") {
      productos.sort((a, b) => a.price - b.price);
    } else if (filter.order === "100-0") {
      productos.sort((a, b) => b.price - a.price);
    }

    return productos;
  };

  useEffect(() => {
    setProductsToShow(filterProducts());
    //eslint-disable-next-line
  }, [filter]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <Spinner animation="border" variant="warning" className="spinner" />
        </div>
      ) : (
        <div
          style={{
            display: `${categoryId === undefined ? "flex" : ""}`,
            minHeight: "75vh",
          }}
        >
          {categoryId === undefined ? (
            <div className="pageContainer">
              <label style={{ margin: "0", padding: "0", width: "100%" }}>
                <p className="searchText">Search product</p>
                <input
                  className="width100"
                  type="text"
                  placeholder="Product, category"
                  onChange={(e) =>
                    setFilter((prevState) => ({
                      ...prevState,
                      searchInput: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="sortText">
                <p style={{ margin: 0, padding: "0", textAlign: "start" }}>
                  Sort by
                </p>
                <select
                  type="text"
                  className="width100"
                  onChange={(e) =>
                    setFilter((prevState) => ({
                      ...prevState,
                      order: e.target.value,
                    }))
                  }
                >
                  <option value="">Select an option</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="0-100">0-100</option>
                  <option value="100-0">100-0</option>
                </select>
              </label>
              <div>
                <p className="priceText">Price</p>
                <div>
                  <label className="width100">
                    <input
                      type="number"
                      placeholder="Min price"
                      className="width100"
                      onChange={(e) =>
                        setFilter((prevState) => ({
                          ...prevState,
                          minPrice: e.target.value,
                        }))
                      }
                    />
                  </label>
                  <p className="hyphen">-</p>
                  <label className="width100">
                    <input
                      type="number"
                      className="width100"
                      placeholder="Max price"
                      onChange={(e) =>
                        setFilter((prevState) => ({
                          ...prevState,
                          maxPrice: e.target.value,
                        }))
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          ) : null}
          <ItemList products={productsToShow} />
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;
