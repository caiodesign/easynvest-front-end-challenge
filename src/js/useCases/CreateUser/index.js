import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';
import { FormNotifyService } from '../../services/implementations/FormNotifyService';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const formNotifyService = new FormNotifyService();
const storageUsersRepository = new StorageUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  storageUsersRepository,
  formNotifyService,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
