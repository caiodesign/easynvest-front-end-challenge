import FormEventListeners from './form/listeners';
import '../scss/app.scss';

function init () {
  const formEventHandler = new FormEventListeners();

  formEventHandler.onSubmit();
}

init();
