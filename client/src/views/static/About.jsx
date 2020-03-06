import "./static.scss"
import './about.scss'
import React, { Component } from 'react';
import LandingNav from "./components/LandingNav";
import BackdropLines from "./components/BackdropLines";

class About extends Component {
    render() {
        return (
            <div className={"static-about-container-nil"}>
                <LandingNav/>
                <div className={'nav-spacer'}/>

                <p className={'landing-header-text'} id={'text'}>
                    <span className={'underline--magical'}>About us.</span>
                </p>

                <p className={'about-us-text-box'}>
                    UserFluent was a happy accident born out of endless research and experimentation, what started as a
                    testing plan transformed into a business. We created a robust network of software
                    which gives us greater flexibility and speed to reliably deliver widespread logistical and analytical
                    design feedback. We have metamorphosed from a simple testing pipeline to a communication and design driven
                    research and analytics company whose biggest assets are its wealth of data and its innovative people.
                    Our objective is to help you competently and distinctively engineer client-centered services.
                </p>

            </div>
        );
    }
}

export default About;