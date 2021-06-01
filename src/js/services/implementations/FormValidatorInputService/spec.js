import { FormValidatorInputService } from '.';

const user = {
  name: 'Caio Oliveira',
  email: 'colive.dev@gmail.com',
  cpf: '420.739.308-08',
  phone: '(11) 96913-2927',
};

const formValidatorInputService = new FormValidatorInputService();

describe('index.html', () => {
  it('should return TRUE when user name has 3 or more characters', () => {
    expect(formValidatorInputService.validateName(user.name)).toBeTruthy();
  });

  it('should return FALSE when user name does not have 3 or more characters', () => {
    expect(formValidatorInputService.validateName('ca')).toBeFalsy();
  });

  it('should return TRUE when EMAIL is valid', () => {
    expect(formValidatorInputService.validateEmail(user.email)).toBeTruthy();
  });

  it('should return FALSE when EMAIL is not valid', () => {
    expect(formValidatorInputService.validateEmail('caiocom')).toBeFalsy();
    expect(formValidatorInputService.validateEmail('caio.com')).toBeFalsy();
    expect(formValidatorInputService.validateEmail('@com.br')).toBeFalsy();
  });

  it('should return TRUE when CPF is valid', () => {
    expect(formValidatorInputService.validateCpf(user.cpf)).toBeTruthy();
  });

  it('should return FALSE when CPF is not valid', () => {
    expect(formValidatorInputService.validateCpf('444.444.444-00')).toBeFalsy();
  });

  it('should return TRUE when phone is valid', () => {
    expect(formValidatorInputService.validatePhone(user.phone)).toBeTruthy();
  });

  it('should return FALSE when phone is not valid', () => {
    expect(formValidatorInputService.validatePhone('99999-9999')).toBeFalsy();
    expect(formValidatorInputService.validatePhone('11 99999-9999')).toBeFalsy();
    expect(formValidatorInputService.validatePhone('(11 99999-9999')).toBeFalsy();
    expect(formValidatorInputService.validatePhone('(11) 9999-99')).toBeFalsy();
    expect(formValidatorInputService.validatePhone('(11) 99999-99')).toBeFalsy();
  });
});
