import React,{ Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Fragment from 'render-fragment'
import { getInitialData } from '../actions/shared'
import Nav from './Nav'
import Modal from './Modal'
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../App.css';
class App extends Component {
  componentDidMount () {
    this.props.dispatch(getInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {
              this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
              </div>
            }
            {/* <Modal /> */}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
