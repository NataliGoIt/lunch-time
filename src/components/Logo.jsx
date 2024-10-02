import React from "react";
import foto from "../img/logo.svg"
import styles from "../styles/Logo.module.css"
const Logo = () =>{
    return (
        <div className={styles.logo}>
            <img src={foto} alt="logo" />
        </div>
    )
}
export default Logo;