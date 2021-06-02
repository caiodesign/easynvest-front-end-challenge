/* eslint-disable no-undef */
import { ListUserProvider } from '../ListUserProvider';

export class ListUsersMockProvider extends ListUserProvider {
  async get () {
    const response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
    const data = await response.json();

    this.users = data;

    return this.users;
  }
}

export default ListUsersMockProvider;
