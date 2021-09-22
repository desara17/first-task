import { useHistory, BrowserRouter as Router } from "react-router-dom";
import "./button.css";
const ButtonComponent = (props) => {
  const hist = useHistory();
  const clickButtonHandler = (event) => {
    hist.push(`${props.id}`);
  };

  return <button onClick={clickButtonHandler}> Welter</button>;
};

export default ButtonComponent;
