import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

const Home = ({postList}) => {
    const pList = Object.values(postList).map((post) => {
        return <Link key={post.id} to={`/info/${post.id}`}>
        <p>{post.text}</p>
        </Link>
    })
    return (
        <div className="pList">
            {pList}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        postList : state.post.postList,
    }
}

export default connect(mapStateToProps)(Home);
