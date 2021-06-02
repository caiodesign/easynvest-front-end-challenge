import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';
import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';
import UserTemplateComponent from '../../templates/UserTemplateComponent';
import { UserOnClickListener } from '../../listeners/implementations/ListListeners/UserOnClickListener';

const storageUsersRepository = new StorageUsersRepository();
const userOnClickListener = new UserOnClickListener('.__user');

const listUsersUseCase = new ListUsersUseCase(
  storageUsersRepository,
  UserTemplateComponent,
  document.querySelector('#__users'),
);

const listUsersController = new ListUsersController(listUsersUseCase, userOnClickListener);

export { listUsersUseCase, listUsersController };
