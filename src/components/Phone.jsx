import React from "react";
// import phoneIkon from "../img/phone.svg"
import { ReactComponent as PhoneIcon } from '../img/phone.svg';
import styles from "../styles/Phone.module.css"
const Phone = () =>{
    return(
     <div>
         <a href="tel:+40771559725" className={styles.phoneNumber}><PhoneIcon className={styles.phone}/>+40771559725</a>
     </div>
    )
}
export default Phone;