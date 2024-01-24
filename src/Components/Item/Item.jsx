import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ props }) => {
  return (
    <Link to={`/item/${props.id}`}>
      <article className="Item">
        <picture className="picture">
          <img
            style={{ marginLeft: "auto", marginRight: "auto" }}
            src={props.pictureUrl[0]}
            alt={props.title}
            width={200}
          ></img>
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
          <p>${props.price}</p>
          <p style={{ color: "#1D84B5" }}>
            Available in stock:{" "}
            <span style={{ display: "inline", margin: "0px" }}>
              {props.stock}
            </span>
          </p>
        </section>
      </article>
    </Link>
  );
};

export default Item;
