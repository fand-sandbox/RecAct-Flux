'use strict';

import Dispatcher from '../Dispatcher';

const actions = {

  increment: () => {
    Dispatcher.dispatch({type: 'INCREMENT'});
  },

};

export default actions;
