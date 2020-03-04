
//

import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingLinks from "../../../components/navigation/components/LandingLinks";

class LandingNav extends Component {
    render() {
        return (
            <div className={"lower-nav-bar"}>
                <div className={"level is-mobile nav-height"}>


                    <LandingLinks/>


                </div>
            </div>
        )
    }
}

export default LandingNav;