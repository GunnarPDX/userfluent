import '../forms.scss'
import React, { Component } from 'react';

class PlatformSelect extends Component {
    render(){
        return (
            <div>
                <div className="field">
                    <div className="control">
                        <div className="select is-fullwidth is-charcoal">
                            <select name={'platform'} onChange={this.props.onSelect}>
                                <option value={''}>Select Platform</option>
                                <option value={'multiple'}>Multiple</option>
                                <option value={'web_app'}>Web App</option>
                                <option value={'web_static'}>Web Static</option>
                                <option value={'web_mobile'}>Web Mobile</option>
                                <option value={'desktop'}>Desktop</option>
                                <option value={'ios'}>IOS</option>
                                <option value={'android'}>Android</option>
                                <option value={'other'}>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlatformSelect;