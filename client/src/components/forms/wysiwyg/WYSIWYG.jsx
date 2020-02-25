import "../forms.scss";
import './wysiwyg.scss';
import React, { Component } from 'react'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
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
            <div className={"new-post-container"}>
                <Editor
                    editorState={this.state.content}
                    wrapperClassName="demo-wrapper"
                    editorClassName="wysiwyg-text-area"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        options: ['inline', 'blockType', 'fontSize', 'textAlign', 'link'],
                        inline: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['bold', 'underline', 'strikethrough', 'monospace'],
                        },
                        blockType: {
                            inDropdown: true,
                            options: ['Normal', 'Blockquote', 'Code'],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                        },
                        fontSize: {
                            options: [14, 16, 18, 24, 30, 36],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                        },
                    }}
                />
            </div>
        )
    }
}

export default WYSIWYG;