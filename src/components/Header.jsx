import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia"
import Phone from "./Phone";
import styles from "../styles/Header.module.css"
import style from "../index.module.css"
const Header = () =>{
    return(
        <section className={styles.header}>
            <SocialMedia/>
            <Logo/>
            <Phone/>
        </section>
    )
}
export default Header;