import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Fragment from 'render-fragment'
import { getInitialData } from '../actions/shared'
import Nav from './Nav'
import Modal from './Modal'
import Dashboard from './Dashboard';
import { ProtectedRoute } from "./ProtectedRoute";
import '../App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(getInitialData())
  }
  render () {
    const { loading, isLogged, users } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {
              loading === true
              ? null
              : <div>
                <Switch>
                <Route exact path="/" component={Modal} userRedux={users} />
                <ProtectedRoute path='/dashboard' exact component={Dashboard} isLogged={isLogged} />
                <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({users, questions, authedUser}) {
  return {
    loading: Object.keys(users).length === 0 && Object.keys(questions).length === 0,
    isLogged: authedUser !== null,
    users
  }
}

export default connect(mapStateToProps)(App);
