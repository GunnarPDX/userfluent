import './forms.scss'
import './packages.scss'
import React, { Component } from 'react'

class AddOnSelect extends Component {
    state = {
        package: 'none',
    };

    render() {
        return(
            <div className={'new-post-container'}>
                <div className={'add-ons-row'}>
                    <div className={'add-on-container add-on-1'}>
                        <div className={''}>
                            <div className={'plan-title-2'}>
                                Accessibility Review
                            </div>
                            <div>
                                <p className={'package-inline-text'}>
                                    <span className={'plan-price-sm'}>$</span>
                                    <span className={'plan-price-lg'}>39</span>
                                    <span className={'plan-price-sm'}>.99</span>
                                </p>
                            </div>
                        </div>
                        {/*
                        <div className={''}>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                        </div>
                        */}

                    </div>
                    <div className={'add-on-container add-on-2'}>
                        <div className={''}>
                            <div className={'plan-title-3'}>
                                Performance Review
                            </div>
                            <div>
                                <p className={'package-inline-text'}>
                                    <span className={'plan-price-sm'}>$</span>
                                    <span className={'plan-price-lg'}>39</span>
                                    <span className={'plan-price-sm'}>.99</span>
                                </p>
                            </div>
                        </div>
                        {/*
                        <div className={''}>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                            <div className={''}>
                                Lorem Ipsum
                            </div>
                        </div>
                        */}

                    </div>
                    <div className={'add-on-container add-on-3'}>
                        <div className={''}>
                            <div className={'plan-title-4'}>
                                SEO Review
                            </div>
                            <div>
                                <p className={'package-inline-text'}>
                                    <span className={'plan-price-sm'}>$</span>
                                    <span className={'plan-price-lg'}>39</span>
                                    <span className={'plan-price-sm'}>.99</span>
                                </p>
                            </div>
                            {/*
                            <div className={''}>
                                <div className={''}>
                                    Lorem Ipsum
                                </div>
                                <div className={''}>
                                    Lorem Ipsum
                                </div>
                                <div className={''}>
                                    Lorem Ipsum
                                </div>
                            </div>
                            */}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AddOnSelect;