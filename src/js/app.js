import '../scss/app.scss';
import { RegisterOnSubmitListener } from './listeners/implementations/RegisterOnSubmitListener';
import { createUserController } from './useCases/CreateUser';

function init () {
  const registerOnSubmitListener = new RegisterOnSubmitListener(document.querySelector('#register'), createUserController);

  registerOnSubmitListener.init();
}

init();
