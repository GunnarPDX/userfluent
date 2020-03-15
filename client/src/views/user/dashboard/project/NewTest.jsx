import '../dash.scss'
import "../../../../components/forms/forms.scss";
import React, {Component} from 'react'
import ProjectSideNav from "../components/ProjectSideNav";
import PackageSelect from "../../../../components/forms/packages/PackageSelect";


class NewTest extends Component {


    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    <div className={'top-banner'}>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582445518/UserFluent/Let_s_find_out_what_the_users_think_aehr3j.svg'} alt={'lets find out wat the users think'} className={'banner-image'}/>
                    </div>

                    <div className={"content-spacer"}/>

                    <div>
                        <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582347785/UserFluent/user-testing-illustration_hoitys.svg'} alt={'testing'}/>
                    </div>

                    <PackageSelect/>
                </div>
            </div>
        )
    }
}

export default NewTest;