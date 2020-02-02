import './profile.scss';
import '../forms.scss';
import '../../components/loader/submitButtons.scss';
import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import axios from 'axios';
import LoadingButton from '../../components/loader/LoadingButton';

class ProfileSettings extends Component {

    state = {
        avatar: '',
        bio: '',
        name: '',
        location: '',
        contact: '',
        media: '',
        company: '',
        image_file: null,
        image_preview: null,
        avatar_preview_underlay: '',
        loading: 'false',
    };

    onDrop = files => {
        window.URL.revokeObjectURL(this.state.image_preview);
        this.setState({ image_file: files[0], image_preview: URL.createObjectURL(files[0]) });
        console.log(this.state.image_file.path);
    };

    showFilePreview() {
        const previewStyle = {
        };

        let file = this.state.image_preview || null;

        if (file === null) {
            return null;
        }

        return (
            <div className={"avatar-upload-overlay"}>
                <img
                    alt="Preview"
                    src={file}
                    style={previewStyle}
                />
            </div>
        );
    };

    handleChange = e => {
        let newValue = e.target.value;
        let key = e.target.name;
        this.setState({
            [key]: newValue,
            loading: 'false'
        });
    };

    componentDidMount() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        axios.get('/api/v1/user/user_info', {
            headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
        })
            .then(data => data)
            .then(data => {
                this.setState({
                    avatar: data.data.avatar,
                    bio: data.data.bio,
                    name: data.data.name,
                    location: data.data.location,
                    contact: data.data.contact,
                    media: data.data.media,
                    company: data.data.company,
                    avatar_preview_underlay: data.data.avatar_large
                })
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({loading: 'true'});

        const image_file = this.state.image_file;
        let currentComponent = this;

        if(image_file !== null){
            const formData = new FormData();
            formData.append('file', image_file);
            formData.append('upload_preset', 'r2rutyz6');

            const response = axios.post(`https://api.cloudinary.com/v1_1/dmqtrnawm/image/upload`, formData,)
                .catch((error) => {
                    currentComponent.setState({loading: 'failed'});
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
                .then(function(response) {
                const image = response.data.public_id;
                currentComponent.setState({avatar: image});
                currentComponent.handleBackendSubmit(currentComponent);
            });
        } else{
            this.handleBackendSubmit(currentComponent);
        }
    };

    handleBackendSubmit(currentComponent) {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        axios.put('/api/v1/user/update',
            {body: {avatar: currentComponent.state.avatar,
                    bio: currentComponent.state.bio,
                    name: currentComponent.state.name,
                    location: currentComponent.state.location,
                    contact: currentComponent.state.contact,
                    media: currentComponent.state.media,
                    company: currentComponent.state.company,}},
            {headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}}
        )
            .then(resp => {
                currentComponent.setState({loading: 'success'});
            });
    }

    render() {

        let props = {
            loading: this.state.loading,
            form: 'my-profile-form',
            button_title: 'Save Settings',
        };

        const previewStyle = {
            display: 'inline',
            width: 100,
            height: 100,
        };

        return (
            <div className={"uf-fade-in"}>
                <div className={"content-spacer"}/>

                <div className={"settings-container"}>

                    <div className={"form-row"}>
                        <div className={"dropzone-container"}>
                            <Dropzone onDrop={this.onDrop}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps()} className={"avatar-dropzone"}>
                                            <input {...getInputProps()} />

                                            <img src={this.state.avatar_preview_underlay} alt={"current photo"} className={"avatar-dropzone-underlay"}/>

                                            <div className={"dropzone-text"}>
                                                Drag and drop some files here, or click to select files.
                                            </div>

                                            {this.showFilePreview()}
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>

                        <div className={"settings-button-container form-right"}>
                            <div className={"settings-header-box"}>
                                <h1 className={"settings-page-header"}>Personal Info</h1>
                            </div>

                            <LoadingButton {...props}/>
                        </div>

                    </div>
                </div>

                    <form onSubmit={this.handleSubmit.bind(this)} id='my-profile-form'>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="name" className={"form-field-title"}>Name </label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className={"uf-form-field form-right"}/>
                            </p>
                        </div>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="location" className={"form-field-title"}>Location </label>
                                <input type="text" name="location" value={this.state.location} onChange={this.handleChange} className={"uf-form-field form-right"}/>
                            </p>
                        </div>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="company" className={"form-field-title"}>Work </label>
                                <input type="text" name="company" value={this.state.company} onChange={this.handleChange} className={"uf-form-field form-right"}/>
                            </p>
                        </div>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="contact" className={"form-field-title"}>Contact </label>
                                <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange} className={"uf-form-field form-right"}/>
                            </p>
                        </div>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="media" className={"form-field-title"}>Media </label>
                                <input type="text" name="media" value={this.state.media} onChange={this.handleChange} className={"uf-form-field form-right"}/>
                            </p>
                        </div>

                        <div className={"settings-container"}>
                            <p className={"form-row"}>
                                <label htmlFor="bio" className={"form-field-title"}>Bio </label>
                                <textarea name="bio" id="" cols="30" rows="10" value={this.state.bio} onChange={this.handleChange} className="settings-bio-text-area form-right"/>
                            </p>
                        </div>

                    </form>

                <div className={"content-spacer"}/>
                <div className={"content-spacer"}/>

            </div>
        )
    };

}

export default ProfileSettings