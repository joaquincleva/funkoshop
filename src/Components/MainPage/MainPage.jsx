import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import starWarsImage from "../../assets/stars-wars.webp";
import pokemonImage from "../../assets/pokemon.webp";
import harryPotterImage from "../../assets/harry-potter.webp";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    setLoading(true);
    //Si categoryId está definida trae los productos de esa categoría, sino trae todos los productos
    const colecciones = collection(db, "items");

    getDocs(colecciones)
      .then((res) => {
        const productos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productos);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <div className="bannerFunko">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "baseline",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>New arrivals</h4>
            <h6 style={{ fontWeight: "bold" }}>
              Discover the next Funko Pop for your collection.
            </h6>
          </div>
          <Link to={"/shop"}>
            <p
              style={{
                borderRadius: "5px",
                backgroundColor: "white",
                padding: "5px",
                color: "black",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              SHOP
            </p>
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: "white", color: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              width: "450px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginY: "auto",
            }}
          >
            <h4>STAR WARS & THE MANDALORIAN</h4>
            <h6>
              Enjoy a saga that continues adding characters to its collection
            </h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p
                style={{
                  backgroundColor: "#30343F",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                See Collection
              </p>
            </NavLink>
          </div>
          <img src={starWarsImage} alt="" width={250} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginY: "auto",
            }}
          >
            <h4>POKEMON INDIGO</h4>
            <h6>
              Catch as many as you can and enjoy a collection full of friends.
            </h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p
                style={{
                  backgroundColor: "#30343F",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                See Collection
              </p>
            </NavLink>
          </div>
          <img src={pokemonImage} alt="" width={250} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "450px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginY: "auto",
            }}
          >
            <h4>HARRY POTTER</h4>
            <h6>Relive the memories of a saga full of magic and memories</h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p
                style={{
                  backgroundColor: "#30343F",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                See Collection
              </p>
            </NavLink>
          </div>
          <img src={harryPotterImage} alt="" width={250} />
        </div>
        <h3
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            textAlign: "start",
            paddingLeft: "10vw",
          }}
        >
          LATEST RELEASES
        </h3>
        <div
          style={{
            display: "flex",
            width: "90%",
            paddingLeft: "auto",
            paddingRight: "auto",
            justifyContent: "center",
          }}
        >
          {products?.length > 0 ? (
            products.reverse().map((item, index) => {
              if (!(index > 2)) {
                return (
                  <Link to={`/item/${item.id}`}>
                    <article
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        color: "black",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <header
                        style={{ display: "flex", justifyContent: "end" }}
                      >
                        <span
                          style={{
                            backgroundColor: "#FF3333",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            color: "white",
                            marginRight: "25px",
                          }}
                        >
                          New
                        </span>
                      </header>
                      <picture
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          paddingLeft: "20%",
                        }}
                      >
                        <img
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          src={item.pictureUrl[0]}
                          alt={item.title}
                          width={200}
                        ></img>
                      </picture>
                      <section
                        style={{
                          marginLeft: "25%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "13px",
                            paddingTop: "15px",
                            margin: "0px",
                          }}
                        >
                          {item.categoryId === "63F5KQ32yWGUM7aVsEpO"
                            ? "Star Wars"
                            : item.categoryId === "KqE8AduIVGfVCVhbANdd"
                            ? "Pokemon"
                            : "Harry Potter"}
                        </p>
                        <p
                          style={{
                            fontSize: "20px",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontSize: "17px",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          ${item.price}
                        </p>
                        <p style={{ color: "#1D84B5" }}>
                          Available stock:{" "}
                          <span style={{ display: "inline", margin: "0px" }}>
                            {item.stock}
                          </span>
                        </p>
                      </section>
                    </article>
                  </Link>
                );
              } else {
                return null;
              }
            })
          ) : (
            <div
              style={{
                rotate: "90deg",
                height: "1vh !important",
                marginLeft: "25%",
              }}
            >
              <Spinner
                animation="border"
                variant="warning"
                className="spinner"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
