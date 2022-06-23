import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { text } = this.state;
    const { sumbitForm } = this.props;
    return (
      <form
        data-testid="movie-form"
        onSubmit={() => sumbitForm({
          text,
        })}
      >
        <label htmlFor="text">
          Text
          <input
            type="text"
            data-testid="movie-input"
            id="text"
            onChange={event => this.setState({ text: event.target.value })}
          />
        </label>
        <button type="submit">
Submit
        </button>
      </form>
    );
  }
}

// export default class MovieForm extends Component {
//   state = {
//     message: false,
//   };

//   showMessage = () => {
//     this.setState(() => ({
//       message: true,
//     }));
//   };

//   render() {
//     const { message } = this.state;
//     return (
//       <form data-testid="movie-form">
//         <input type="text" data-testid="movie-input" />
//         <button onClick={this.showMessage}>Submit</button>
//         {
//           message && (
//           <p>
// congratulations, form sent!
//           </p>
//           )
//         }
//       </form>
//     );
//   }
// }
