'use strict';

import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';

class CountStore extends EventEmitter {

  constructor () {
    super();
    this.count = 0;
  }

  increment () {
    this.count += 1;
  }

  decrement () {
    this.count -= 1;
  }

  getState () {
    return {
      count : this.count,
    };
  }

}

const COUNT_STORE = new CountStore();

Dispatcher.register((action) => {
  switch (action.type) {
  case 'INCREMENT':
    COUNT_STORE.increment();
    COUNT_STORE.emit('change');
    break;
  case 'DECREMENT':
    COUNT_STORE.decrement();
    COUNT_STORE.emit('change');
    break;
  }
});

export default COUNT_STORE;
