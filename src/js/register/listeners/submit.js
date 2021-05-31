class OnListenerSubmit {
  contructor(element) {
    this.element = element;
  }

  init(cb) {
    this.element
      .addEventListener('submit', (event) => {
        event.preventDefault();

        if (typeof cb === 'function') {
          cb(event.target);
        }
      });
  }
}

export default OnListenerSubmit;
