import React from "react";
import portrait from "../assets/demoPortrait.png";


function About (){
    return(
        <section className="page" id="about">
            <div>
                <img src={portrait}></img>
            </div>
            <div>
                <p id="aboutText">
                    Talk about myself here.
                </p>
            </div>
        </section>
    );
};

export default About;