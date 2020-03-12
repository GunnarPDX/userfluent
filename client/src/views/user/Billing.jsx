import React, { Component } from 'react';
import ProjectSideNav from "./dashboards/components/ProjectSideNav";

class Billing extends Component {
    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    Billing

                </div>
            </div>
        )
    }
}

export default Billing;