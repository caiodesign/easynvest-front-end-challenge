import isValidCpf from '../helpers/cpf-validator';

class FormValidate {
  validateName(value) {
    return value.length > 3;
  }

  validateEmail(value) {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return value.match(mailRegex);
  }

  validateCpf(value) {
    return isValidCpf(value);
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

export default FormValidate;
