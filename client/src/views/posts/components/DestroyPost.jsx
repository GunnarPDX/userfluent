
// Allows users to delete their own posts.

import React, { Component } from 'react'
import axios from "axios";

class DestroyPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            owner: (this.props.owner === 'true'),
            post_id: this.props.post_id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        /*
        axios.delete(`/api/v1/posts/${this.props.post_id}`, {headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}})
        */
        fetch(`/api/v1/posts/${this.props.post_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token' : token,
                'client':client,
                'uid': uid
            },
            redirect: "error"
        })
            .then(res => {
                // Redirect to root since post is gone now
                this.props.history.push('/')
            });
    }

    // Only display if the user is the owner of the post, obviously this is also validated on the backend like everything else
    render() {
        if(this.state.owner) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Delete</button>
                </div>
            )
        }
        else return null;
    }

}
export default DestroyPost