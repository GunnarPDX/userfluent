import '../dash.scss'
import "../../../../components/forms/forms.scss";
import React, {Component} from 'react'
import ProjectSideNav from "../components/ProjectSideNav";
import PackageSelect from "../../../../components/forms/packages/PackageSelect";
import LoadingButton from "../../../../components/loader/LoadingButton";
import WYSIWYG from "../../../../components/forms/wysiwyg/WYSIWYG";


class NewTest extends Component {

    state = {
        loading: 'false',
        content: '',
        package: 0,
    };

    // Handle a content update for wysiwyg?
    contentUpdate = (data) => {
        this.setState({
            content: data,
        });
        //console.log(data);
    };

    packageUpdate = (option) => {
        this.setState({
            package: option
        });
    };

    render() {
        let props = {
            loading: this.state.loading,
            form: 'new-test-form',
            button_title: 'Submit New Test!',
        };
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    <form id={'new-test-form'}>

                        <div className={'top-banner'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582445518/UserFluent/Let_s_find_out_what_the_users_think_aehr3j.svg'} alt={'lets find out wat the users think'} className={'banner-image'}/>
                        </div>

                        <div className={"content-spacer"}/>

                        <div>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582347785/UserFluent/user-testing-illustration_hoitys.svg'} alt={'testing'}/>
                        </div>

                        <br/>
                        <br/>

                        <div className={'form-row-title'}>
                            Select a package
                        </div>

                        <PackageSelect/>
                        <br/>
                        <br/>
                        <br/>

                        <div className={'form-row-title'}>
                            Tell Us About What You Are Looking For
                        </div>

                        <WYSIWYG onUpdate={(data) => {this.contentUpdate(data)}}/>

                        <div className={'form-row-title'}>
                            All Done?
                        </div>

                    </form>

                    <div className={"new-post-container"}>
                        <LoadingButton {...props}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewTest;