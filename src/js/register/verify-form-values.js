import cpfValidator from '../utils/cpf-validator';

class VerifyFormValues {
  constructor (input) {
    this.name = input.target.name;
    this.email = input.target.email;
    this.cpf = input.target.cpf;
    this.phone = input.target.phone;
  }

  validateName(value) {
    return value.length > 3;
  }

  validateEmail(value) {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return value.match(mailRegex);
  }

  validateCpf(value) {
    return cpfValidator(value);
  }

  validatePhone(value) {
    const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/;

    return value.match(phoneRegex);
  }
}

export default VerifyFormValues;
