import React, { Component } from 'react';

class Like_button extends Component {
  state = {
    numberOfLikes: 0,
  };
  render() {
    return <button>{this.state.numberOfLikes}</button>;
  }
}

export default Like_button;
