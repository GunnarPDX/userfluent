import "../../views/forms.scss";
import React, { Component } from 'react'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormWYSIWYG extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render(){
        return(
            <div className={"settings-container"}>
                <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}

export default FormWYSIWYG;