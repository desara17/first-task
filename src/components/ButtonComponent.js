import react , {useState} from "react";
import './button.css';

const ButtonComponent = () => {

    const clicked =()=>{
        console.log('clicked');

    }
return(

    <button onClick = {clicked}>Welter</button>
);

}
export default ButtonComponent;