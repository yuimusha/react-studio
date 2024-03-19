// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";
import Button from "@mui/material/Button";

export default function BakeryItem(props) {
    const handleClick = () => {
        props.add(props.item.price, props.item.name);
    };
    return (
        <div className="item-card">
            <img src={props.item.image} />
            <p>{props.item.name}</p>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <Button onClick={handleClick}>Add to Cart</Button>
        </div>
    );
}