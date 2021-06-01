import User from '../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { UsersRepository } from '../../repositories/UsersRepository';
import { NotifyUserService } from '../../services/NotifyUserService';

export class CreateUserUseCase {
  constructor(usersRepository = UsersRepository, notifyUserService = NotifyUserService) {
    this.usersRepository = usersRepository;
    this.notifyUser = notifyUserService;
  }

  async execute (data = CreateUserRequestDTO) {
    this.notifyUser.reset();

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
