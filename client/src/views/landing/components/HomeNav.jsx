
//

import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react';

class HomeNav extends Component {
    render() {
        return (
            <div className={"lower-nav-bar"}>


                <div className={"level is-mobile nav-height"}>

                    <div className={"level-item lower-nav-center-items"}>
                        <a className={"lower-nav-center-option"}>
                            Home
                        </a>
                        <a className={"lower-nav-center-option"}>
                            Explore
                        </a>
                        <a className={"lower-nav-center-option"}>
                            Pricing
                        </a>
                        <a className={"lower-nav-center-option"}>
                            About
                        </a>
                        <a className={"lower-nav-center-option"}>
                            How It Works
                        </a>
                    </div>

                </div>


            </div>
        )
    }
}

export default HomeNav;