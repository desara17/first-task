import React from "react";
import { useParams, useHistory } from "react-router-dom";
import DetailItem from "./DetailItem";

const DetailPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const backButtonHandler = (event) => {
    history.goback();
  };

  const inputs = [
    {
      id: 1,
      url: "https://tse3.mm.bing.net/th?id=OIP.aT0HfqbZJ5egYXQw6CcD6wHaFP&pid=Api&P=0&w=231&h=164",
      alt: "water",
      title: "💧Solarbetriebene Wasserpumpen",
      text: "Text",
      amount: 240.0,
      waterForest: "120 l💧",
      co2: "7.45 t",
    },
    {
      id: 2,
      url: "https://tse4.mm.bing.net/th?id=OIP.f8fLPUQCPDrLt1_6si9bLAHaE8&pid=Api&P=0&w=257&h=172",
      alt: "forest",
      title: "🌳 Aufforstung von Waldflachen",
      text: "Text",
      amount: 240.0,
      waterForest: "45.0 🌳",
      co2: "9.95 t",
    },

    {
      id: 3,
      url: "https://tse4.mm.bing.net/th?id=OIP.f8fLPUQCPDrLt1_6si9bLAHaE8&pid=Api&P=0&w=257&h=172",
      alt: "forest-water",
      title: "🤔 Unentschlossen?",
      text: "Text",
      amount: 240.0,
      waterForest: "16.0 🌳 & 94 l💧",
      co2: "9.95 t",
    },
  ];

  return (
    <div className="container">
      {inputs.map((input) => {
        return <DetailItem checked={id} key={input.id} {...input} />;
      })}
    </div>
  );
};
export default DetailPage;
