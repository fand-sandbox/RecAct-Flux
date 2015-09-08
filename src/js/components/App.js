'use strict';

import React from 'react';
import CountStore from '../stores/CountStore';
import CountActions from '../actions/CountActions';

class App extends React.Component {

  constructor () {
    super();
    this.state = CountStore.getState();
  }

  componentDidMount () {
    CountStore.on('change', ::this._onChange);
  }

  componentWillUnmount () {
    CountStore.on('change', ::this._onChange);
  }

  render () {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={::this._increment}>++</button>
      </div>
    );
  }

  _increment () {
    CountActions.increment();
  }

  _onChange () {
    this.setState(CountStore.getState());
  }

}

export default App;
