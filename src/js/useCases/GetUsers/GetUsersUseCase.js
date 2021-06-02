/* eslint-disable no-undef */
import { ListUsersMockProvider } from '../../providers/implementations/ListUsersMockProvider';
import { StorageUsersRepository } from '../../repositories/implementations/StorageUsersRepository';

export class GetUsersUseCase {
  constructor(HTMLElement, getUsersProvider = ListUsersMockProvider, storageUsersRepository = StorageUsersRepository) {
    this.HTMLElement = document.querySelector(HTMLElement);
    this.getUsersProvider = getUsersProvider;
    this.storageUsersRepository = storageUsersRepository;
  }

  async getApiUsers() {
    const data = await this.getUsersProvider.get();

    return data;
  }

  async execute() {
    try {
      const apiData = await this.getApiUsers();

      const users = new Set([...this.storageUsersRepository.users, ...apiData]);

      this.storageUsersRepository.saveByList(Array.from(users));
    } catch (err) {
      console.log(err);
    } finally {
      // Loader
      if (this.HTMLElement) {
        this.HTMLElement.style.visibility = 'hidden';
        this.HTMLElement.style.opacity = '0';
      }
    }
  }
}

export default GetUsersUseCase;
