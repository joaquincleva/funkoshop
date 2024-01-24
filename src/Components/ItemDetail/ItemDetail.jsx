import { Carousel } from "react-bootstrap";
import ItemCount from "../ItemCount.js/index.js";
import "./ItemDetail.css";

const ItemDetail = ({ props }) => {
  return (
    <article>
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
      <section className="section">
        <p className="category">
          {props.categoryId === "63F5KQ32yWGUM7aVsEpO"
            ? "Star Wars"
            : props.categoryId === "KqE8AduIVGfVCVhbANdd"
            ? "Pokemon"
            : "Harry Potter"}
        </p>
        <p className="title">{props.title}</p>
        <p style={{ textAlign: "start", fontSize: "13px" }}>
          {props.description}
        </p>
        <p className="price">${props.price}</p>
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
