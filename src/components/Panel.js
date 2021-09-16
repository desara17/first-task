import React, {useState} from "react";
import Card from'./Card';
import Item from './Items';
import './panel.css';

const Panel = ({inputs})=>{

    const [selected,setSelected] = useState(null);

    console.log('selected', selected)

    const onItemClicked = (id) => {
        setSelected(id)
    }

    console.log('selected', selected)

return(
 <Card>
     <div className ='container'>
{
    inputs.map((input)=> {
        return (
            <Item 
                selected={selected}
                onClick={()=> onItemClicked(input.id)}
                key={input.id}
                styling={input.class}
                id={input.id}
                url={input.url}
                alt={input.alt}
                title={input.title}
                text={input.text}
                amount={input.amount}
                waterForest={input.waterForest}
                co2={input.co2}
            />
        )
    })
}
</div>
</Card>
);
};
export default Panel;