import '../posts.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PostLike from '../components/PostLike';
import { withRouter } from 'react-router-dom';

function handleShowPost(props) {
    props.history.push('/show/post/' + props.post.id);
}

function handleShowProfile(e, props) {
    e.preventDefault();
    e.stopPropagation(); //to stop lower divs onClick event
    //e.nativeEvent.stopImmediatePropagation;
    //e.stopImmediatePropagation();
    props.history.push('/show/userprofile/' + props.post.user.id);
}

const Post = (props) => {

    return(
        <div>
            <div className={'post-grid-item'}>
                <div className={'post-wrapper'}>
                    <div onClick={() => {handleShowPost(props)}} className={'cursor-pointer'}>
                        <div className={'post-image-placeholder'}>
                            <img src={props.post.thumbnail} alt={'post image'} className={'image-fade'}/>
                            <span className={'tumbnail-hover-info'}>
                                <span className={'post-hover-avatar'}>
                                    <img src={props.post.user.avatar_small} alt={'profile avatar'} className={'post-hover-avatar'}/>
                                </span>
                                <a onClick={(e) => {handleShowProfile(e, props)}} className={'post-hover-username'}>
                                    By: {props.post.user.username}
                                </a>
                            </span>
                            <div className={'post-hover-title-container'}>
                                <div className={'post-hover-title'}>{props.post.title}</div>
                            </div>
                        </div>
                    </div>
                    <div className={'level is-mobile post-analytics'}>
                        <div className={'level-left'}>
                            <div className={'level-item'}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1579927642/UserFluent/post-icons/ellip-light-grey_exego5.svg'} alt={'views'}/>
                            </div>
                        </div>
                        <div className={'level-right'}>
                            <div className={'level-item views data'}>
                                <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1579927642/UserFluent/post-icons/views-light-grey_gvcnzn.svg'} alt={'views'} className={'views-icon'}/>
                                &nbsp; {props.post.views}
                            </div>
                            <div className={'level-item likes'}>
                                <PostLike post_id={props.post.id} likes={props.post.likes} liked={props.post.liked}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Post);