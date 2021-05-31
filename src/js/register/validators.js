export function isValidCPF(data) {
  if (typeof data !== 'string') return false;

  const cpf = data.replace(/[\s.-]*/igm, '');

  if (
    !cpf
      || cpf.length !== 11
      || cpf === '00000000000'
      || cpf === '11111111111'
      || cpf === '22222222222'
      || cpf === '33333333333'
      || cpf === '44444444444'
      || cpf === '55555555555'
      || cpf === '66666666666'
      || cpf === '77777777777'
      || cpf === '88888888888'
      || cpf === '99999999999'
  ) {
    return false;
  }

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i += 1) { sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i); }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10), 10)) return false;

  sum = 0;

  for (let i = 1; i <= 10; i += 1) { sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i); }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11), 10)) return false;

  return true;
}

class Validator {
  validateName(value) {
    return value.length > 3;
  }

  validateEmail(value) {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return value.match(mailRegex);
  }

  validateCpf(value) {
    return isValidCPF(value);
  }

  validatePhone(value) {
    const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/;

    return value.match(phoneRegex);
  }

  validate(input, value) {
    switch (input) {
      case 'name':
        return this.validateName(value);
      case 'email':
        return this.validateEmail(value);
      case 'cpf':
        return this.validateCpf(value);
      case 'phone':
        return this.validatePhone(value);
      default:
        return true;
    }
  }
}

export default Validator;
