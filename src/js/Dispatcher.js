'use strict';

import {Dispatcher} from 'flux';

class LoggedDispatcher extends Dispatcher {

  constructor () {
    super();
    this.eventStore = [];
  }

  dispatch (event) {
    this.eventStore.push({
      time  : Date.now(),  // 時刻を記録
      event : event,
    });
    super.dispatch(event);
  }

  replay (time) {

    // 初期状態に戻す
    super.dispatch({ type: 'INIT' });

    // 指定時刻以前のイベントを発行
    this.eventStore.forEach((e) => {
      if (e.time < time) {
        super.dispatch(e.event);
      }
    });

  }

}

const DISPATCHER = new LoggedDispatcher();

window.replay = (time) => DISPATCHER.replay(time);

export default DISPATCHER;
