import React, { Component } from 'react';

class NewsMain extends Component {
  // constructor() {
  //   super();
  //
  //
  // }

  handleInput = (e) => {

    this.setState({

    });

  }

  handleSubmit = (e) => {
    e.preventDefault();


  }

  render() {
    return(
      <div>
      <h1>Hello {this.props.username}</h1>

      </div>
    )
  }
}


export default NewsMain;
