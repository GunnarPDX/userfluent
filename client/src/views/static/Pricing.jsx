import "./static.scss"
import './pricing.scss'
import '../../components/forms/packages/packages.scss'
import React, { Component } from 'react';
import HomeNav from "../landing/components/HomeNav";
import BackdropLines from "./components/BackdropLines";

class Pricing extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>
                <BackdropLines/>
                Pricing


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

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Includes the following features
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - 5 User Testers</div>
                                <div className={'plan-bullets'}> ✔️ - Reviews Summary</div>
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
                                <span className={'plan-price-lg'}>1000</span>
                                <span className={'plan-price-sm'}>.00</span>
                            </p>
                        </div>

                        <div className={'button package-btn-2'}>
                            Purchase Startup Package
                        </div>

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Everything in the Trial Package plus
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - 50 User Testers</div>
                                <div className={'plan-bullets'}> ✔️ - Custom Surveys</div>
                                <div className={'plan-bullets'}> ✔️ - Survey Results</div>
                                <div className={'plan-bullets'}> ✔️ - AI Attention Mapping</div>
                                <div className={'plan-bullets'}> ✔️ - AI Affordance testing</div>
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

                        <div className={'package-row-divider'}/>

                        <div className={'package-features-subheader'}>
                            Everything in the Startup Package plus
                        </div>

                        <div className={'package-features-container'}>
                            <div className={'package-features-list'}>
                                <div className={'plan-bullets'}> ✔️ - Add custom stuff</div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default Pricing;