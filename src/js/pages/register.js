import '../../scss/home.scss';

import { RegisterOnSubmitListener } from '../listeners/implementations/RegisterListeners/RegisterOnSubmitListener';
import { createUserController } from '../useCases/CreateUser';
import { RegisterOnChangeListener } from '../listeners/implementations/RegisterListeners/RegisterOnChangeListener';
import { getUsersController } from '../useCases/GetUsers/index';

function init () {
  const registerOnSubmitListener = new RegisterOnSubmitListener('#register', createUserController);
  const registerOnChangeListener = new RegisterOnChangeListener('#phone', '#cpf');

  registerOnSubmitListener.init();
  registerOnChangeListener.init();
  getUsersController.handle();
}

init();
