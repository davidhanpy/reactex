import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getActions from '../action';
import './InfoForm.css';
import { writeComment } from '../api';

class CommentForm extends PureComponent {
    state = {
        comment: '',
        commented: false,
    };
    render() {
        const { comment, commented } = this.state;
        if (commented) {
            return (
                <div>
                    <p>{comment}</p>
                </div>
            )
        }
        return (
            <div className="Form">
                <textarea placeholder="여기에 댓글을 달아보세요" value={comment} onChange={(evt) => this.setState({ comment: evt.target.value })}></textarea>
                <button onClick={this.onSubmit}>SAVE</button>
            </div>
        );
    }

    onSubmit = () => {
        writeComment(this.state.comment, this.props.postId)
            .then(() => {
                this.setState({commented: true});
            })
            .catch(() => {
                alert('등록 실패');
            })
    }
}

function mapStateToProps(state) {
    return {
        postList: state.post.postList,
        commentList: state.post.commentList,
        path: state.router.location.pathname,
    }
}

export default connect(mapStateToProps, getActions)(CommentForm);
