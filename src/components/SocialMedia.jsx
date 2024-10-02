import React from "react";
import styles from "../styles/SocialMedia.module.css"
import { ReactComponent as InstagramIcon } from '../img/instagram.svg';
import { ReactComponent as WhatsAppIcon } from '../img/whatsapp.svg';


const SocialMedia = () => {
    return (
        <div className={styles.socialMedia}>
        <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaItem}><a href="#"><InstagramIcon className={styles.socialMediaIkon}/></a></li>
        <li className={styles.socialMediaItem}><a href="#"><WhatsAppIcon className={styles.socialMediaIkon}/></a></li>
        {/* <li className={styles.socialMediaItem}><a href="#">I</a></li> */}
        </ul>
        </div>
    )
}
export default SocialMedia;