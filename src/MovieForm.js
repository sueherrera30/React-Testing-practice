import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    message: false,
  };

  showMessage = () => {
    this.setState(() => ({
      message: true,
    }));
  };

  render() {
    const { message } = this.state;
    return (
      <form data-testid="movie-form">
        <input type="text" data-testid="movie-input" />
        <button onClick={this.showMessage}>Submit</button>
        {
          message && (
          <p>
congratulations, form sent!
          </p>
          )
        }
      </form>
    );
  }
}
