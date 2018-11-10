import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

const Home = ({postList}) => {
    const pList = postList.map((post, idx) => {
        return <Link key={idx} to={`/info/${idx}`}>
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
