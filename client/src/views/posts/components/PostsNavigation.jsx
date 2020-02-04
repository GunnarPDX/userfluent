import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostsNavigation extends Component {

    /*

    Page num needs to be reset between category changes!!!

    */

    state = {
        category: '',
        platform: '',
        rank: ''
    };

    handleRankChange = (e) => {
        const currentComponent = this;
        this.setState({ rank: e.target.value }, function () {
            this.props.filterRank(currentComponent.state.rank);
        });
    };

    componentDidMount() {
        let dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener("click", function(){ dropdown.classList.toggle('is-active'); });
    }

    render() {

        return (
            <div>
                <nav className={"lower-nav-bar"}>
                    <div className={"level is-mobile nav-height"}>

                        <div className={"dropdown level-left"}>
                            <div className="dropdown-trigger">
                                <div className={"lower-nav-ellipsis lower-posts-dropdown"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578191967/UserFluent/Navbar%20Upper%20Icons/meatballs_ahyp2e.svg"} alt={"ellipsis"} className={""}/>
                                </div>
                            </div>
                            <div className="dropdown-menu lower-nav-dropdown-menu-gap" id="dropdown-menu6" role="menu">
                                <div className="dropdown-content post-dropdown-theme">
                                    {/* Mostly dead links right now */}
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

                        <div className={"level-right"}>

                            <div className={"lower-nav-friends"}>

                                <div className="field">
                                    <div className="control">
                                        <div className="select is-rounded is-charcoal is-small">
                                            <select onChange={this.handleRankChange} id={'rank-select'}>
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