import '../dash.scss'
import React from 'react'
import {Link} from "react-router-dom";

const ProjectSideNav = () => {
    return (
        <div className={'dash-side-nav'}>


            <Link to={'/dashboard'} className={'side-nav-link'}>
                <div className={'side-nav-row'}>
                    <span><img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583807128/UserFluent/dashboard_gn05qq.svg'} className={'side-nav-icon'}/></span>
                    Dashboard
                </div>
            </Link>

            <Link to={'/profile'} className={'side-nav-link'}>
                <div className={'side-nav-row'}>
                    <span><img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583807128/UserFluent/user-dash-icon_atrsle.svg'} className={'side-nav-icon'}/></span>
                    Profile
                </div>
            </Link>

            <Link to={'/billing'} className={'side-nav-link'}>
                <div className={'side-nav-row'}>
                    <span><img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583807128/UserFluent/billing-dash-icon_km7fnf.svg'} className={'side-nav-icon'}/></span>
                    Billing
                </div>
            </Link>

            <Link to={'/settings'} className={'side-nav-link'}>
                <div className={'side-nav-row'}>
                    <span><img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583804170/UserFluent/settings-dash-icon_ynmimx.svg'} className={'side-nav-icon'}/></span>
                    Settings
                </div>
            </Link>

            <Link to={'/help'} className={'side-nav-link'}>
                <div className={'side-nav-row'}>
                    <span><img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583804170/UserFluent/help-dash-icon_j2f0i4.svg'} className={'side-nav-icon'}/></span>
                    Help
                </div>
            </Link>


        </div>
    )
};

export default ProjectSideNav;