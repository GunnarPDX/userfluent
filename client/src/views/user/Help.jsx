import React, { Component } from 'react';
import ProjectSideNav from "./dashboard/components/ProjectSideNav";

class Help extends Component {
    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    Help

                </div>
            </div>
        )
    }
}

export default Help;