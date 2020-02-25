
// GettingStarted is the landing page for new users, this view
// will help users get started by offering a brief tutorial and
// prompting them to fill out some useful info.


import './welcome.scss'

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// ProfileSettings contains the form for adding/updating the users profile
import ProfileSettings from "../user/ProfileSettings";

// Tutorial contains the app usage instructions
import Tutorial from "../static/Tutorial";

class GettingStarted extends Component {

    render() {
        return (
            <div>
                <div className={'welcome-banner'}>
                    <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1579749006/UserFluent/illustrations/Welcome._a5fzcl.svg'} alt={'Welcome'} className={'welcome-image'}/>
                </div>

                <div className={"content-spacer"}/>

                <div className={'welcome-content-header'}>
                    Lets get started...
                </div>

                <ProfileSettings/>

                <div className={'welcome-content-header'}>
                    How to use.
                </div>

                <Tutorial/>

                <div className={"content-spacer"}/>
                <div className={"content-spacer"}/>

                <div className={'welcome-content-header'}>
                    Ready?
                </div>

                <Link to={'/'} className={'welcome-finished-button'}>
                    Take me to the app!
                </Link>


                <div className={"content-spacer"}/>
                <div className={"content-spacer"}/>

            </div>

        )
    }
}

export default GettingStarted