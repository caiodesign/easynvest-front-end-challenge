import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(createUserUseCase = CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle({
    name, email, cpf, phone,
  }) {
    this.createUserUseCase.execute({
      name, email, cpf, phone,
    });
  }
}

export default CreateUserController;
