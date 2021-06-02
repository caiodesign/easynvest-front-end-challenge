/* eslint-disable no-undef */
// src/utils/currency.test.js
import { ListUsersMockProvider } from './ListUsersMockProvider';

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

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(users),
}));

const listUsersMockProvider = new ListUsersMockProvider();

describe('ListUsersMockProvider', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return an USER', async () => {
    const response = await listUsersMockProvider.get();

    expect(response).toEqual(users);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
