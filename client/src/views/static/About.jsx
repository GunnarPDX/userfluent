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

                <br/>
                <br/>

                <img className={'about-header-pic'} src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583543464/UserFluent/about-pic_cpfh3v.svg'} alt={'userfluent about us'}/>

                <p className={'about-us-text-box'}>
                    UserFluent was a happy accident born out of endless research and experimentation, what started as a
                    testing plan transformed into a business. We created a robust network of software
                    which gives us greater flexibility and speed to reliably deliver widespread logistical and analytical
                    design feedback. We have metamorphosed from a simple testing pipeline to a communication and design driven
                    research and analytics company whose biggest assets are its wealth of data and its innovative people.
                    Our objective is to help you competently and distinctively engineer client-centered digital services.
                </p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <p className={'landing-header-text'} id={'text'}>
                    Meet the team.
                </p>

                <div className={'home-row-divider'}/>
                <div className={'level'}>
                    <div className={'level-left'}>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1580628734/ni81niit1fpbjojwpbrn.jpg'} alt={'profile-gunnar'} className={'about-profile-pic'}/>
                    </div>
                </div>

                <div className={'home-row-divider'}/>
                <div className={'level'}>
                    <div className={'level-left'}>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1580628734/ni81niit1fpbjojwpbrn.jpg'} alt={'profile-gunnar'} className={'about-profile-pic'}/>
                    </div>
                </div>

                <div className={'home-row-divider'}/>
                <div className={'level'}>
                    <div className={'level-left'}>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1580628734/ni81niit1fpbjojwpbrn.jpg'} alt={'profile-gunnar'} className={'about-profile-pic'}/>
                    </div>
                </div>



            </div>
        );
    }
}

export default About;