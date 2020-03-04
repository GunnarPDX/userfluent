import './static.scss'
import React, { Component } from 'react';
import LandingNav from "./components/LandingNav";
import BackdropLines from "./components/BackdropLines";

class Home extends Component {

    render() {
        return (
            <div>
                <LandingNav/>
                <div className={'nav-spacer'}/>

                <BackdropLines/>

                <div className={''}>
                    <div className={'level'}>
                        <div className={'level-left'}>
                            <div className={'landing-header-container'}>
                                <div className={'landing-header-text-box'}>
                                    <p className={'landing-header-text'} id={'text'}>
                                        Great user experiences
                                        start at <span className={'underline--magical'}>UserFluent.</span>
                                    </p>
                                    <p className={'landing-subheader-text'}>
                                        Test your product with <span className={'underline--magical'}>real users.</span> Receive heat-maps, AI analytics,
                                        survey results, user directed feedback, and accessibility, performance and
                                        discoverability reviews. Build a user-fluent experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'level-right'}>
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

export default Home;