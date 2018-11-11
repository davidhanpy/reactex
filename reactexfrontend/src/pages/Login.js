import React from 'react';
import { connect } from 'react-redux';

import getActions from '../action';

class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <input type="text" name="userId" placeholder="ID" onChange={this.handleText}/>
        <input type="password" name="password" placeholder="PASSWORD" onChange={this.handleText}/>
        <button onClick={this.handleSignIn}>LOGIN</button>
      </div>
    )
  }
  handleText = (evt) => {
    this.setState({[evt.target.name]:evt.target.value});
  }
  handleSignIn = () => {
    this.props.tryToLogin(this.state.userId, this.state.password)
      .then(() => {
        this.props.push('/home')
      })
      .catch(() => {
        alert('로그인 실패');
      })
  }
}

export default connect(null, getActions)(Login);