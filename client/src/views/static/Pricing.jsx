import "./static.scss"
import './pricing.scss'
import '../../components/forms/packages/packages.scss'
import React, { Component } from 'react';
import LandingNav from "./components/LandingNav";
import BackdropLines from "./components/BackdropLines";

class Pricing extends Component {
    render() {
        return (
            <div>
                <LandingNav/>
                <div className={'nav-spacer'}/>


                <p className={'landing-header-text'} id={'text'}>
                    <span className={'underline--magical'}>Our pricing.</span>
                </p>


                {/*<img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1583395503/UserFluent/pricing_itgawz.svg'} alt={'pricing'} className={'pricing-header-image'}/>*/}


                <div className={'columns price-container'}>

                    <div className={'column price-column package-border-1'}>

                        <div className={'package-title-1'}>
                            Trial Package
                        </div>

                        <div>
                            <p className={'package-inline-text'}>
                                <span className={'plan-price-sm'}>$</span>
                                <span className={'plan-price-lg'}>0</span>
                                <span className={'plan-price-sm'}>.00</span>
                            </p>
                        </div>

                        <div className={'button package-btn'}>
                            Get Started For Free
                        </div>

                        <div className={'package-title-subheader'}>
                            1 time use free trial!
                        </div>

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Includes the following features
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - 10 User Testers</div>
                                <div className={'plan-bullets'}> ✔️ - Results Summary</div>
                                <div className={'plan-bullets'}> ✔️ - UX Reviews</div>
                                <div className={'plan-bullets'}> ✔️ - Usage Heatmaps</div>
                                <div className={'plan-bullets'}> ✔️ - User Feedback</div>
                                <div className={'plan-bullets'}> ✔️ - Survey Results</div>
                            </div>
                        </div>

                    </div>

                    <div className={'column price-column package-border-2'}>

                        <div className={'package-title-2'}>
                            Startup Package
                        </div>

                        <div>
                            <p className={'package-inline-text'}>
                                <span className={'plan-price-sm'}>$</span>
                                <span className={'plan-price-lg'}>999</span>
                                <span className={'plan-price-sm'}>.00</span>
                            </p>
                        </div>

                        <div className={'button package-btn-2'}>
                            Purchase Startup Package
                        </div>

                        <div className={'package-title-subheader'}>
                            Perfect for startups and small businesses.
                        </div>

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Everything in the Trial Package plus
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - 50 User Testers</div>
                                <div className={'plan-bullets'}> ✔️ - Custom Surveys</div>
                                <div className={'plan-bullets'}> ✔️ - AI Attention Mapping</div>
                                <div className={'plan-bullets'}> ✔️ - AI Affordance Testing</div>
                                <div className={'plan-bullets'}> ✔️ - AI Browser Testing</div>
                                <div className={'plan-bullets'}> ✔️ - Accessibility Review</div>
                                <div className={'plan-bullets'}> ✔️ - Performance Review</div>
                                <div className={'plan-bullets'}> ✔️ - SEO/Discoverability Review</div>
                            </div>
                        </div>

                    </div>

                    <div className={'column price-column package-border-3'}>

                        <div className={'package-title-3'}>
                            Enterprise Package
                        </div>

                        <div className={'plan-title-small'}>
                            price upon request
                        </div>

                        <div className={'button package-btn'}>
                            Contact Us
                        </div>

                        <div className={'package-title-subheader'}>
                            Bespoke solutions for large businesses.
                        </div>

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Everything in the Startup Package plus
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - Any Number of Users</div>
                                <div className={'plan-bullets'}> ✔️ - User Tester Profiles</div>
                                <div className={'plan-bullets'}> ✔️ - Custom Software Integration</div>
                                <div className={'plan-bullets'}> ✔️ - Access To UserFluent API</div>
                                <div className={'plan-bullets'}> ✔️ - Continuous Testing</div>
                                <div className={'plan-bullets'}> ✔️ - Anything Else You Can Think of!</div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default Pricing;