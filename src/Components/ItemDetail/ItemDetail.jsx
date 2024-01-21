import { Carousel } from "react-bootstrap";
import ItemCount from "../ItemCount.js/index.js";
import "./ItemDetail.css";

const ItemDetail = ({ props }) => {
  return (
    <article
      style={{
        backgroundColor: "white",
        display: "flex",
        color: "black",
        justifyContent: "center",
        alignContent: "center",
        gap: 25,
      }}
    >
      <picture
        style={{
          margin: 0,
          padding: 0,
          "&.carousel-control-prev-icon": { color: "black !important" },
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img src={props.pictureUrl[0]} alt={props.title} width={300}></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={props.pictureUrl[1]} alt={props.title} width={300}></img>
          </Carousel.Item>
        </Carousel>
      </picture>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            paddingTop: "15px",
            margin: "0px",
            color: "grey",
            textTransform: "uppercase",
          }}
        >
          {props.categoryId === "63F5KQ32yWGUM7aVsEpO"
            ? "Star Wars"
            : props.categoryId === "KqE8AduIVGfVCVhbANdd"
            ? "Pokemon"
            : "Harry Potter"}
        </p>

        <p
          style={{
            fontSize: "32px",
            padding: "0px",
            margin: "0px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {props.title}
        </p>
        <p style={{ textAlign: "start", fontSize: "13px" }}>
          {props.description}
        </p>
        <p
          style={{
            fontSize: "36px",
            padding: "0px",
            margin: "0px",
            marginBottom: "10px",
          }}
        >
          ${props.price}
        </p>
        <p>
          <ItemCount props={props} />
        </p>
        <p style={{ color: "#1D84B5" }}>
          Available stock:{" "}
          <span style={{ display: "inline", margin: "0px" }}>
            {props.stock}
          </span>
        </p>
      </section>
    </article>
  );
};

export default ItemDetail;
