import React,{ Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Fragment from 'render-fragment'
import { getInitialData } from '../actions/shared'
import Nav from './Nav'
// import Modal from './Modal'
import Dashboard from './Dashboard';

import '../App.css';
class App extends Component {
  componentDidMount () {
    this.props.dispatch(getInitialData())
  }
  render () {
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          <Nav />
          {
            this.props.loading === true
            ? null
            :<Dashboard />
          }
          {/* <Modal /> */}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
