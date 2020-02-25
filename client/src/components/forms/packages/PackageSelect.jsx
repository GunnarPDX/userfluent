import '../forms.scss'
import './packages.scss'
import React, { Component } from 'react'

class PackageSelect extends Component {
    state = {
        package: 'none',
        option1: false,
        option2: false,
        option3: false,
        option4: false
    };

    getClassNames = (option) => {
        if(option === 1 && this.state.option1) return (' option-selected');
        else if (option === 2 && this.state.option2) return (' option-selected');
        else if (option === 3 && this.state.option3) return (' option-selected');
        else if (option === 4 && this.state.option4) return (' option-selected');
    };

    setPackage = (option) => {
        this.setState({
            package: option,
            option1: (option === 1),
            option2: (option === 2),
            option3: (option === 3),
            option4: (option === 4)
        });
    };

    render() {
        return(
            <div className={'new-post-container'}>

                <div className={'package-container package-1 ' + this.getClassNames(1)} onClick={() => this.setPackage(1)}>
                    <div className={'plan-left'}>
                        <div className={'plan-title-1'}>
                            Project Package
                        </div>
                        <div>
                            <p className={'package-inline-text'}>
                                <span className={'plan-price-sm'}>$</span>
                                <span className={'plan-price-lg'}>29</span>
                                <span className={'plan-price-sm'}>.99</span>
                            </p>
                        </div>
                    </div>
                    <div className={'plan-left'}>
                        <div className={'plan-bullets'}>
                            - 8 User Testers
                        </div>
                        <div className={'plan-bullets'}>
                            - Access to UX Reviews
                        </div>
                        <div className={'plan-bullets'}>
                            - Access to Reviews Summary
                        </div>
                    </div>
                </div>

                <div className={'package-spacer'}/>

                <div className={'package-container package-2 ' + this.getClassNames(2)} onClick={() => this.setPackage(2)}>
                    <div className={'plan-left'}>
                        <div className={'plan-title-2'}>
                            Startup Package
                        </div>
                        <div>
                            <p className={'package-inline-text'}>
                                <span className={'plan-price-sm'}>$</span>
                                <span className={'plan-price-lg'}>99</span>
                                <span className={'plan-price-sm'}>.99</span>
                            </p>
                        </div>
                    </div>
                    <div className={'plan-left'}>
                        <div className={'plan-bullets'}>
                            - 30 User Testers
                        </div>
                        <div className={'plan-bullets'}>
                            - Access to User Tester Profiles
                        </div>
                        <div className={'plan-bullets'}>
                            - Project Package Benefits
                        </div>
                    </div>
                </div>

                <div className={'package-spacer'}/>

                <div className={'package-container package-3 ' + this.getClassNames(3)} onClick={() => this.setPackage(3)}>
                    <div className={'plan-left'}>
                        <div className={'plan-title-3'}>
                            Growth Package
                        </div>
                        <div>
                            <p className={'package-inline-text'}>
                                <span className={'plan-price-sm'}>$</span>
                                <span className={'plan-price-lg'}>249</span>
                                <span className={'plan-price-sm'}>.99</span>
                            </p>
                        </div>
                    </div>
                    <div className={'plan-left'}>
                        <div className={'plan-bullets'}>
                            - 75 User Testers
                        </div>
                        <div className={'plan-bullets'}>
                            - Custom Test Forms
                        </div>
                        <div className={'plan-bullets'}>
                            - Startup Package Benefits
                        </div>
                    </div>
                </div>

                <div className={'package-spacer'}/>

                <div className={'package-container package-4 ' + this.getClassNames(4)} onClick={() => this.setPackage(4)}>
                    <div className={'plan-left'}>
                        <div className={'plan-title-4'}>
                            Enterprise Package
                        </div>
                        <div className={'plan-title-small'}>
                            price upon request
                        </div>
                    </div>
                    <div className={'plan-left'}>
                        <div className={'plan-bullets'}>
                            - Any Number of User Testers
                        </div>
                        <div className={'plan-bullets'}>
                            - 100% Bespoke Testing
                        </div>
                        <div className={'plan-bullets'}>
                            - Growth Package Benefits
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PackageSelect;