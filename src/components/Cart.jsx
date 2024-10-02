import React, { useState } from "react";
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
  const [activeSize, setActiveSize] = useState(sizes[0]); 

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };
    return (

      <div className={styles.card}>
        <img className={styles.img} src={image} alt={title} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.sizeButtons}>
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`${styles.sizeButton} ${activeSize.size === size.size ? styles.active : ''}`}
            onClick={() => handleSizeClick(size)}
          >
            {/* Якщо кнопка активна, показуємо повну назву, інакше коротку */}
            {activeSize.size === size.size ? size.title : size.title.charAt(0).toUpperCase()}
          </button>
        ))}
      </div>

      {/* Відображення інформації про активний розмір */}
      <ul>
        <li className={styles.sizeDetails}><strong>Розмір:</strong> {activeSize.size}</li>
        <li className={styles.sizeDetails}><strong>Вага:</strong> {activeSize.size.split(' - ')[1]}</li>
        <li className={styles.sizeDetails}><strong>Ціна:</strong> {activeSize.price}</li>
      </ul>
    </div>
  )
  };
export default Cart;