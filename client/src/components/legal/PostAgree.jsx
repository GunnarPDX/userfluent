import './legal.scss'
import '../forms/forms.scss'
import React, {Component} from 'react'
import CustomerTermsOfService from "./agreements/CustomerTermsOfService";

class PostAgree extends Component {

    state = {
        show: false,
        agreed: false
    };

    componentDidMount() {
    }

    showTerms = () => {
        this.setState({show: true});
    };

    render() {
        return (
            <div>

                <CustomerTermsOfService show={this.state.show}/>


                <div className={'toggle-row'}>

                    <div className="toggle-switch">
                        <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch"/>
                        <label className="toggle-switch-label" htmlFor="toggleSwitch">
                            <span className="toggle-switch-inner"></span>
                            <span className="toggle-switch-switch"></span>
                        </label>
                    </div>

                    <span className={'terms-text'}>
                    &nbsp;&nbsp; I agree to the:&nbsp;
                    <span onClick={this.showTerms} className={'terms-link terms-text'}>
                        terms of service.
                    </span>
                    </span>

                </div>

            </div>
        )
    }
}

export default PostAgree;
