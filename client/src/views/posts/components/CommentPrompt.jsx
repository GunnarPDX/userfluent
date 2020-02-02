import React, { Component } from 'react'
import LoadingButton from "../../../components/loader/LoadingButton";
import axios from "axios";

class CommentPrompt extends Component {

    state = {
        content: '',
        post_id: '',
        loading: 'false',
    };

    handleChange = e => {
        let newValue = e.target.value;
        let key = e.target.name;
        this.setState({
            [key]: newValue,
            post_id: this.props.post_id,
            loading: 'false'
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let currentComponent = this;

        this.setState({loading: 'true'});

        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        axios.post('/api/v1/comments', {comment: {content: this.state.content, post_id: this.state.post_id}},
        {headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}}
        )
            .then( data => data)
            .then( data => {
                console.log(data);
                this.setState({loading: 'success'});
                window.location.reload(false); {/* This should call callback function to update props in parent instead */}
            })
    };

    renderForm = () => {

        let props = {
            loading: this.state.loading,
            form: 'comment-form',
            button_title: 'submit',
        }

        return(
            <form onSubmit={this.handleSubmit.bind(this)} id="comment-form">
                <div className="comment-prompt-box">
                    <p>
                        <textarea
                        name="content"
                        rows="8"
                        onChange={this.handleChange}
                        placeholder={"Type here to create a comment."}
                        className="comment-text-area"
                        />
                    </p>
                    <LoadingButton {...props}/>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

export default CommentPrompt