import "../../../components/forms/forms.scss";
import React, { Component } from 'react'
import Dropzone from "react-dropzone";
import axios from 'axios';
import LoadingButton from '../../../components/loader/LoadingButton';
import CategorySelect from "../../../components/forms/fields/CategorySelect";
import PlatformSelect from "../../../components/forms/fields/PlatformSelect";
import PackageSelect from "../../../components/forms/packages/PackageSelect";
import WYSIWYG from "../../../components/forms/wysiwyg/WYSIWYG";
import AddOnSelect from "../../../components/forms/packages/AddOnSelect";
import PostAgree from "../../../components/legal/PostAgree";

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

    onDrop = (files) => {
        window.URL.revokeObjectURL(this.state.image_preview);
        this.setState({ image_file: files[0], image_preview: URL.createObjectURL(files[0])  });
        //console.log(this.state.image_file.path);
    };

    showFilePreview() {
        const previewStyle = {
            height: '400px',
        };

        let file = this.state.image_preview || null;

        if (file === null) {
            return null;
        }

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

    handleChange = (e) => {
      let newValue = e.target.value;
      let key = e.target.name;
      this.setState({
          [key]: newValue,
          loading: 'false'
      });
    };

    contentUpdate = (data) => {
        this.setState({
            content: data,
        });
        //console.log(data);
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({loading: 'true'});

      const { title, content, image_file } = this.state;
      let currentComponent = this;

      const formData = new FormData();
      formData.append('file', image_file);
      formData.append('upload_preset', 'r2rutyz6');

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

    render() {
      let props = {
          loading: this.state.loading,
          form: 'new-post-form',
          button_title: 'Submit New Project!',
      };

      return (
          <div className={"uf-fade-in"}>

              <div className={'top-banner'}>
                  <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582445518/UserFluent/Let_s_find_out_what_the_users_think_aehr3j.svg'} alt={'lets find out wat the users think'} className={'banner-image'}/>
              </div>

              <div className={"content-spacer"}/>

              <div>
                  <img src={'https://res.cloudinary.com/dmqtrnawm/image/upload/v1582347785/UserFluent/user-testing-illustration_hoitys.svg'} alt={'testing'}/>
              </div>

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

                  <div className={'form-row-title'}>
                      Select Packages
                  </div>

                  <PackageSelect/>

                  <div className={'form-row-title'}>
                      Additional Services
                  </div>

                  <AddOnSelect/>

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
}

export default NewPost