import React,{ Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { getInitialData } from '../actions/shared'
import Nav from './Nav'
// import Modal from './Modal'
import Dashboard from './Dashboard';
class App extends Component {
  componentDidMount () {
    this.props.dispatch(getInitialData())
  }
  render () {
    return (
      <div className="App">
        <Nav />
        <Dashboard />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default connect()(App);
