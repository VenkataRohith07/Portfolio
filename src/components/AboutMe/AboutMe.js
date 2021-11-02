import React from 'react';
import {Grid, Container} from "@material-ui/core";
import styles from "./AboutMe.module.css";
import imageURL from "../../img/Profile.jpeg"


function AboutMe(){

    return(
        <div className={styles.container}>
        <Container id="aboutme" >
            <h1 className={styles.heading}> About Me</h1>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4} lg={3} className={styles.img}>
                    <img className={styles.image} src={imageURL} alt="Profile"/>
                </Grid>

                <Grid item  xs={12} md={8} className={styles.details}>
                    Bonjour!! I am Venkata Rohith.Chodisetti . <br/> Currently, I am pursuing B.TECH from National Institute 
                    of Technology,Raipur in Computer Science and Engineering. <br/>My hobbies are listening to podcasts and playing games. <br/>I am a web developer, recently I also started
                    exploring other web technlogies like IOT and Cloud technology.<br/> I also do competative programming in various 
                    platforms like CodeChef: <a href="https://www.codechef.com/users/rohith7102" target="_blank">rohith7102</a> and CodeForces:
                    <a href="https://codeforces.com/profile/Rohithch7102" target="_blank">Rohithch7102</a>.<br/>
                </Grid>
            </Grid>

        </Container>
      </div>
    );
}
export default AboutMe;
