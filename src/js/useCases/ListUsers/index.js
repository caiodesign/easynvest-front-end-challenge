import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';
import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';
import UserTemplateComponent from '../../templates/UserTemplateComponent';
import { UserOnClickListener } from '../../listeners/implementations/ListListeners/UserOnClickListener';
import { UserDataFormatter } from '../../services/implementations/UserDataFormatter';

const storageUsersRepository = new StorageUsersRepository();
const userOnClickListener = new UserOnClickListener('.__user');
const userDataFormatter = new UserDataFormatter();

const listUsersUseCase = new ListUsersUseCase(
  storageUsersRepository,
  UserTemplateComponent,
  document.querySelector('#__users'),
  userDataFormatter,
);

const listUsersController = new ListUsersController(listUsersUseCase, userOnClickListener);

export { listUsersUseCase, listUsersController };
