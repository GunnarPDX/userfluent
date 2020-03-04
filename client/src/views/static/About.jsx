import "./static.scss"
import React, { Component } from 'react';
import LandingNav from "./components/LandingNav";
import BackdropLines from "./components/BackdropLines";

class About extends Component {
    render() {
        return (
            <div className={"static-about-container-nil"}>
                <LandingNav/>
                <div className={'nav-spacer'}/>
                <BackdropLines/>

                <p>
                    About
                </p>

                <div className={"content-spacer"}/>
            </div>
        );
    }
}

export default About;