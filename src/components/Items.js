import react ,{useState} from "react";
import './Items.css';
import Card from "./Card";
import ButtonComponent from "./ButtonComponent";
import App from "../App";

const Item= ({ styling, selected, id, url, alt, title, text, waterForest, co2, amount, onClick})=>{

return(
   <Card>
    <div className={styling}  style ={{border : id === selected ? '2px solid red': 'white'}} onClick={onClick}>
        <div>
            <img src = {url} alt = {alt}></img>
        </div>
        <div className = 'description'>
           <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <div className='details'>
            <div className='amount'>{amount}</div>
            <div className='water-forest'>{waterForest}</div>
            <div className='co2'>{co2} CO<sub>2</sub></div>
        </div>
        <div style={{visibility : id === selected? 'visible' : 'hidden'}}>
            <ButtonComponent ></ButtonComponent>
        </div>

    </div>
    </Card>
    );

}; 
export default Item;