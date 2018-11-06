import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getActions from '../action';

class InfoDetail extends React.PureComponent {
    state = {
        post: null
    }
    render() {
        if (this.state.post === null || this.state.post === undefined) {
            return null;
        }
        console.log(this.state.post)
        return (
            <div>
                <p>
                    {this.state.post.text}
                    {this.state.post.id}
                 
                </p>
                <button onClick={this.onSubmit}>DELETE</button>
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

    componentDidMount() {
        console.log(this.props.path)
        const postId = this.props.path.split('/')[2];
        const post = this.props.postList[Number(postId)];
        this.setState({ post });
    }
}
function mapStateToProps(state) {
    return {
        postList: state.post.postList,
        path: state.router.location.pathname,
    }
}

export default connect(mapStateToProps, getActions)(InfoDetail);