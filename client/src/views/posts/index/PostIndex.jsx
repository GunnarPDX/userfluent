
// PostsIndex shows all projects.

import "../posts.scss";
import React, { Component } from 'react'
import { SpringGrid, makeResponsive } from 'react-stonecutter';
import axios from "axios";

// PostsNavigation is a component that allows the user to select content categories and toggle search rank
import PostsNavigation from "../components/PostsNavigation";

// Post is a component for the post image tiles
import Post from '../components/Post'

const Grid = makeResponsive(SpringGrid, {
    maxWidth: 1920,
    minPadding: 100
});

class PostIndex extends Component {
  state = {
    posts: [],
    pagy: [],
    page: 1,
    query: '',
    category: '',
    platform: '',
    rank: '',
  };

  componentDidMount() {
      const token = localStorage.getItem('access-token');
      const client = localStorage.getItem('client');
      const uid = localStorage.getItem('uid');
      axios.get(`/api/v1/posts?page=${this.state.page}&query=${this.state.query}&platform=${this.state.platform}&rank=${this.state.rank}`, {
          headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
      })
          .then(data => data)
          .then(data => {
              console.log(data);
              this.setState({
                  posts: data.data.content,
                  pagy: data.data.page_data
              })
          })
          .catch(function(err) {
              console.log(err);
          });
  }

  // Reload the index after content category/rank change or search
  reloadIndex = () => {
      const token = localStorage.getItem('access-token');
      const client = localStorage.getItem('client');
      const uid = localStorage.getItem('uid');
      axios.get(`/api/v1/posts?page=${this.state.page}&query=${this.state.query}&platform=${this.state.platform}&rank=${this.state.rank}`, {
          headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
      })
          .then(data => data)
          .then(data => {
              console.log(data);
              this.setState({
                  posts: data.data.content,
                  pagy: data.data.page_data
              })
          })
          .catch(function(err) {
              console.log(err);
          });
  };

  // Handle next page action
  handleNext = () => {
      if(this.state.page < this.state.pagy.pages){
          const currentComponent = this;
          this.setState({
              page: ++this.state.page
          }, function () {
              currentComponent.reloadIndex();
          });
      }
  };

  // Handle previous page action
  handlePrevious = () => {
      if(this.state.page > 1){
          const currentComponent = this;
          this.setState({
              page: --this.state.page
          }, function () {
              currentComponent.reloadIndex();
          });
      }
  };

  // Handle platform category change
  handlePlatform = (platform) => {
      const currentComponent = this;
      this.setState({
          platform: platform,
          page: 1
      }, function () {
          currentComponent.reloadIndex();
      });
  };

  // Handle rank change
  handleRank = (rank) => {
      console.log('called');
      const currentComponent = this;
      this.setState({
          rank: rank
      }, function () {
          console.log(rank);
          currentComponent.reloadIndex();
      });
  };

  renderPageNavigation = () => {
      const currentPage = this.state.page;
      //const lastPage = this.state.pagy.pages;


      if(this.state.pagy.pages === 1){
          return null;
      } else return (
          <div className={'posts-pagination-container'}>
              <div className={'content-spacer'}/>
              <nav className={'pagination is-centered is-rounded'} role={'navigation'}>
                  <a className={'pagination-previous'} onClick={this.handlePrevious}>Back</a>
                  <a className={'pagination-next'} onClick={this.handleNext}>Next</a>
                  <ul className={'pagination-list'}>
                      {/*
                      <li><a className={'pagination-link'} onClick={this.handleGoToFirst}>1</a></li>
                      <li><span className={'pagination-ellipsis'}>&hellip;</span></li>
                      <li><a className={'pagination-link'} onClick={this.handlePrevious}>{currentPage - 1}</a></li>
                      */}

                      <li><a className={'pagination-link posts-page-is-current'}>{currentPage}</a></li>

                      {/*
                      <li><a className={'pagination-link'} onClick={this.handleNext}>{currentPage + 1}</a></li>
                      <li><span className={'pagination-ellipsis'}>&hellip;</span></li>
                      <li><a className={'pagination-link'} >{lastPage}</a></li>
                      */}
                  </ul>
              </nav>
          </div>
      )
  };


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

              {/*handleCategory={this.handleCategory()}*/}
              <PostsNavigation filterPlatform={this.handlePlatform} filterRank={this.handleRank}/>
              <div className={'nav-spacer'}/>
              <div className={'content-spacer'}/>

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

              {this.renderPageNavigation()}

          </div>
      )
  }

}

export default PostIndex
