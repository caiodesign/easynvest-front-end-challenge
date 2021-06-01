import { ValidatorInputService } from '../../ValidatorInputService';
import isCPF from '../../../lib/cpf';

export class FormValidatorInputService extends ValidatorInputService {
  validateName(value) {
    return value.length > 3;
  }

  validateEmail(value) {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return Boolean(value.match(mailRegex));
  }

  validateCpf(value) {
    return isCPF(value);
  }

  validatePhone(value) {
    const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/;

    return Boolean(value.match(phoneRegex));
  }

  validate(user) {
    return {
      name: this.validateName(user.name),
      email: this.validateEmail(user.email),
      cpf: this.validateCpf(user.cpf),
      phone: this.validatePhone(user.phone),
    };
  }
}

export default FormValidatorInputService;
