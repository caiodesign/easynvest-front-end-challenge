import FormValidate from '../validators/form';

class FormController {
  constructor() {
    this.errors = [];
  }

  hasInputErrors () {
    return Boolean(this.errors.length);
  }

  validateField ({ input, errorMessage }) {
    if (!input) return;

    const errorElement = document.querySelector(`#${input.name}-error`);
    const validator = new FormValidate();

    if (validator.validate(input.name, input.value)) {
      input.classList.remove('error');
      this.errors = this.errors.filter((error) => error !== input.name);
      errorElement.innerText = '';

      return;
    }

    input.classList.add('error');
    this.errors.push(input.name);
    errorElement.innerText = errorMessage;
  }

  validateInputValues(input) {
    this.validateField({ input: input.name, errorMessage: 'Campo deve conter 3 caracteres ou mais' });
    this.validateField({ input: input.email, errorMessage: 'E-mail inválido' });
    this.validateField({ input: input.cpf, errorMessage: 'CPF inválido' });
    this.validateField({ input: input.phone, errorMessage: 'Telefone inválido' });
  }

  sendSuccessFeedback() {
    if (this.hasInputErrors) return;

    document.querySelector('#success');
  }

  register(input) {
    this.validateInputValues(input);
    this.sendSuccessFeedback();
    }
  }
}

export default FormController;
