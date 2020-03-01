import "./static.scss"
import React, { Component } from 'react';
import HomeNav from "../landing/components/HomeNav";

class Pricing extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>
                Pricing
            </div>
        )
    }
}

export default Pricing;