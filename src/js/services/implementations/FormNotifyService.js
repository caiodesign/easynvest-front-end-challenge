import NotifyUserService from '../NotifyUserService';

export class FormNotifyService extends NotifyUserService {
  constructor() {
    super();
    this.notifyElement = document.querySelector('#notify');
  }

  notify ({ success, error }) {
    if (success) {
      this.notifyElement.innerHTML = 'success :)';

      return;
    }

    if (error) {
      this.notifyElement.innerHTML = 'error :(';
    }
  }

  reset () {
    this.notifyElement.innerHTML = '';
  }
}

export default FormNotifyService;
