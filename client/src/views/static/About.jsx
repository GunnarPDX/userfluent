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
                {/*<BackdropLines/>*/}

                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583386668/UserFluent/about-header-pic_upkqrl.svg'} alt={'fun about pic'} className={'about-header-pic'}/>

                <p className={'about-us-text-box'}>
                    UserFluent was a happy accident born out of endless research and experimentation, what started as a
                    testing plan transformed into a business. We have robust networks of strategic assets that we own or have contractual access to,
                    which give us greater flexibility and speed to reliably deliver widespread logistical and analytical
                    design solutions. We have metamorphosed from a simple testing pipeline to a communication and design driven
                    research and analytics company whose biggest assets are its wealth of data and its innovative people.
                </p>

            </div>
        );
    }
}

export default About;