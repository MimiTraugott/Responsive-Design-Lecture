import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

class App extends Component {
  constructor(){
    super();
    this.state = {
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })

  }

  render(){
  return (
    <div className="App">
      {!this.state.toggleMenu 
      ?(<header id='header-container'>
        <img src='https://media.giphy.com/media/LMcQtGUlP4Zb0G2ByL/giphy.gif' alt="handsome-spongebob" id="logo"/>
        <nav id='nav-links'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      <FontAwesomeIcon icon='bars' id='hamburger' onClick=
      {this.handleToggle}/>
      </header>)
      : (
      <>
      <header id='header-container'>
        <img src='https://media.giphy.com/media/LMcQtGUlP4Zb0G2ByL/giphy.gif' alt="handsome-spongebob" id="logo"/>
        <nav id='nav-links'>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      <FontAwesomeIcon icon='bars' id='hamburger' onClick={this.handleToggle}
      />
      </header>
      <nav id='side-menu'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
      </>)}
      <div id ="rotate-box"></div>
      <div id='transition-box'></div>
    </div>
  );
}
}

export default App;
