import "./static.scss"
import React, { Component } from 'react';
import BackdropLines from "./components/BackdropLines";
import HomeNav from "../landing/components/HomeNav";

class Tutorial extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>
                <BackdropLines/>

                This will get added when the app is further finished...
            </div>
        )
    }
}
export default Tutorial;