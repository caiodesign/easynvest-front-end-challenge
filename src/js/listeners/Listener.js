/* eslint-disable no-unused-vars */

export class Listener {
  constructor (HTMLElement = { addEventListener: (event, cb) => cb() }, Controller) {
    this.element = HTMLElement;
    this.controller = Controller;
  }

  init() {
    return null;
  }
}

export default Listener;
