import Item from "../Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map((producto) => {
        return <Item key={producto.id} props={producto} />;
      })}
    </div>
  );
};
export default ItemList;
