import logo from '../logo.svg';
import React,{ Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { getInitialData } from '../actions/shared'
import Nav from './Nav'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(getInitialData())
  }
  render () {
    return (
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect()(App);
