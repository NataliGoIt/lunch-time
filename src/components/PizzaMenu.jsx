import React from "react";
import Cart from './Cart';
import {pizza} from './products'
// import styles from '../styles/Menu.module.css'
  const PizzaMenu = () =>{
    return(
        <div>
        <h2>PIZZA</h2>
        {pizza.map((product) => (
    <Cart
      key={product.id}
      title={product.title}
      description={product.description}
      sizes={ product.sizes}
      image={product.image}
    />
  ))}
        </div>
    )
  }
  export default PizzaMenu;

  // <p>{e.size}</p>
  // <p>{e.price}</p>