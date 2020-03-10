import './dash.scss'
import React, {Component} from 'react'

import LandingNav from '../../static/components/LandingNav';
import ProjectSideNav from "./components/ProjectSideNav";
import { Link } from 'react-router-dom';

class ProjectDash extends Component {

    render() {
        return(
            <div>
                {/*
                <LandingNav/>
                <div className={'nav-spacer'}/>
                */}

                <ProjectSideNav/>
                <div className={'dash-content-container'}>



                    <div className={'project-header'}>

                        <Link to={'/posts/new'}>
                            <button className={'button is-large project-new-button'}>
                                + New project
                            </button>
                        </Link>


                    </div>



                </div>
            </div>
        )
    }
}

export default ProjectDash;