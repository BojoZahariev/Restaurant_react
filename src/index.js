import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

//HOME
class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="title">
        <p className="big-title">{this.props.title}</p>
        <p className="small-title">{this.props.smallTitle}</p>
      </div>
    );
  }
}

class Middle extends React.Component {
  render() {
    return <div className="middle"></div>;
  }
}

//MENU
class MenuBackground extends React.Component {
  render() {
    return (
      <div className="menu-background">
        <div className="menu">
          <span className="menu-item">Rakia</span>
          <span className="menu-price">1.80 lv</span>
          <span className="menu-item">Vodka</span>
          <span className="menu-price">1.80 lv</span>
          <span className="menu-item">Whisky</span>
          <span className="menu-price">2.00 lv</span>
          <span className="menu-item">Chips</span>
          <span className="menu-price">1.20 lv</span>
          <span className="menu-item">Meatball</span>
          <span className="menu-price">0.80 lv</span>
          <span className="menu-item">Sprat</span>
          <span className="menu-price">1.60 lv</span>
          <span className="menu-item">Carp</span>
          <span className="menu-price">3.00 lv</span>
        </div>
      </div>
    );
  }
}

class FindUs extends React.Component {
  render() {
    return (
      <div className="find-us">
        <p className="address"> ul. "Mladezhka" 32А, Plovdiv, Bulgaria</p>

        <div className="map"></div>

        <p className="hours">Opening Hours: 9:30am–9:30pm</p>
      </div>
    );
  }
}

class BigContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'home'
    };

    this.toggleDisplayLeft = this.toggleDisplayLeft.bind(this);
    this.toggleDisplayRight = this.toggleDisplayRight.bind(this);
  }

  toggleDisplayLeft() {
    if (this.state.display === 'home' || this.state.display === 'map') {
      this.setState({
        display: 'menu'
      });
    } else if (this.state.display === 'menu') {
      this.setState({
        display: 'home'
      });
    }
  }

  toggleDisplayRight() {
    if (this.state.display === 'home' || this.state.display === 'menu') {
      this.setState({
        display: 'map'
      });
    } else if (this.state.display === 'map') {
      this.setState({
        display: 'home'
      });
    }
  }

  render() {
    if (this.state.display === 'home') {
      return (
        <div className="big-container">
          <Title title="Vodolaza" smallTitle="The best Pub & Fish Restaurant in Plovdiv" />
          <Middle />

          <div className="icons">
            <span className="icon-left" onClick={this.toggleDisplayLeft}>
              Menu
            </span>
            <span className="icon-right" onClick={this.toggleDisplayRight}>
              Find us
            </span>
          </div>
        </div>
      );
    } else if (this.state.display === 'menu') {
      return (
        <div className="big-container">
          <MenuBackground />

          <div className="icons">
            <span className="icon-left" onClick={this.toggleDisplayLeft}>
              Home
            </span>
            <span className="icon-right" onClick={this.toggleDisplayRight}>
              Find us
            </span>
          </div>
        </div>
      );
    } else if (this.state.display === 'map') {
      return (
        <div className="big-container">
          <FindUs />

          <div className="icons">
            <span className="icon-left" onClick={this.toggleDisplayLeft}>
              Menu
            </span>
            <span className="icon-right" onClick={this.toggleDisplayRight}>
              Home
            </span>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<BigContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
