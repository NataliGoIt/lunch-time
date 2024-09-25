import React from "react";
import {drink} from "./products"
import Cart from "./Cart";

const DrinkMenu = () =>{
    return (
        <>
        <h2>BAUTURI</h2>
        {drink.map((product) => (
    <Cart
      key={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ))}
        </>
    )
  }
  export default DrinkMenu;