import "./static.scss"
import React, { Component } from 'react';
import HomeNav from "../landing/components/HomeNav";
import BackdropLines from "./components/BackdropLines";

class Pricing extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>
                <BackdropLines/>
                Pricing
            </div>
        )
    }
}

export default Pricing;