'use strict';

import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';

class CountStore extends EventEmitter {

  constructor () {
    super();
    this.init();
  }

  init () {
    this.count = 0;
    this.emit('change');
  }

  increment () {
    this.count += 1;
    this.emit('change');
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
  case 'INIT':
    COUNT_STORE.init();
    break;
  case 'INCREMENT':
    COUNT_STORE.increment();
    break;
  }
});

export default COUNT_STORE;
