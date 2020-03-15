// NewPost allows the user to create a new project.

import "../../../../../components/forms/forms.scss";
import '../../../../static/pricing.scss'

import React, { Component } from 'react'
import Dropzone from "react-dropzone";
import axios from 'axios';

// LoadingButton is a submission button component with a fancy animation
import LoadingButton from '../../../../../components/loader/LoadingButton';

// CategorySelect is a form component dropdown select for categories
import CategorySelect from "../../../../../components/forms/fields/CategorySelect";

// PlatformSelect is a form component dropdown for platforms
import PlatformSelect from "../../../../../components/forms/fields/PlatformSelect";

// WYSIWYG - What You See Is What You Get form component
import WYSIWYG from "../../../../../components/forms/wysiwyg/WYSIWYG";

// PostAgree prompts the user to agree to the terms and conditions
import PostAgree from "../../../../../components/legal/PostAgree";
import ProjectSideNav from "../../components/ProjectSideNav";
import UpperDashNav from "../../components/UpperDashNav";

class NewPost extends Component {

    state = {
        title: '',
        link: '',
        content: '',
        image: '',
        category: '',
        platform: '',
        loading: 'false',
        image_file: null,
        image_preview: null,
    };

    // Handle images on drop
    onDrop = (files) => {
        window.URL.revokeObjectURL(this.state.image_preview); // Revoke old image if present
        this.setState({ image_file: files[0], image_preview: URL.createObjectURL(files[0])  });
        //console.log(this.state.image_file.path);
    };

    showFilePreview() {
        const previewStyle = {
            height: '400px',
            // NOTE: figure out max width issue
        };

        let file = this.state.image_preview || null;

        // check for a file
        if (file === null) return null;

        // If present then display an image preview
        return (
            <div className={"post-image-upload-overlay"}>
                <img
                    alt="Preview"
                    src={file}
                    style={previewStyle}
                />
            </div>
        );
    };

    // Handle form input update by refreshing the state
    handleChange = (e) => {
      let newValue = e.target.value;
      let key = e.target.name;
      this.setState({
          [key]: newValue,
          loading: 'false'
      });
    };

    // Handle a content update for wysiwyg?
    contentUpdate = (data) => {
        this.setState({
            content: data,
        });
        //console.log(data);
    };

    // Handle a form submission
    handleSubmit = (e) => {
      e.preventDefault();

      // Set loading button
      this.setState({loading: 'true'});

      const { title, content, image_file } = this.state;
      let currentComponent = this;

      const formData = new FormData();
      formData.append('file', image_file);
      formData.append('upload_preset', 'r2rutyz6');

      // Upload img to host
      axios.post(`https://api.cloudinary.com/v1_1/dmqtrnawm/image/upload`, formData,)
          .then(function(response) {
              const image = response.data.public_id;
              currentComponent.setState({image: image});

              const token = localStorage.getItem('access-token');
              const client = localStorage.getItem('client');
              const uid = localStorage.getItem('uid');
              axios.post('/api/v1/posts',
                  {post: { title: currentComponent.state.title,
                          content: currentComponent.state.content,
                          link: currentComponent.state.link,
                          image: currentComponent.state.image,
                          category: currentComponent.state.category,
                          platform: currentComponent.state.platform,}},
                  {headers: {'Content-Type': 'application/json', 'access-token': token, 'client': client, 'uid': uid}}
              )
                  .then(resp => {
                      //console.log(resp);
                      return resp; // resp.json()
                  })
                  .then(resp => {
                      currentComponent.setState({loading: 'success'});
                      //console.log(resp.data.id);
                      if(resp.data.id)currentComponent.props.history.replace('/show/post/' + resp.data.id); // navigate to new post
                  });
          });
    };

    contentBoxStyle = {
      width: '90%',
    };

    renderForm = () => {
      let props = {
          loading: this.state.loading,
          form: 'new-post-form',
          button_title: 'Submit New Project!',
      };

      return (
          <div className={"uf-fade-in"}>

              <div className={'form-row-title'}>
                  Add A Cover Photo
              </div>

              <div className={"new-post-container"}>
                  <Dropzone onDrop={this.onDrop}>
                      {({getRootProps, getInputProps}) => (
                          <section>
                              <div {...getRootProps()} className={"dropzone"}>
                                  <input {...getInputProps()} />

                                  <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582263843/UserFluent/add-photo_ydpkg5.png'} alt={"add a photo"} className={"dropzone-underlay"}/>

                                  <div className={"dropzone-text"}>
                                      Drag and drop some files here, or click to select files.
                                      <br/>
                                      [Max file size: 10mb]
                                  </div>

                                  {this.showFilePreview()}

                              </div>
                          </section>
                      )}
                  </Dropzone>
              </div>

              <form onSubmit={this.handleSubmit.bind(this)} id={"new-post-form"}>

                  <div className={'form-row-title'}>
                    Add Your App's Name
                  </div>

                  <div className={"new-post-container"}>
                      <div className={"form-row"}>
                          <input type="text" name="title" onChange={this.handleChange} placeholder={'App Name ...'} className={"uf-form-field-full"}/>
                      </div>
                  </div>

                  <div className={'form-row-title'}>
                      Add A Link To Your App
                  </div>

                  <div className={"new-post-container"}>
                      <div className={"form-row"}>
                          <input type="text" name="link" onChange={this.handleChange} placeholder={'www.your-app.com ...'} className={"uf-form-field-full"}/>
                      </div>
                  </div>

                  <div className={'form-row-title'}>
                      Tell Us About Your App
                  </div>

                  <WYSIWYG onUpdate={(data) => {this.contentUpdate(data)}}/>

                  <div className={'form-row-title'}>
                      Categorize Your App
                  </div>

                  <div className={"new-post-container"}>
                      <CategorySelect onSelect={this.handleChange}/>
                  </div>

                  <div className={"new-post-container"}>
                      <PlatformSelect onSelect={this.handleChange}/>
                  </div>

                  {/*
                  <div className={'form-row-title'}>
                      Select Packages
                  </div>

                  <PackageSelect/>

                  <div className={'form-row-title'}>
                      Additional Services
                  </div>

                  <AddOnSelect/>
                  */}

                  <div className={'form-row-title'}>
                      User Agreement
                  </div>

                  <div className={"new-post-container"}>
                      <PostAgree/>
                  </div>

                  <div className={'form-row-title'}>
                      All Done?
                  </div>


              </form>

              <div className={"new-post-container"}>
                  <LoadingButton {...props}/>
              </div>

              {/* <DropAlert/> */}

          </div>
      )
    }

    render() {
        return(
            <div>
                <ProjectSideNav/>
                <div className={'dash-content-container'}>

                    <p className={'landing-header-text'} id={'text'}>
                        <span className={'underline--magical'}>New project</span>
                    </p>

                    {this.renderForm() }

                </div>
            </div>
        )
    }
}

export default NewPost