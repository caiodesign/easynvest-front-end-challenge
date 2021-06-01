import { NotifyUserService } from '../NotifyUserService';

export class FormNotifyService extends NotifyUserService {
  constructor() {
    super();
    this.notifyElement = document.querySelector('#notify');
  }

  notify ({ success, error }) {
    if (success) {
      this.notifyElement.innerHTML = 'Usuario cadastrado com sucesso!  :)';

      return;
    }

    if (error) {
      this.notifyElement.innerHTML = 'Ocorreu algum problema... Verifique se o e-mail já não está sendo utilizado.';
    }
  }

  reset () {
    this.notifyElement.innerHTML = '';
  }
}

export default FormNotifyService;
