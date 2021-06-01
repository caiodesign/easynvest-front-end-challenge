import User from '../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UsersRepository } from '../../repositories/UsersRepository';
import { NotifyUserService } from '../../services/NotifyUserService';
import { ValidatorInputService } from '../../services/ValidatorInputService';
import { ErrorInputService } from '../../services/ErrorInputService';

export class CreateUserUseCase {
  constructor(
    usersRepository = UsersRepository,
    notifyUserService = NotifyUserService,
    validatorService = ValidatorInputService,
    errorInputService = ErrorInputService,
  ) {
    this.usersRepository = usersRepository;
    this.notifyUser = notifyUserService;
    this.validatorService = validatorService;
    this.errorInputService = errorInputService;
  }

  execute (data = CreateUserRequestDTO) {
    this.notifyUser.reset();

    const validateUserData = this.validatorService.validate(data);
    this.errorInputService.checkForErrors(validateUserData);

    if (this.errorInputService.hasErrors) return;

    const userAlreadyExists = this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      this.notifyUser.notify({ error: true });

      throw new Error('User already exists!');
    }

    const user = new User(data);

    this.usersRepository.save(user);
    this.notifyUser.notify({ success: true });
  }
}

export default CreateUserUseCase;
