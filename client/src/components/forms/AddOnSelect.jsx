import './forms.scss'
import './packages.scss'
import React, {Component, useCallback} from 'react'

class AddOnSelect extends Component {
    state = {
        package: 'none',
        option1: false,
        option2: false,
        option3: false
    };

    getClassNames = (option) => {
        if(option === 1 && this.state.option1) return (' option-selected');
        else if (option === 2 && this.state.option2) return (' option-selected');
        else if (option === 3 && this.state.option3) return (' option-selected');
    };

    setPackage = (option) => {
        this.setState({
            package: option,
            option1: (option === 1) ? !this.state.option1 : this.state.option1,
            option2: (option === 2) ? !this.state.option2 : this.state.option2,
            option3: (option === 3) ? !this.state.option3 : this.state.option3,
        });

    };

    render() {
        return(
            <div className={'new-post-container'}>
                <div className={'add-ons-row'}>


                    <div className={'add-on-container add-on-1 ' + this.getClassNames(1)} id={'add-on-1'} onClick={() => this.setPackage(1)}>
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

                    <div className={'add-on-container add-on-2 '  + this.getClassNames(2)} id={'add-on-2'} onClick={() => this.setPackage(2)}>
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

                    <div className={'add-on-container add-on-3 '  + this.getClassNames(3)} id={'add-on-3'} onClick={() => this.setPackage(3)}>
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