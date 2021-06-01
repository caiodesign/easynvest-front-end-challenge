import FormController from './form/controller';
import FormListeners from './form/listeners';

import '../scss/app.scss';

function init () {
  const formController = new FormController();
  const formListeners = new FormListeners();
  const formElement = document.querySelector('#register');

  formListeners.onSubmit(formElement, formController.register);
}

init();
