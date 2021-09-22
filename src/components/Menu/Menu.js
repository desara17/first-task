import React, { useState } from "react";
import "./Menu.css";
const Menu = () => {
  const [displayed, setDisplay] = useState(false);

  const clickHandler = () => {
    setDisplay(true);
  };
  const cancelClickHandler = () => {
    setDisplay(false);
  };
  return (
    <div className="menu-container">
      <div
        className="menu-icon"
        style={{ display: displayed ? "none" : "block" }}
        onClick={clickHandler}
      >
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.MO13Yb2PjehyQD7s6Lsx_gHaHa&pid=Api&P=0&w=300&h=300"
          alt="menu-icon"
        ></img>
      </div>
      <div
        className="menu-content"
        style={{ display: displayed ? "block" : "none" }}
      >
        <div className="cancelButton" onClick={cancelClickHandler}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.gu2RevLkMXT1xe5NyStwzgAAAA&pid=Api&P=0&w=300&h=300"
            alt="cancel"
          ></img>
        </div>
        <div className="menu-items">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
        </div>
      </div>
    </div>
  );
};
export default Menu;
