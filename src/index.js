import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

class Icons extends React.Component {
  render() {
    return (
      <div className="icons">
        <span className="icon-left">{this.props.textLeft}</span>
        <span className="icon-right">{this.props.textRight}</span>
      </div>
    );
  }
}

class BigContainer extends React.Component {
  render() {
    return (
      <div className="big-container">
        <Title title="Vodolaza" smallTitle="The best Pub & Fish Restaurant in Plovdiv" />
        <Middle />
        <Icons textLeft="Menu" textRight="Find us" />
      </div>
    );
  }
}

ReactDOM.render(<BigContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
