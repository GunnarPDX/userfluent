import "../profile.scss"
import React, { Component } from 'react'

class ShowProfileInfo extends Component {
    state = {
        current_user: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/api/v1/users/user_info/' + this.props.user_id)
            .then(current_user => current_user.json())
            .then(current_user => {
                this.setState({
                    current_user: current_user
                })
            });
    }

    renderUserInfo = () => {
        let user = this.state.current_user;
        return(
            <ul className={"profile-info-container"}>
                <li className={"profile-info-container-li"}>
                    <div className={"profile-avatar-container"}>
                        <img src={user.avatar_large} alt={"user avatar"} className={"profile-avatar-large"}/>
                        <br/>
                        <div className={"profile-info-title"}>{user.username}</div>
                    </div>
                </li>

                <li className={"profile-info-container-li"}>
                    <div className={"name-and-etc-container"}>
                        <ul>
                            <li>
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Name:
                                    </strong>
                                    &nbsp; {user.name}
                                </div>
                            </li>
                            <li>
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Location:
                                    </strong>
                                    &nbsp; {user.location}
                                </div>
                            </li>
                            <li>
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Work:
                                    </strong>
                                    &nbsp; {user.company}
                                </div>
                            </li>
                            <li>
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Contact:
                                    </strong>
                                    &nbsp; {user.contact}
                                </div>
                            </li>
                            <li>
                                <div className={"profile-info-text"}>
                                    <strong className={"profile-info-title"}>
                                        Media:
                                    </strong>
                                    &nbsp; {user.media}
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                {/*
                <li className={"profile-info-container-li"}>
                    <div className={"profile-bio-container"}>
                        <ul>
                            <li>
                                <div className={"profile-info-title"}>
                                    <strong className={"profile-info-title"}>
                                        Bio:
                                    </strong>
                                    &nbsp; {user.bio}
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                */}
            </ul>
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