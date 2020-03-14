import '../dash.scss'
import React, {Component} from 'react'
import ProjectSideNav from "../components/ProjectSideNav";

class NewTest extends Component {


    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>
                    New Test
                </div>
            </div>
        )
    }
}

export default NewTest;