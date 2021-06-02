import { GetUsersUseCase } from './GetUsersUseCase';

export class GetUsersController {
  constructor(getUsersUseCase = GetUsersUseCase) {
    this.getUsersUseCase = getUsersUseCase;
  }

  async handle() {
    await this.getUsersUseCase.execute();
  }
}

export default GetUsersController;
