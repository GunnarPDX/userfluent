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

                <div className={'row'}>
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
                                    <button className={'button is-large home-btn'}>
                                        Try it free
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={'level-right'}>
                            <div className={'landing-img-container'}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583445380/UserFluent/home-landing-img_vgtuwx.svg'} alt={'porduct image'} className={'landing-preview-image'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'home-row-divider'}/>

                    <div className={'level'}>
                        <div className={'level-left'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583457696/UserFluent/ai-img_rjsbrd.svg'} alt={'AI problem solving'} className={'design-dna'}/>
                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'home-row-divider'}/>

                    <div className={'level'}>
                        <div className={'level-left'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583459279/UserFluent/pinpoint-problems_ph8pin.svg'} alt={'design is in our DNA'} className={'design-dna'}/>
                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'home-row-divider'}/>

                    <div className={'level'}>
                        <div className={'level-left'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583455727/UserFluent/designDNA_cqdsbk.svg'} alt={'design is in our DNA'} className={'design-dna'}/>
                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;