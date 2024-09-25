import React from "react";
import styles from '../styles/Cart.module.css'
// const Cart = ({ title, description, size, image}) => {
//     return (
        
//         <div  className={style.PizzaMenu}>
//             <div><img src={image} alt={title} width="374px" height="374px"/></div>
//             <div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 <p>{size}</p>
//                 {/* <button onClick={onAddToCart}>замовити</button> */}
//             </div>
//         </div>
        
//     )
// }
const Cart = ({ title, description, sizes, image }) => {
    return (

      <div className={styles.card}>
        <img className={styles.img} src={image} alt={title} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.sizesContainer}>
       {sizes}
        </div>
      </div>
    );
  };
export default Cart;