import './dash.scss'
import React, {Component} from 'react'

import LandingNav from '../../static/components/LandingNav';
import ProjectSideNav from "./components/ProjectSideNav";
import { Link } from 'react-router-dom';
import axios from "axios";
import Post from "../../posts/components/Post";
import ProgressBar from 'react-customizable-progressbar'
import ShowProfileInfo from "../profile/components/ShowProfileInfo";
import UpperDashNav from "./components/UpperDashNav";

class MainDash extends Component {

    state = {
        posts: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        axios.get('/api/v1/user/posts', {
            headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
        })
            .then(data => data)
            .then(data => {
                console.log('getting users posts');
                console.log(data);
                this.setState({
                    posts: data.data
                })
            })
            .catch(function(err) {
                console.log(err);
            });
    }


    renderPosts = () => {
        return this.state.posts.map(post => {
            let props = {
                post: post
            };
            return (
                <div key={post.id} className={'dash-project-container'}>
                    <div className={'level'}>
                        <div className={'level-left'}>

                            <div className={'level-item'}>
                                <Post {...props}/>
                            </div>

                            <div className={'level-item'}>
                                <div className={'dashboard-project-info-box'}>

                                    Name: <span className={'dash-small-text'}>{post.title}</span>
                                    <br/>
                                    <br/>
                                    Uploaded: <span className={'dash-small-text'}>{post.time}</span>
                                    <br/>
                                    <br/>

                                    <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                        Edit
                                    </button>

                                    <Link to={'/post/' + props.post.id}>
                                        <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                            View Project
                                        </button>
                                    </Link>

                                    <Link to={'/project'}>
                                        <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                            View Tests
                                        </button>
                                    </Link>

                                    <Link to={'/test/new'}>
                                        <button className={'button is-fullwidth dashboard-project-button green-btn'}>
                                            + Start Testing
                                        </button>
                                    </Link>

                                </div>
                            </div>

                            <div className={'level-item'}>
                                <div className={'dashboard-progress-info-box'}>

                                <ProgressBar
                                    progress={0}
                                    radius={100}
                                    strokeColor={'#02E6B7'}
                                >
                                    <div className="indicator">
                                        <div>0%</div>
                                    </div>
                                </ProgressBar>

                                <div>
                                    No tests in progress.
                                </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })
    };


    render() {
        return(
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>
                    <UpperDashNav/>

                    {this.renderPosts() }



                </div>
            </div>
        )
    }
}

export default MainDash;