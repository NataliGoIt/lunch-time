import React from "react";
import Cart from './Cart';
import {pizza} from './products'
// import style from '../styles/Menu.module.css'
  const PizzaMenu = () =>{
    return(
        <div>
        <h2>PIZZA</h2>
        {pizza.map((product) => (
    <Cart
      key={product.id}
      title={product.title}
      description={product.description}
      sizes={ product.sizes.map((e, index) =>( 
          <p key={index}>
          Size: {e.size}, Title: {e.title}, Price: {e.price}
        </p>
        ))}
      image={product.image}
    />
  ))}
        </div>
    )
  }
  export default PizzaMenu;

 