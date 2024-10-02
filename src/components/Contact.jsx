import React from "react";
import Maps from "./Maps"
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const phoneNumber = "+40771559725"; 
  const address = "Cluj-Napoca, Str. Meteor 3, 400347, România"; 

  return (
    <div className={styles.contactBlock}>
      <h2 className={styles.title}>Контакти</h2>
      <div className={styles.mapContainer}>
    <Maps/>
      </div>
      <div className={styles.contactInfo}>
        <p><strong>Адреса:</strong> {address}</p>
        <p><strong>Телефон:</strong> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
        <div className={styles.socialMedia}>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};



export default Contact;