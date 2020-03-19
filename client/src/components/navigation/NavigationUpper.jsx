import "./navigation.scss";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogIn from "../auth/LogIn";
import Registration from "../auth/Registration";
import axios from "axios";

class NavigationUpper extends Component {

    state = {
        current_user: [],
        logged_in: false,
        showLogIn: false,
        showRegistration: false
    };

    handleLogout = () => {
        /*
        const link = document.createElement('a');
        link.setAttribute('href', '/users/sign_out');
        link.setAttribute('rel', 'nofollow');
        link.setAttribute('data-method', 'delete');
        document.body.appendChild(link);
        link.click();
        */

        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');

        setTimeout(function(){ window.location.reload(false); }, 300);
    };


    componentDidMount() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');

        axios.get('/api/v1/user', {
            headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
        })
            .then(data => data)
            .then(data => {
                console.log(data);
                this.setState({
                    current_user: data.data,
                    logged_in: true,
                })
            })
            .catch((error) => {
                console.log('request failed');
                console.log(error)
            });
    }

    showLogIn = (e) => {
        this.setState({
            showLogIn: !this.state.showLogIn,
            showRegistration: false
        });
    };

    showRegistration = (e) => {
        this.setState({
            showRegistration: !this.state.showRegistration,
            showLogIn: false
        });
    };


    renderNavOptions = () => {
        if(this.state.logged_in){
            return (
                <div>
                    {this.renderNavControls()}
                </div>
            )
        } else {
            return (
                <div>

                    <li className={"nav-li nav-log-in"}>
                        <div className="field has-addons">
                            <p className="control">
                                <button className={"button login-color is-small "} onClick={this.showRegistration}> Sign Up </button>
                            </p>
                            <p className="control">
                                <button className={"button login-color is-small "} onClick={this.showLogIn}> Log In </button>
                            </p>
                        </div>
                    </li>

                    <LogIn show={this.state.showLogIn} toggleModal={this.showRegistration} onClose={this.showLogIn} />
                    <Registration show={this.state.showRegistration} toggleModal={this.showLogIn} onClose={this.showRegistration} />
                </div>
            )
        }
    };

    renderNavControls = () => {
        return (
            <div>

                <li className={"nav-li"}>
                    <div className={"uf-dropdown"}>

                        {/*}
                        <Link to={'/dashboard'} className={"dropbtn"}>
                            <img src={this.state.current_user.avatar_small} alt={" "} className={"profile"}/>
                        </Link>
                        */}
                        <div className={"nav-li-a"}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1584592375/UserFluent/drop-menu/hamburger_iqhruf.svg'} className={'nav-icon'}/>
                        </div>

                        <div className={"uf-dropdown-content"}>
                            <div className={"nav-text"}> Signed in as: {this.state.current_user.username}</div>

                            <div className={"dropdown-divider"}/>

                            <Link to={'/dashboard'} className={"nav-option nav-text"}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1584573074/UserFluent/drop-menu/dash-light_urwetb.svg'} className={'nav-svg'}/>
                                Dashboard
                            </Link>

                            <Link to={'/profile'} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1584573629/UserFluent/drop-menu/profile-light_omjzyn.svg"} className={"nav-svg"} alt={"profile"}/>
                                Profile
                            </Link>

                            <Link to={'/billing'} className={"nav-option nav-text"}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1584573074/UserFluent/drop-menu/ballance-light_ut6kvj.svg'} className={'nav-svg'}/>
                                Billing
                            </Link>

                            <Link to={'/settings'} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1584573074/UserFluent/drop-menu/settings-light_my0lp5.svg"} className={"nav-svg"} alt={"settings"}/>
                                Settings
                            </Link>

                            <Link to={'/help'} className={"nav-option nav-text"}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1584573074/UserFluent/drop-menu/help-light_histyt.svg'} className={'nav-svg'}/>
                                Help
                            </Link>

                            <div className={"dropdown-divider"}/>

                            <Link to={'/'} onClick={this.handleLogout} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578171511/UserFluent/Navbar%20Upper%20Icons/nav-logout-light_h2amxe.svg"} className={"nav-svg"} alt={"logout"}/>
                                Sign Out
                            </Link>
                        </div>

                    </div>
                </li>

                <li className={"nav-li"}>
                    <Link to={'/dashboard'} className={"dropbtn"}>
                        <img src={this.state.current_user.avatar_small} alt={" "} className={"profile"}/>
                    </Link>
                    {/*}
                    <div className={"nav-li-a"}>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1584579237/UserFluent/drop-menu/menu_uuvwhd.svg'} className={'nav-icon'}/>
                    </div>
                    */}
                </li>

                <li className={"nav-li"}>
                    <Link to={'/'} className={"nav-li-a"}>
                        <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/notifications-off_dnzml3.svg"} alt={"Notifications"} className={"nav-icon"}/>
                    </Link>
                </li>
            </div>
        )
    };

    render() {
        return (
            <div>

                <div className="nav-bar">
                    <nav>
                        <ul className={"nav-ul"}>
                            <li className={"nav-left nav-li"}>
                                <Link to={'/'} className={"nav-li-a"}>
                                    {/*<img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/logo_tcvoi5.svg"} alt={"UserFluent"} className={"nav-logo"}/>*/}
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1580627677/UserFluent/uf-main-logo_yokkuj.svg"} alt={"UserFluent"} className={"nav-logo uf-main-logo"}/>
                                </Link>
                            </li>

                            {this.renderNavOptions()}

                            {/*
                            <li className={"nav-li"}>
                                <Link to={'/'} className={"nav-li-a"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/search_cwlm0f.svg"} alt={"Search"} className={"nav-icon"}/>
                                </Link>
                            </li>
                            */}

                        </ul>

                    </nav>
                </div>

                <div className={"nav-spacer"}>
                    &nbsp;
                </div>

            </div>
        );
    }
}

export default NavigationUpper;