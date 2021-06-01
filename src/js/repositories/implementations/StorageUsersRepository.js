import { UsersRepository } from '../UsersRepository';

export class StorageUsersRepository extends UsersRepository {
  constructor() {
    super();
    this.users = window.localStorage.getItem('users');
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  save(user) {
    const {
      id, name, email, cpf, phone,
    } = user;

    if (id && name && email && cpf && phone) this.users.push(user);
  }
}

export default StorageUsersRepository;
