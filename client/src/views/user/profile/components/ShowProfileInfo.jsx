// ShowProfileInfo displays the users public info such as social media handles.

import "../profile.scss"
import React, { Component } from 'react'
import axios from "axios";

// NOTE this component should be changed to a functional component with props passed in
class ShowProfileInfo extends Component {
    state = {
        current_user: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');

        axios.get('/api/v1/user', {
            headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
        })
            .then(data => data)
            .then(data => {
                console.log(data);
                this.setState({
                    current_user: data.data,
                    logged_in: true,
                })
            })
            .catch((error) => {
                console.log('request failed');
                console.log(error)
            });
    }

    renderUserInfo = () => {
        let user = this.state.current_user;
        return(
            <div className={"profile-info-nav"}>
                <div className={'level'}>
                    <div className={'profile-info-card'}>
                        <div className={'level-left'}>

                            <div className={"profile-avatar-container level-item"}>
                                <img src={user.avatar_large} alt={"user avatar"} className={"profile-avatar-large"}/>
                                <br/>
                                <div className={"profile-info-title"}>{user.username}</div>
                            </div>

                            <div className={'level-item'}>
                                <div className={'profile-text-col'}>
                                    <div className={"profile-info-text"}>
                                        <strong className={"profile-info-title"}>
                                            Name:
                                        </strong>
                                        &nbsp; {user.name}
                                    </div>
                                    <div className={"profile-info-text"}>
                                        <strong className={"profile-info-title"}>
                                            Location:
                                        </strong>
                                        &nbsp; {user.location}
                                    </div>
                                    <div className={"profile-info-text"}>
                                        <strong className={"profile-info-title"}>
                                            Work:
                                        </strong>
                                        &nbsp; {user.company}
                                    </div>
                                    <div className={"profile-info-text"}>
                                        <strong className={"profile-info-title"}>
                                            Contact:
                                        </strong>
                                        &nbsp; {user.contact}
                                    </div>
                                </div>

                                {/*
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Media:
                                    </strong>
                                    &nbsp; {user.media}
                                </div>
                                */}

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    };

    render() {
        return (
            <div>

                <div className={"row profile-info"}>

                    <h1>{this.renderUserInfo()}</h1>

                </div>

            </div>
        )
    }
}
export default ShowProfileInfo