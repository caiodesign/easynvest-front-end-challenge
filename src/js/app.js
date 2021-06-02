import '../scss/app.scss';
import { RegisterOnSubmitListener } from './listeners/implementations/RegisterOnSubmitListener';
import { createUserController } from './useCases/CreateUser';
import { RegisterOnChangeListener } from './listeners/implementations/RegisterOnChangeListener';

function init () {
  // const registerOnSubmitListener = new RegisterOnSubmitListener(document.querySelector('#register'), createUserController);
  // const registerOnChangeListener = new RegisterOnChangeListener(document.querySelector('#phone'), document.querySelector('#cpf'));

  // registerOnSubmitListener.init();
  // registerOnChangeListener.init();

  // document.querySelector('html').style.display = 'none';
}

init();
