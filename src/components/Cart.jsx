import React from "react";

const Cart = ({ title, description, price, image, onAddToCart }) => {
    return (
        <>
        <div>
            <div><img src={image} alt={title} width="374px" height="374px"/></div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <button onClick={onAddToCart}>замовити</button>
            </div>
        </div>
        </>
    )
}
export default Cart;