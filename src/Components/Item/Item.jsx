import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ props }) => {
  return (
    <Link to={`/item/${props.id}`}>
      <article
        className="Item"
        style={{
          backgroundColor: "white",
          display: "flex",
          color: "black",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
            src={props.pictureUrl[0]}
            alt={props.title}
            width={200}
          ></img>
        </picture>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              paddingTop: "15px",
              margin: "0px",
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
              fontSize: "20px",
              padding: "0px",
              margin: "0px",
            }}
          >
            {props.title}
          </p>
          <p
            style={{
              fontSize: "17px",
              padding: "0px",
              margin: "0px",
            }}
          >
            ${props.price}
          </p>
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
