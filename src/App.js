import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // make a state variable to hold the data
  const [data, setData] = useState(bakeryData);
  //const [cart, setCart] = useState([]);
  const [item, setItem] = useState([]);
  const [cost, setCost] = useState(0);

  // run when this component is first loaded
  const loadData = () => {
    setData(bakeryData);
  }

  useEffect(() => {loadData();}, [])

  const addToCart = (price, name) => {
    console.log('adding to cart:', price)

    setCost(cost+price);
    setItem([...item, name]);
    
    //setCart(prev_cart =>
    //  [...prev_cart, price]
    //    .filter(price => price < 5));
  }

  const buildElements = () => {
    const jsxlist = bakeryData.map((item) => ( 
      
      // TODO: map bakeryData to BakeryItem components
      <BakeryItem item={item} add={addToCart}/>
    ))

    return jsxlist;
  }

  const showCart = () => {
    if (item.length === 0) {
      console.log('cart is empty')
      return <p>Cart is empty</p>
    }
  
    const jsxlist = item.map((item, index) => (
      <p key={index} >{item}</p>
    ))

    return jsxlist;
  }

  return (
    <div className="App">
      <div className="bakery">
        <h1>My Bakery</h1> 
        <div className="bakery-content">
          {buildElements()}
        </div>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {showCart()}
        <p>Total: ${cost}</p>
      </div>
    </div>
  );
}

export default App;