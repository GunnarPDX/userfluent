import "./auth.scss";
import '../forms/forms.scss'
import React, { Component } from 'react';
import LoadingButton from '../loader/LoadingButton';
import { runValidityCheck } from '../helpers/InputVerification'
import axios from "axios";


class LogIn extends Component {

    state = {
        email: '',
        password: '',
        loading: 'false',
    };

    handleChange = (e) => {

        let newValue = e.target.value;
        let key = e.target.name;
        this.setState({
            [key]: newValue,
            loading: 'false'
        });
    };

    isFormValid = () => {

        let fields = [
            {
                'id' : 'email',
                'validationType'   : 'email',
                'data' : this.state.email
            },
            {
                'id' : 'password',
                'validationType'   : 'password',
                'data' : this.state.password,
            },
        ];

        return runValidityCheck(fields);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.isFormValid()) return;

        this.setState({loading: 'true'});

        let currentComponent = this;
        axios.post('/api/v1/auth/sign_in', {email: this.state.email, password: this.state.password})
            .then((res) => {
                console.log(res);
                window.localStorage.setItem('access-token', res.headers['access-token']);
                window.localStorage.setItem('client', res.headers['client']);
                window.localStorage.setItem('uid', res.headers['uid']);
                currentComponent.setState({loading: 'success'});
                window.location.reload(false);
            })
            .catch(function(err) {
                currentComponent.setState({loading: 'failed'});
                console.log(err);
            });
    };

    render() {
        let props = {
            loading: this.state.loading,
            form: 'login-form',
            button_title: 'Log In',
        };

        if(!this.props.show){return null;}
        return (
            <div className={'auth-modal-box'}>
                <div className={'auth-modal'}>

                    <button onClick={this.props.onClose} className={'auth-modal-close-button'}>
                        &times;
                    </button>

                    <h1 className={'auth-modal-header'}>Log In</h1>

                    <a className={'auth-modal-link'} onClick={this.props.toggleModal}>
                        Don't have an account?
                    </a>

                    <form onSubmit={this.handleSubmit.bind(this)} id={'login-form'}>

                        <div className={'uf-modal-form-item-row'}>
                            <input type={'text'} name={'email'} placeholder={'Account Email'} className={'uf-modal-form-field'} onChange={this.handleChange} id={'email'}/>
                        </div>

                        <div className={'uf-modal-form-item-row'}>
                            <input type={'password'} name={'password'} placeholder={'Account Password'} className={'uf-modal-form-field'} onChange={this.handleChange} id={'password'}/>
                        </div>

                    </form>

                    <a className={'auth-modal-link'}>
                        Forgot Password?
                    </a>

                    <div className={"uf-modal-button-container"}>
                        <LoadingButton {...props}/>
                    </div>

                </div>
            </div>
        )
    }
}
export default LogIn;