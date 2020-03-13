// ShowProfile is a profile view that shows all of the users posts and their public info
// TODO: Update component name, ShowProfile -> Profile -- no longer a public view w/ :id routing

import '../../posts/posts.scss';
import './profile.scss';
import React, { Component } from 'react';

// SpringGrid manages the post tiles in a responsive manner
import { SpringGrid, makeResponsive } from 'react-stonecutter';

// ShowProfileInfo displays the users public info such as social media handles
import ShowProfileInfo from '../components/ShowProfileInfo';

// Post is a component for each individual post tile
import ProjectSideNav from "../dashboard/components/ProjectSideNav";
import ProfileSettings from "../profile/ProfileSettings";

// Initialize the image spring grid
const Grid = makeResponsive(SpringGrid, {
    maxWidth: 1920,
    minPadding: 100
});

class ShowProfile extends Component {

    state = {
        posts: []
    };

    constructor(props) {
        super(props);
    }

    /*
    componentDidMount() {
        // NOTE MAKE THIS AXIOS

        // Get user id from URL to fetch the corresponding resource data
        let user_id = this.props.match.params.id;
        fetch('/api/v1/users/' + user_id)
            .then(posts => posts.json())
            .then(posts => {
                this.setState({
                    posts: posts
                })
            })
    }


    renderPosts = () => {
        return this.state.posts.map(post => {
            let props = {
                post: post
            };
            return (
                <li key={post.id}>
                    <Post {...props}/>
                </li>
            )
        })
    };
    */

    render() {
        return (
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>


                    <div className={'row'}>
                        <ShowProfileInfo/>

                        <ProfileSettings/>
                    </div>
                    <div className={'content-spacer'}/>



                </div>
            </div>
        )
    }
}

export default ShowProfile