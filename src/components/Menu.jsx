import React from "react";
import PizzaMenu from "./PizzaMenu";
// import DrinkMenu from "./DrinkMenu";
import style from "../index.module.css"
const Menu = () =>{
 return(
    <>
    <div className={style.container}>
        <h2>Menu</h2>
        <PizzaMenu/>
        {/* <DrinkMenu/> */}
        
    </div>
    </>
 )
}

export default Menu;