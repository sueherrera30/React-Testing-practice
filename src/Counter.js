import React, { Component, Fragment } from 'react';
import logo from './logo.svg';

export default class Counter extends Component {
    state = {
      count: 0,
      testList: [1, 2, 3, 4, 5],
    }

    // handleCount = () => {
    //   this.setState(prevState => ({
    //     count: prevState + 1,
    //   }));
    // }
    handleCount = () => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }

    render() {
      const { count, testList } = this.state;
      return (
        <div>
          <p>
hello counter!
          </p>
          <button data-testid="counter-button" onClick={this.handleCount}>
            {count}
          </button>
          <img src={logo} alt="logo" />
          <select name="numbers" id="numbers">
            {
                testList.map(item => (
                  <Fragment key={item}>
                    <option value={item} data-testid="select-option">
                      {item}
                    </option>
                  </Fragment>
                ))
            }
          </select>
        </div>
      );
    }
}
