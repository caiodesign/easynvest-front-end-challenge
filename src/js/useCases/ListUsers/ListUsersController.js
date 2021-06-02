import { ListUsersUseCase } from './ListUsersUseCase';
import { UserOnClickListener } from '../../listeners/implementations/ListListeners/UserOnClickListener';

export class ListUsersController {
  constructor(listUsersUseCase = ListUsersUseCase, listeners = UserOnClickListener) {
    this.listUsersUseCase = listUsersUseCase;
    this.listeners = listeners;
  }

  execListener() {
    const self = this;
    function onRemoveClick(email) {
      self.remove(email);
    }

    this.listeners.init(onRemoveClick);
  }

  remove(email) {
    this.listUsersUseCase.remove(email);
    this.handle();
  }

  handle(users) {
    this.listUsersUseCase.execute(users);
    this.execListener();
  }
}

export default ListUsersController;
