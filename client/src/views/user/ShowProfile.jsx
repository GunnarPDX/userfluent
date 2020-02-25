// ShowProfile is a profile view that shows all of the users posts and their public info

import '../posts/posts.scss';
import './profile.scss';
import React, { Component } from 'react';

// SpringGrid manages the post tiles in a responsive manner
import { SpringGrid, makeResponsive } from 'react-stonecutter';

// ShowProfileInfo displays the users public info such as social media handles
import ShowProfileInfo from './components/ShowProfileInfo';

// Post is a component for each individual post tile
import Post from '../posts/components/Post';

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

    render() {
        return (
            <div>

                <div className={'row'}>
                    <ShowProfileInfo user_id={this.props.match.params.id}/>
                </div>
                <div className={'content-spacer'}/>

                <div className={'row'}>
                    <Grid
                        component={'ul'}
                        columns={3}
                        columnWidth={370}
                        gutterWidth={20}
                        gutterHeight={20}
                        itemHeight={315}
                        springConfig={{ stiffness: 170, damping: 26 }}
                        className={'posts-container'}
                    >
                        {this.renderPosts()}
                    </Grid>
                </div>

            </div>
        )
    }
}

export default ShowProfile