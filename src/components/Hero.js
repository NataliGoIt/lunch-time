import React from "react";
import "../styles/Hero.css"
import Nav from "./Navigation";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Hero = () => {
    return (
        <>
        <Nav />
        <Logo />
        <SocialMedia />
        <section className="hero">
            <h1>Назва піци</h1>
            <p>тут буде опис тут буде опис тут буде опис тут буде опис тут буде опис тут буде опис тут буде опис</p>
            <p>вага</p>
            <button>зробити замавлення</button>
        </section>
        </>
    )
}
export default Hero;