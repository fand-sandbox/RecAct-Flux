'use strict';

import Dispatcher from '../Dispatcher';

const actions = {

  increment: () => {
    Dispatcher.dispatch({type: 'INCREMENT'});
  },

  decrement: () => {
    Dispatcher.dispatch({type: 'DECREMENT'});
  },

};

export default actions;
