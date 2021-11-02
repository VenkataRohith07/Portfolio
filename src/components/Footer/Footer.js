import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return(
     <div id="contact" className={styles.container}>
         <div className={styles.parent}>
         <div className={styles.details}>
             <a className={styles.icons} href="https://www.linkedin.com/in/rohith-ch-5569a81ab/" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
             <a className={styles.icons} href="https://www.facebook.com/ch.rohith.31" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
             <a className={styles.icons} href="https://github.com/VenkataRohith07" target="_blank"><i class="fab fa-github-square fa-lg"></i></a>
         </div>
         <div className={styles.details}>
             <a href="mailto:chrohith7102@gmail.com"><i class="fas fa-envelope-open-text fa-lg"></i>chrohith7102@gmail.com</a>
         </div>
         <div className={styles.details}>
            <a href="#"><i class="fas fa-mobile-alt fa-lg"></i>8688576776</a>
         </div>
        </div>
     </div>
    );
}

export default Footer;