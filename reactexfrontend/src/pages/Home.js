import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({postList}) => {
    const pList = postList.map((post, idx) => {
        return <Link key={idx} to={`/info/${idx}`}><h4>{post.text}{post.reply}</h4></Link>
    })
    return (
        <div>
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
