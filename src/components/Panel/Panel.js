import React, { useState } from "react";
import Card from "../Card/Card";
import Item from "../Item/Items";
import "./panel.css";

const Panel = ({ inputs }) => {
  const [selected, setSelected] = useState(null);

  const onItemClicked = (id) => {
    setSelected(id);
    localStorage.setItem("prevId", id);
  };

  return (
    <Card>
      <div className="container">
        {inputs.map((input) => {
          return (
            <Item
              selected={parseInt(localStorage.getItem("prevId"))}
              onClick={() => onItemClicked(input.id)}
              key={input.id}
              {...input}
            />
          );
        })}
      </div>
    </Card>
  );
};
export default Panel;
