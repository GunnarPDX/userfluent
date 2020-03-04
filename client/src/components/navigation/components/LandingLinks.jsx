import '../navigation.scss';

import React from "react";
import {Link} from "react-router-dom";

const LandingLinks = () => {
    return (
        <div className={"level-item lower-nav-center-items"}>
            <Link to={'/'} className={"lower-nav-center-option"}>
                Home
            </Link>
            <Link to={'/about'} className={"lower-nav-center-option"}>
                About
            </Link>
            <Link to={'/pricing'} className={"lower-nav-center-option"}>
                Pricing
            </Link>
            <Link to={'/tutorial'} className={"lower-nav-center-option"}>
                How It Works
            </Link>
            <Link to={'/explore'} className={"lower-nav-center-option"}>
                Explore
            </Link>
        </div>
    )
};

export default LandingLinks;