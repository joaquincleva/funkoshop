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
import "./MainPage.css";

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
        <div className="innerBanner">
          <div className="bannerText">
            <h4 style={{ fontWeight: "bold" }}>New arrivals</h4>
            <h6 style={{ fontWeight: "bold" }}>
              Discover the next Funko Pop for your collection.
            </h6>
          </div>
          <Link to={"/shop"}>
            <p className="shopLink">SHOP</p>
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: "white", color: "black" }}>
        <div className="categoryCard">
          <div className="categoryCardText">
            <h4>STAR WARS & THE MANDALORIAN</h4>
            <h6>
              Enjoy a saga that continues adding characters to its collection
            </h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p className="seeCollectionText">See Collection</p>
            </NavLink>
          </div>
          <img src={starWarsImage} alt="" width={250} />
        </div>
        <div className="categoryCardReverse">
          <div className="categoryCardText">
            <h4>POKEMON INDIGO</h4>
            <h6>
              Catch as many as you can and enjoy a collection full of friends.
            </h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p className="seeCollectionText">See Collection</p>
            </NavLink>
          </div>
          <img src={pokemonImage} alt="" width={250} />
        </div>
        <div className="categoryCard">
          <div className="categoryCardText">
            <h4>HARRY POTTER</h4>
            <h6>Relive the memories of a saga full of magic and memories</h6>
            <NavLink to={"/category/63F5KQ32yWGUM7aVsEpO"}>
              <p className="seeCollectionText">See Collection</p>
            </NavLink>
          </div>
          <img src={harryPotterImage} alt="" width={250} />
        </div>
        <h3 className="lastReleasesText">LATEST RELEASES</h3>
        <div className="lastReleasesContainer">
          {products?.length > 0 ? (
            products.reverse().map((item, index) => {
              if (!(index > 2)) {
                return (
                  <Link to={`/item/${item.id}`}>
                    <article className="lastReleasesArticle">
                      <header
                        style={{ display: "flex", justifyContent: "end" }}
                      >
                        <span className="newText">New</span>
                      </header>
                      <picture className="lastReleasesPicture">
                        <img
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                          src={item.pictureUrl[0]}
                          alt={item.title}
                          width={200}
                        ></img>
                      </picture>
                      <section className="lastReleasesSection">
                        <p className="lastReleasesCategory">
                          {item.categoryId === "63F5KQ32yWGUM7aVsEpO"
                            ? "Star Wars"
                            : item.categoryId === "KqE8AduIVGfVCVhbANdd"
                            ? "Pokemon"
                            : "Harry Potter"}
                        </p>
                        <p className="lastReleasesTitle">{item.title}</p>
                        <p className="lastReleasesPrice">${item.price}</p>
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
              className="lastReleasesSpinner"
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
