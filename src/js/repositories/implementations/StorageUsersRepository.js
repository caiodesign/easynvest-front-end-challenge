/* eslint-disable array-callback-return */
import { UsersRepository } from '../UsersRepository';

export class StorageUsersRepository extends UsersRepository {
  constructor() {
    super();
    this.storageKey = 'users';
    this.users = this.getAll();
  }

  getAll () {
    const users = window.localStorage.getItem('users');

    if (users) return JSON.parse(window.localStorage.getItem('users'));

    return [];
  }

  setItem(item) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(item));
  }

  findByEmail(email) {
    return this.getAll().find((user) => user.email === email);
  }

  saveByList(users = []) {
    users.map((user) => {
      if (!this.findByEmail(user.email)) this.save(user, false);
    });
  }

  deleteByEmail(email) {
    const users = this.getAll().filter((user) => email !== user.email);
    this.setItem(users);
  }

  save(user, log = true) {
    const {
      name, email, cpf, phone,
    } = user;

    if (name && email && cpf && phone) {
      const users = [...this.getAll(), user];

      if (log) {
        console.log(`Usuário ${name} com email: ${email}, cpf: ${cpf}, telefone: ${phone} registrado!`);
        console.log(`Total de ${users.length} registros.`);
      }

      this.setItem(users);
    }
  }
}

export default StorageUsersRepository;
