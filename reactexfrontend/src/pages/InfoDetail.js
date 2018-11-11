import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CommentForm from './CommentForm';
import getActions from '../action';
import './InfoDetail.css';

class InfoDetail extends React.PureComponent {
    state = {
        postId: '',
        post: null,
        comment: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const postId = nextProps.path.split('/')[2];
        const post = nextProps.postList[postId];
        
        return { post, postId };
    }
    render() {
        if (this.state.post === null || this.state.post === undefined) {
            return null;
        }

        return (
            <div className="text">
                <p>
                    {this.state.post.text}
                </p>
                <p>
                </p>
                {/* <button onClick={this.onSubmit}>DELETE</button> */}
                <CommentForm postId={this.state.postId}/>
            </div>
        );
    }
    onSubmit = () => {
        axios.delete('http://127.0.0.1:8000/blog/post/?id='+this.state.post.id)
        .then((result) => {
            if (result.status === 200) {
                this.props.deletePost(result.data);   
                this.props.push('/home');
            }
        });
    }
}
function mapStateToProps(state) {
    return {
        postList: state.post.postList,
        commentList: state.post.commentList,
        path: state.router.location.pathname,
    }
}

export default connect(mapStateToProps, getActions)(InfoDetail);