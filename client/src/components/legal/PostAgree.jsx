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

                <p>
                    <input type={'checkbox'}/> I agree to the <span onClick={this.showTerms} className={'terms-link'}> terms of service.</span>
                </p>

            </div>
        )
    }
}

export default PostAgree;
