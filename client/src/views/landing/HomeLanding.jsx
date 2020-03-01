
//

import './home.scss'
import '../../components/navigation/navigation.scss'
import React, { Component } from 'react';
import HomeNav from "./components/HomeNav";
import BackdropLines from "../static/components/BackdropLines";

class HomeLanding extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>

                <BackdropLines/>

                <div className={'row'}>

                    <div className={'columns'}>
                        <div className={'column'}>

                            <div className={'landing-header-container'}>
                                <div className={'landing-header-text-box'}>
                                    <p className={'landing-header-text'} id={'text'}>
                                        Great customer
                                        experience starts
                                        with human insight
                                    </p>
                                    <p className={'landing-subheader-text'}>
                                        See, hear and talk to your customers as they engage with your products, apps and messaging. Make better decisions. Build more customer-centric experiences.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={'column'}>

                            <div className={'landing-img-container'}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583034229/UserFluent/landing-img_imkr1f.svg'} alt={'porduct image'} className={'landing-preview-image'}/>
                            </div>

                        </div>
                    </div>

                </div>




            </div>
        )
    }
}

export default HomeLanding;