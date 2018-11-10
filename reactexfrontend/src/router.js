import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import * as pages from './pages';
import getActions from './action';

class AppRouter extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className="App">
                <header>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/info'>Info</Link></li>
                    </ul>
                </header>
                <main>
                    <Route path='/home' component={pages.Home}/>
                    <Route path='/info/:id' component={pages.Info}/>
                </main>
                </div>
            </ConnectedRouter>

        )
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/blog/post/')
        .then((result) => {
            this.props.initPost(result.data);
        })
        axios.get('http://127.0.0.1:8000/blog/comment/')
        .then((result) => {
            this.props.initComment(result.data);
        })
    }
}

export default connect(null, getActions)(AppRouter);