import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {auth} from '../database'

import * as actionCreators from '../actions/actionCreator'
import '../style/bootstrap.min.css'
import '../style/App.scss'

class Login extends Component {

  componentDidMount = (node) => {
    const {loadUser} = this.props
    this.unsubscribe = auth.onAuthStateChanged(function(user) {
        if (user) {
            loadUser(user)
        }
    }).bind(this)
  }

  handleOpenClick = () => {
      this.dropzone.open()
  }

  handleLogout = (logout) => {
    this.unsubscribe()
    logout()
  }

  render() {
    const {user, login, logout} = this.props
    return (
      (user.signedIn) ? 
        <div>
          <button onClick={() => {this.handleLogout(logout)}}> Logout</button>
          <div>DisplayName:{user.displayName}</div>
          <div>Email:{user.email}</div>
          <div><img src={user.photoURL} alt="no user"/></div>
        </div>: 
        <div>
          <button onClick={login}> Facebook Login</button>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

Login = connect(mapStateToProps, mapDispathToProps)(Login)

export default Login;
