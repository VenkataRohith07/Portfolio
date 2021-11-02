import React from 'react';
import Typical from 'react-typical';
import {Button} from "@material-ui/core";
import styles from "./Profile.module.css";


function Profile(){

    return(
    <div id="profile"className={styles.profileContainer}>
        <div className={styles.profileParent}>
            <h2>Hello!! I'm Rohith.</h2>
            <div className={styles.typical}>
                <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                    "Full Stack Web-Developer",
                    2000,
                    "NITIAN",
                    2000,
                    "Computer Science Undergraduate",
                    2000,
                ]}
             />
            </div>

            <a href="https://drive.google.com/file/d/1TN40zCQUmmT63_7SKlYJ9H3PU3GDKtxo/view?usp=drivesdk" target="_blank">
                    <Button variant="contained" color="success" className={styles.butt}>
                        Get Resume
                    </Button>
             </a>
        </div>

    </div>


    );
}

export default Profile