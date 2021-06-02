import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';
import { ListUsersMockProvider } from '../../providers/implementations/ListUsersMockProvider';
import { GetUsersUseCase } from './GetUsersUseCase';
import { GetUsersController } from './GetUsersController';

const storageUsersRepository = new StorageUsersRepository();
const getUsersProvider = new ListUsersMockProvider();

const getUsersUseCase = new GetUsersUseCase(
  '#loader',
  getUsersProvider,
  storageUsersRepository,
);

const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersUseCase, getUsersController };
