import React, { Component } from 'react';
import reactImage from '../public/assets/images/react.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('hey');
  }
  render() {
    return (
      <div>
        <img src={reactImage} alt="" />
        <button className="btn btn-info" onClick={this.handleClick}>
          click me
        </button>
        ;
      </div>
    );
  }
}

export default App;
