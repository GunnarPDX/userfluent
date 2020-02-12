import './forms.scss'
import './packages.scss'
import React, { Component } from 'react'

class PackageSelect extends Component {
    state = {
        package: 'none',
    };

    render() {
        return(
            <div className={'settings-container'}>

                <div className={'package-container'}>
                    Project - $50
                </div>

                <div className={'package-container'}>
                    Startup - $150
                </div>

                <div className={'package-container'}>
                    Growth - $500
                </div>

                <div className={'package-container'}>
                    Enterprise - price upon request
                </div>

            </div>
        )
    }
}

export default PackageSelect;