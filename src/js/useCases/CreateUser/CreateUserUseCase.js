import User from '../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UsersRepository } from '../../repositories/UsersRepository';
import { NotifyUserService } from '../../services/NotifyUserService';
import { ValidatorInputService } from '../../services/ValidatorInputService';
import { ErrorInputService } from '../../services/ErrorInputService';
import { DataFormatter } from '../../services/DataFormatter';

export class CreateUserUseCase {
  constructor(
    usersRepository = UsersRepository,
    notifyUserService = NotifyUserService,
    validatorService = ValidatorInputService,
    errorInputService = ErrorInputService,
    dataFormatter = DataFormatter,
  ) {
    this.usersRepository = usersRepository;
    this.notifyUser = notifyUserService;
    this.validatorService = validatorService;
    this.errorInputService = errorInputService;
    this.dataFormatter = dataFormatter;
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

    const user = new User(this.dataFormatter.format(data));

    this.usersRepository.save(user);
    this.notifyUser.notify({ success: true });
  }
}

export default CreateUserUseCase;
