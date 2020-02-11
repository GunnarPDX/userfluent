import "./forms.scss";
import React, { Component } from 'react'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';


class WYSIWYG extends Component {
    state = {
        content: EditorState.createEmpty(),
    };

    onEditorStateChange = (content) => {
        this.setState({
            content,
        });
        this.props.onUpdate(draftToHtml(convertToRaw(content.getCurrentContent())));
    };

    render(){
        return(
            <div className={"settings-container"}>
                <Editor
                    editorState={this.state.content}
                    wrapperClassName="demo-wrapper"
                    editorClassName="wysiwyg-text-area"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}

export default WYSIWYG;