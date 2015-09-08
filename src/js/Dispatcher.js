'use strict';

import {Dispatcher} from 'flux';

class LoggedDispatcher extends Dispatcher {

  constructor () {
    super();
    this.eventStore = [];
  }

  dispatch (event) {
    this.eventStore.push({
      time  : Date.now(),
      event : event,
    });
    super.dispatch(event);
  }

  replay (time) {
    super.dispatch({ type: 'INIT' });  // 初期状態に戻す

    this.eventStore.forEach((e) => {
      if (e.time < time) {
        super.dispatch(e.event);  // 指定時刻以前のイベントを発行
      }
    });
  }

}

const DISPATCHER = new LoggedDispatcher();

window.replay = (time) => DISPATCHER.replay(time);

export default DISPATCHER;
