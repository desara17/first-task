import "./DetailItem.css";
import { useHistory } from "react-router-dom";
const DetailItem = (props) => {
  const history = useHistory();
  const backButton = () => {
    console.log(history);
    history.goBack();
  };
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

        <div>
          <button onClick={backButton}> Back </button>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
