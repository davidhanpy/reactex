import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getActions from '../action';
import './InfoForm.css';

class CommentForm extends PureComponent {
    state = {
        comment: '',
    };
    render() {
        const { comment } = this.state;
        return (
            <div className="Form">
                <textarea placeholder="여기에 댓글을 달아보세요" value={comment} onChange={(evt) => this.setState({ comment: evt.target.value })}></textarea>
                <button onClick={this.onSubmit}>SAVE</button>
            </div>
        );
    }

    onSubmit = () => {
        axios.post('http://127.0.0.1:8000/blog/comment/', {
            comment: this.state.comment
        }).then((result) => {
            console.log(result)
            if (result.status === 200) {
                this.props.writeComment({ id: result.data, comment: this.state.comment });
                this.props.push('/home');
            }
        })
    }

    componentDidMount() {

        const postId = this.props.path.split('/')[2];
        const post = this.props.postList[Number(postId)];
        const commentList = this.props.commentList;
        var postpost = [];
        for(var i in post){
        console.log(i)
        console.log(post[i]) 
        postpost = post[i]   
        console.log(postpost)
        }
        for (var j in commentList) {
            console.log(commentList[j].replier)
        }
        this.setState({ post });

        //객체? key or value 배열에서 내가 원하는값을 할당하고 싶은데... 
        //자바스크립트? --;;
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
