import '../../scss/list.scss';
import { listUsersController } from '../useCases/ListUsers';
import { getUsersController } from '../useCases/GetUsers/index';

async function init () {
  await getUsersController.handle();
  listUsersController.handle();
}

init();
