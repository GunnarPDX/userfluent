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
            </div>
        )
    }
}
export default Tutorial;