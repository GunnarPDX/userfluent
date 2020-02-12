import "../../components/forms/forms.scss";
import React, { Component } from 'react'
import Dropzone from "react-dropzone";
import axios from 'axios';
import LoadingButton from "../../components/loader/LoadingButton";
import CategorySelect from "../../components/forms/CategorySelect";
import PlatformSelect from "../../components/forms/PlatformSelect";
import PackageSelect from "../../components/forms/PackageSelect";

import WYSIWYG from "../../components/forms/WYSIWYG";

class NewPost extends Component {

    state = {
        title: '',
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
                          image: currentComponent.state.image,
                          category: currentComponent.state.category,
                          platform: currentComponent.state.platform,}},
                  {headers: {'Content-Type': 'application/json', 'access-token': token, 'client': client, 'uid': uid}}
              )
                  .then(resp => {
                      console.log(resp);
                  })
                  .then(resp => {
                      currentComponent.setState({loading: 'success'});
                      currentComponent.props.history.push('/');
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
          button_title: 'Submit New Post!',
      };

      return (
          <div className={"uf-fade-in"}>
              <div className={"content-spacer"}/>

              <div className={'form-row-title'}>
                  Add a cover photo
              </div>

              <div className={"settings-container"}>
                  <Dropzone onDrop={this.onDrop}>
                      {({getRootProps, getInputProps}) => (
                          <section>
                              <div {...getRootProps()} className={"dropzone"}>
                                  <input {...getInputProps()} />

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

                  <div className={"settings-container"}>
                      <div className={"form-row"}>
                          {/*<label htmlFor="title" className={"form-field-title"}>Title </label>*/}
                          <input type="text" name="title" onChange={this.handleChange} placeholder={'App Name ...'} className={"uf-form-field-full"}/>
                      </div>
                  </div>

                  <div className={'form-row-title'}>
                      Tell Us About Your App
                  </div>

                  <WYSIWYG onUpdate={(data) => {this.contentUpdate(data)}}/>

                  <div className={'form-row-title'}>
                      Categorize Your App
                  </div>

                  <div className={"settings-container"}>
                      <CategorySelect onSelect={this.handleChange}/>
                  </div>

                  <div className={"settings-container"}>
                      <PlatformSelect onSelect={this.handleChange}/>
                  </div>

                  <div className={'form-row-title'}>
                      Select Packages
                  </div>

                  <PackageSelect/>

                  <div className={'form-row-title'}>
                      User Agreement
                  </div>


              </form>

              <div className={"settings-container"}>
                  <LoadingButton {...props}/>
              </div>


          </div>
      )
    }
}

export default NewPost