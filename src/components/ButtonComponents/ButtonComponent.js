import {
  useHistory,
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import DetailPage from "../../DetailPage";
import "./button.css";
const ButtonComponent = (props) => {
  const hist = useHistory();
  const clickButtonHandler = (event) => {
    hist.push(`${props.id}`);
  };
  const handleBack = () => {
    hist.goBack();
  };

  return <button onClick={clickButtonHandler}> Welter</button>;
};

export default ButtonComponent;
