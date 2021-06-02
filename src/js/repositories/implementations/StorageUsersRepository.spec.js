import { StorageUsersRepository } from './StorageUsersRepository';
import { LocalStorageMock } from '../../mocks/LocalStorageMock';

const user = {
  name: 'Caio Oliveira',
  email: 'colive.dev@gmail.com',
  cpf: '420.739.308-08',
  phone: '(11) 96913-2927',
};

const users = [
  user,
  {
    ...user,
    email: 'caiooliveiras@live.com',
  },
];

const storageUsersRepository = new StorageUsersRepository();
global.localStorage = new LocalStorageMock();

describe('StorageUsersRepository', () => {
  beforeEach(() => {
    global.localStorage.setItem('users', JSON.stringify(users));
  });

  it('should return ALL data from USERS storage', () => {
    const result = storageUsersRepository.getAll();
    expect(result).toEqual(users);
  });

  it('should return a specif USER when use findByEmail method', () => {
    const usr = storageUsersRepository.findByEmail(user.email);

    expect(usr).toBeTruthy();
  });

  it('should set a new USER into storage', () => {
    storageUsersRepository.save({ ...user, email: 'test@test.com' });
    const newUser = storageUsersRepository.findByEmail('test@test.com');

    expect(newUser).toBeTruthy();
  });

  it('should remove a USER from storage using EMAIL', () => {
    storageUsersRepository.deleteByEmail(user.email);
    const usr = storageUsersRepository.findByEmail(user.email);

    expect(usr).toBeFalsy();
  });

  it('should add a list of USERS', () => {
    global.localStorage.clear();
    expect(storageUsersRepository.getAll()).toHaveLength(0);

    storageUsersRepository.saveByList(users);
    const usrs = storageUsersRepository.getAll();

    expect(usrs).toHaveLength(2);
  });
});
