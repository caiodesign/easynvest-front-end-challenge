import { FormValidatorInputService } from './FormValidatorInputService';

const user = {
  name: 'Caio Oliveira',
  email: 'colive.dev@gmail.com',
  cpf: '420.739.308-08',
  phone: '(11) 96913-2927',
};

const formValidatorInputService = new FormValidatorInputService();

describe('FormValidatorInputService', () => {
  it('should return TRUE when user name has 3 or more characters', () => {
    expect(formValidatorInputService.validateName(user.name)).toBeTruthy();
  });

  it('should return FALSE when user name does not have 3 or more characters', () => {
    expect(formValidatorInputService.validateName('')).toBeFalsy();
    expect(formValidatorInputService.validateName('c')).toBeFalsy();
    expect(formValidatorInputService.validateName('ca')).toBeFalsy();

    expect(formValidatorInputService.validateName('cai')).toBeTruthy();
    expect(formValidatorInputService.validateName('caio')).toBeTruthy();
  });

  it('should return TRUE when EMAIL is valid', () => {
    expect(formValidatorInputService.validateEmail(user.email)).toBeTruthy();
  });

  it('should return FALSE when EMAIL is not valid', () => {
    const emails = ['caio', 'caio.', 'caio.com', '@.com'];

    emails.map((email) => {
      expect(formValidatorInputService.validateEmail(email)).toBeFalsy();
    });
  });

  it('should return TRUE when CPF is valid', () => {
    expect(formValidatorInputService.validateCpf(user.cpf)).toBeTruthy();
  });

  it('should return FALSE when CPF is not valid', () => {
    const cpf = [
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ];

    cpf.map((number) => {
      expect(formValidatorInputService.validateCpf(number)).toBeFalsy();
    });
  });

  it('should return TRUE when phone is valid', () => {
    expect(formValidatorInputService.validatePhone(user.phone)).toBeTruthy();
  });

  it('should return FALSE when phone is not valid', () => {
    const numbers = [
      '1',
      '11',
      '111',
      '1111',
      '11111',
      '111111',
      '2222222',
      '33333333',
    ];

    numbers.map((number) => {
      expect(formValidatorInputService.validatePhone(number)).toBeFalsy();
    });
  });
});
