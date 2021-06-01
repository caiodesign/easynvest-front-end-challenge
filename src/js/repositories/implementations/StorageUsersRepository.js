import { UsersRepository } from '../UsersRepository';

export class StorageUsersRepository extends UsersRepository {
  constructor() {
    super();
    this.storageKey = 'users';
    this.users = JSON.parse(window.localStorage.getItem('users')) || [];
  }

  getAll () {
    return this.users;
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  save(user) {
    const {
      id, name, email, cpf, phone,
    } = user;

    if (id && name && email && cpf && phone) {
      this.users.push(user);

      console.log(`Usuário ${name} com email: ${email}, cpf: ${cpf}, telefone: ${phone} registrado!`);
      console.log(`Total de ${this.users.length} registros.`);

      window.localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    }
  }
}

export default StorageUsersRepository;
