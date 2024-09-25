import React from "react";
import SocialMedia from "./SocialMedia";
// import "../styles/Contact";
const Contact = () =>{
    return(
        <>
        <section>
            <h1>Contact Us</h1>
            <a href="https://www.google.com/maps?q=46.754351104307716, 23.595156882382632">Cluj-Napoca, Str. Meteor 3, 400347, România</a>
         <ul>
            <li><a href="tel:+40771559725">+40771559725</a></li>
            <li><a href="tel:+40774622993">+40774622993</a></li>
         </ul>
         <SocialMedia/>
        </section>
        </>
    )
}
export default Contact;