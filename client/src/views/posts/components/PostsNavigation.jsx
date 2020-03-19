
// PostsNavigation allows the user to select content categories and toggle search rank
// within the posts index, eg: sort by popular vs recent...

import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LandingLinks from "../../../components/navigation/components/LandingLinks";

class PostsNavigation extends Component {

    state = {
        category: '',
        platform: '',
        rank: ''
    };

    // Handle search rank toggle
    handleRankChange = (e) => {
        const currentComponent = this;
        this.setState({ rank: e.target.value }, function () {
            this.props.filterRank(currentComponent.state.rank);
        });
    };

    // Handle search rank toggle
    handlePlatformChange = (e) => {
        const currentComponent = this;
        this.setState({ platform: e.target.value }, function () {
            this.props.filterPlatform(currentComponent.state.platform);
        });
    };

    /*
    componentDidMount() {
        let dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener("click", function(){ dropdown.classList.toggle('is-active'); });
    }
    */

    render() {

        return (
            <div>
                <nav className={"lower-nav-bar"}>
                    <div className={"level is-mobile nav-height"}>

                        <div className={'lower-nav-right-pad hide-on-mobile'}/>

                        {/*
                        <div className={"dropdown level-left"}>
                            <div className="dropdown-trigger">
                                <div className={"lower-nav-ellipsis lower-posts-dropdown"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578191967/UserFluent/Navbar%20Upper%20Icons/meatballs_ahyp2e.svg"} alt={"ellipsis"} className={""}/>
                                </div>
                            </div>
                            <div className="dropdown-menu lower-nav-dropdown-menu-gap" id="dropdown-menu6" role="menu">
                                <div className="dropdown-content post-dropdown-theme">
                                    <div className="dropdown-item">
                                        <Link to={'/'}>News Feed</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Go Premium</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Stuff</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Help</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/about'}>About</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}

                        <LandingLinks/>

                        {/*
                        <div className={"level-item lower-nav-center-items"}>
                            <a onClick={() => {this.props.filterPlatform('')}} className={"lower-nav-center-option"}>
                                All
                            </a>
                            <a onClick={() => {this.props.filterPlatform('web_app')}} className={"lower-nav-center-option"}>
                                Web-App
                            </a>
                            <a onClick={() => {this.props.filterPlatform('web_static')}} className={"lower-nav-center-option"}>
                                Web-Static
                            </a>
                            <a onClick={() => {this.props.filterPlatform('web_mobile')}} className={"lower-nav-center-option"}>
                                Web-Mobile
                            </a>
                            <a onClick={() => {this.props.filterPlatform('desktop')}} className={"lower-nav-center-option"}>
                                Desktop
                            </a>
                            <a onClick={() => {this.props.filterPlatform('ios')}} className={"lower-nav-center-option"}>
                                IOS
                            </a>
                            <a onClick={() => {this.props.filterPlatform('android')}} className={"lower-nav-center-option"}>
                                Android
                            </a>
                            <a onClick={() => {this.props.filterPlatform('other')}} className={"lower-nav-center-option"}>
                                Other
                            </a>
                        </div>
                        */}

                        <div className={"level-right hide-on-mobile"}>

                            <div className={''}>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-charcoal is-small">
                                            <select onChange={this.handlePlatformChange} id={'rank-select'} className={'lower-nav-dropdown'}>
                                                <option value={''}>All</option>
                                                <option value={'web_app'}>Web-App</option>
                                                <option value={'web_static'}>Web-static</option>
                                                <option value={'web_mobile'}>Web-Mobile</option>
                                                <option value={'desktop'}>Desktop</option>
                                                <option value={'ios'}>IOS</option>
                                                <option value={'android'}>Android</option>
                                                <option value={'AR/VR'}>AR/VR</option>
                                                <option value={'web_app'}>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"lower-nav-left-pad"}>
                                <div className="field">
                                    <div className="control">
                                        <div className="select is-charcoal is-small">
                                            <select onChange={this.handleRankChange} id={'rank-select'} className={'lower-nav-dropdown'}>
                                                <option value={'recent'}>Recent</option>
                                                <option value={'popular'}>Popular</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </nav>

            </div>
        )
    }

}
export default PostsNavigation;