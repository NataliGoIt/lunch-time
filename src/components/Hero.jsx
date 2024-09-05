import React from "react";
import "../styles/Hero.css"
import Header from "./Header";

const Hero = () => {
    return (
        <>
        <Header/>
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