import './dash.scss'
import React, {Component} from 'react'

import LandingNav from '../../static/components/LandingNav';
import ProjectSideNav from "./components/ProjectSideNav";
import { Link } from 'react-router-dom';
import axios from "axios";
import Post from "../../posts/components/Post";

class ProjectDash extends Component {

    state = {
        posts: []
    };

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // NOTE MAKE THIS AXIOS

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

                                    Name: {post.title}
                                    <br/>
                                    <br/>
                                    Uploaded: {post.time}
                                    <br/>
                                    <br/>

                                    <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                        Edit
                                    </button>
                                    <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                        View Project
                                    </button>
                                    <button className={'button is-fullwidth dashboard-project-button grey-btn'}>
                                        View Tests
                                    </button>
                                    <button className={'button is-fullwidth dashboard-project-button green-btn'}>
                                        + Start Testing
                                    </button>

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
                {/*
                <LandingNav/>
                <div className={'nav-spacer'}/>
                */}

                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    {this.renderPosts() }

                    <div className={'new-project-container'}>

                        <Link to={'/posts/new'}>
                            <button className={'button is-large project-new-button'}>
                                + New project
                            </button>
                        </Link>


                    </div>



                </div>
            </div>
        )
    }
}

export default ProjectDash;