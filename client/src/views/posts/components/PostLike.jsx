
// PostLike is a likes component which allows the user to like a post

import React, { Component } from 'react'
import axios from "axios";

class PostLike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.liked,
            likes: this.props.likes,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');

        // Fix axios issue??

        /*
        axios.put(`/api/v1/posts/like/${this.props.post_id}`, {headers: {'Content-Type': 'application/json', 'access-token': token, 'client': client, 'uid': uid}})
        */
        fetch(`/api/v1/posts/like/${this.props.post_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
                'client': client, 'uid': uid
            },
            redirect: "error"
        })
            .then(res => res.text())
            .then(res => console.log(res));

        if(this.state.liked === "liked"){
            this.setState({
                likes: --this.state.likes,
                liked: "unliked"
            });
        }
        else{
            this.setState({
                likes: ++this.state.likes,
                liked: "liked"
            });
        }
    }

    render() {
        const label = this.state.liked === "liked" ? "https://res.cloudinary.com/dmqtrnawm/image/upload/v1579927642/UserFluent/post-icons/star-full-light-grey_yfksj4.svg" : "https://res.cloudinary.com/dmqtrnawm/image/upload/v1579927642/UserFluent/post-icons/star-empty-light-grey_bbzziy.svg";
        const likes = this.state.likes;
        return (
            <div>
                <a className="" onClick={this.handleClick}>
                    <img src={label} alt={"like"} className={"post-like-icon"}/>
                </a>
                &nbsp; {likes}
            </div>
        )
    }

}
export default PostLike