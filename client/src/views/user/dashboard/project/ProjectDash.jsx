import '../dash.scss'
import React, {Component} from 'react'
import ProjectSideNav from "../components/ProjectSideNav";

class ProjectDash extends Component {


    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>
                    Project Dash
                </div>
            </div>
        )
    }
}

export default ProjectDash;