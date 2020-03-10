import React, {Component} from "react";
import ProjectSideNav from "./dashboards/components/ProjectSideNav";
import ProfileSettings from "./ProfileSettings";

class Settings extends Component {
    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>


                    <ProfileSettings/>


                </div>
            </div>
        )
    }
}

export default Settings;