import React, { Component } from 'react';
import MovieForm from './MovieForm';

export default class NewMovie extends Component {
  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <MovieForm />
      </div>
    );
  }
};
