import { UsersRepository } from '../../repositories/UsersRepository';
import UserTemplateComponent from '../../templates/UserTemplateComponent';

export class ListUsersUseCase {
  constructor(
    usersRepository = UsersRepository,
    userTemplateComponent = UserTemplateComponent,
    HTMLElement = document.querySelector('#__users'),
  ) {
    this.usersRepository = usersRepository;
    this.userTemplateComponent = userTemplateComponent;
    this.HTMLElement = HTMLElement;
  }

  remove(email) {
    this.usersRepository.deleteByEmail(email);

    return this.usersRepository.getAll();
  }

  execute(users = this.usersRepository.getAll()) {
    if (users) {
      const usersHTML = users.map((user) => this.userTemplateComponent(user)).join('');
      this.HTMLElement.innerHTML = usersHTML;

      return;
    }

    this.HTMLElement.innerHTML = '';
  }
}

export default ListUsersUseCase;
