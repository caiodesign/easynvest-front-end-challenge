import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';
import { FormNotifyService } from '../../services/implementations/FormNotifyService';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { FormErrorInputService } from '../../services/implementations/FormErrorInputService';
import { FormValidatorInputService } from '../../services/implementations/FormValidatorInputService';
import { UserDataFormatter } from '../../services/implementations/UserDataFormatter';

const formNotifyService = new FormNotifyService();
const storageUsersRepository = new StorageUsersRepository();
const formErrorInputService = new FormErrorInputService();
const formValidatorInputService = new FormValidatorInputService();
const userDataFormatter = new UserDataFormatter();

const createUserUseCase = new CreateUserUseCase(
  storageUsersRepository,
  formNotifyService,
  formValidatorInputService,
  formErrorInputService,
  userDataFormatter,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
