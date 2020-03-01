
//

import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeNav extends Component {
    render() {
        return (
            <div className={"lower-nav-bar"}>


                <div className={"level is-mobile nav-height"}>

                    <div className={"level-item lower-nav-center-items"}>
                        <Link to={'/'} className={"lower-nav-center-option"}>
                            Home
                        </Link>

                        <Link to={'/explore'} className={"lower-nav-center-option"}>
                            Explore
                        </Link>

                        <Link to={'/pricing'} className={"lower-nav-center-option"}>
                            Pricing
                        </Link>
                        <Link to={'/about'} className={"lower-nav-center-option"}>
                            About
                        </Link>
                        <Link to={'/tutorial'} className={"lower-nav-center-option"}>
                            How It Works
                        </Link>
                    </div>

                </div>


            </div>
        )
    }
}

export default HomeNav;