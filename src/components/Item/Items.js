import "./Items.css";
import Card from "../Card/Card";
import ButtonComponent from "../ButtonComponents/ButtonComponent";

const Item = ({
  selected,
  id,
  onClick,
  url,
  alt,
  title,
  text,
  amount,
  co2,
  waterForest,
}) => {
  return (
    <Card>
      <div
        className="paneClass"
        style={{ border: id === selected ? "2px solid red" : "white" }}
        onClick={onClick}
      >
        <div>
          <img src={url} alt={alt}></img>
        </div>
        <div className="description">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className="details">
          <div className="amount">{amount}</div>
          <div className="water-forest">{waterForest}</div>
          <div className="co2">
            {co2} CO<sub>2</sub>
          </div>
        </div>
        <div style={{ visibility: id === selected ? "visible" : "hidden" }}>
          <ButtonComponent id={id}></ButtonComponent>
        </div>
      </div>
    </Card>
  );
};
export default Item;
