import React, { Component } from 'react'
import axios from "axios";

class DestroyPost extends Component {

    constructor(props) {
        super(props);
        let bool = false;
        if(this.props.owner === 'true'){
            bool = true;
        }
        this.state = {
            owner: bool,
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
            .then(res => res)
            .then(res => {
                this.props.history.push('/')
            });
    }

    render() {
        if(this.state.owner) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Delete</button>
                </div>
            )
        }
        else{
            return null
        }
    }

}
export default DestroyPost