import "./DetailItem.css";
const DetailItem = (props) => {
  return (
    <div>
      <div
        className="detailItem-container"
        style={{
          display: props.id == props.checked ? "block" : "none",
        }}
      >
        <div className="image-container">
          <img src={props.url} alt={props.alt}></img>
        </div>
        <div className="properties">
          <div className="item">${props.amount}</div>
          <div className="item"> {props.waterForest}</div>
          <div className="item">{props.co2}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
