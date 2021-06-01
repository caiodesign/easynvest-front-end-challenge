import FormValidate from '../validators/form';

class FormController {
  constructor() {
    this.inputValidator = new FormValidate();
    this.errors = [];
  }

  hasInputErrors () {
    return Boolean(this.errors.length);
  }

  validateField ({ input, errorMessage }) {
    if (!input) return;

    const errorElement = document.querySelector(`#${input.name}-error`);

    if (this.inputValidator.validate(input.name, input.value)) {
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
}

export default FormController;
