import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { EditorState } from 'draft-js';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import getActions from '../action';
import './InfoForm.css';

class InfoForm extends PureComponent {
    state = {
        editorState: EditorState.createEmpty(),
        text: '',
    };
    render() {
        console.log('infoform');
        const { text } = this.state;
        return (
            <div class="Form">
                {/* <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
        /> */}
                <textarea value={text} onChange={(evt) => this.setState({ text: evt.target.value })}></textarea>
                <button onClick={this.onSubmit}>SAVE</button>
            </div>
        );
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onSubmit = () => {
        axios.post('http://127.0.0.1:8000/blog/post/', {
            text: this.state.text
        }).then((result) => {
            console.log(result)
            if (result.status === 200) {
                this.props.writePost({ id: result.data, text: this.state.text });
                this.props.push('/home');
            }
        })
    }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     write: (text) => dispatch(writePost(text)),
//     push: (path) => dispatch(push(path)),
//   }
// }
export default connect(null, getActions)(InfoForm);
