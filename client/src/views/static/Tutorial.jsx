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

                This will get added when the app is further finished...
            </div>
        )
    }
}
export default Tutorial;