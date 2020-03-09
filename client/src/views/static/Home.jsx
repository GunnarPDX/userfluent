import './static.scss'
import React, { Component } from 'react';
import LandingNav from "./components/LandingNav";
import BackdropLines from "./components/BackdropLines";
import Footer from "../../components/navigation/Footer";

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
                                        Test your product with <span className={'underline--magical'}>real users.</span>&nbsp;
                                        Receive usage heat-maps, AI analytics, visually mapped usage patterns,
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
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583457696/UserFluent/ai-img_rjsbrd.svg'} alt={'AI problem solving'} className={'home-info-img level-item'}/>

                            <div className={'level-item'}>
                                <div>
                                    <p className={'landing-info-header-text'} id={'text'}>
                                        Automate your testing process.
                                    </p>
                                    <p className={'landing-info-subheader-text'}>
                                        Save time and money by automating your user testing with UserFluent.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'home-row-divider'}/>

                    <div className={'level'}>
                        <div className={'level-left'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583459279/UserFluent/pinpoint-problems_ph8pin.svg'} alt={'design is in our DNA'} className={'home-info-img level-item'}/>

                            <div className={'level-item'}>
                                <div>
                                    <p className={'landing-info-header-text'} id={'text'}>
                                        Pinpoint your users pains.
                                    </p>

                                    <p className={'landing-info-subheader-text'}>
                                        Test your product with real users, see how they use it and where they get stuck.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'home-row-divider'}/>

                    <div className={'level'}>
                        <div className={'level-left'}>
                            <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583514529/UserFluent/designDNA_tjbaqu.svg'} alt={'design is in our DNA'} className={'home-info-img level-item'}/>

                            <div className={'level-item'}>
                                <div>
                                    <p className={'landing-info-header-text'} id={'text'}>
                                        Design for your users.
                                    </p>

                                    <p className={'landing-info-subheader-text'}>
                                        We help you better understand your users so you can make more meaningful connections with them.
                                    </p>

                                    {/*
                                    <button className={'button'}>
                                        Learn more
                                    </button>
                                    */}

                                </div>
                            </div>

                        </div>
                        <div className={'level-right'}>

                        </div>
                    </div>
                </div>

                {/*<Footer/>*/}

            </div>
        )
    }
}

export default Home;