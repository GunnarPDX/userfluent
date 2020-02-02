import React, { Component } from 'react'
import axios from "axios";

class DestroyComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner_id: this.props.owner_id,
            session_user_id: this.props.session_user_id,
            comment_id: this.props.comment_id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        /*
        axios.delete(`/api/v1/comments/${this.props.comment_id}`, {headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}})
        */
        fetch(`/api/v1/comments/${this.props.comment_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token' : token,
                'client':client,
                'uid': uid
            },
            redirect: "error"
        })
            .then(res => res.text())
            .then(res => console.log(res))
            .then(res => {
                window.location.reload(false); {/* This should call function to update props in parent instead */}
            });
    }

    render() {
        console.log('owner: ' + this.state.owner_id + ' user: ' + this.state.session_user_id);
        if(this.state.owner_id === this.state.session_user_id) {
            return (
                <div>
                    <button className="button is-small comment-dropdown-button" onClick={this.handleClick}>Delete</button>
                </div>
            )
        }
        else{
            return null
        }
    }

}
export default DestroyComment