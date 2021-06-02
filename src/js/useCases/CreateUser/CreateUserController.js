import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserController {
  constructor(createUserUseCase = CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle({
    name, email, cpf, phone,
  } = CreateUserRequestDTO) {
    this.createUserUseCase.execute({
      name, email, cpf, phone,
    });
  }
}

export default CreateUserController;
