import { GlobalOnLoadListener } from './listeners/implementations/GlobalListeners/GlobalOnLoadListener';

function init () {
  const globalOnLoadListener = new GlobalOnLoadListener(document.querySelector('#loader'));

  globalOnLoadListener.init();
}

init();
