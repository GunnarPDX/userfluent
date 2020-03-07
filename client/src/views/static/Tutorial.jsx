import "./static.scss"
import React, { Component } from 'react';
import BackdropLines from "./components/BackdropLines";
import LandingNav from "./components/LandingNav";

class Tutorial extends Component {
    render() {
        return (
            <div>
                <LandingNav/>
                <div className={'nav-spacer'}/>

                <p className={'landing-header-text'} id={'text'}>
                    <span className={'underline--magical'}>How it works.</span>
                </p>

                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583565009/UserFluent/data-monster_odylhr.svg'} alt={'ai-data-illustration'} className={'how-it-works-img'}/>

                <p className={'landing-subheader-text'}>
                    Coming soon.
                </p>

            </div>
        )
    }
}
export default Tutorial;