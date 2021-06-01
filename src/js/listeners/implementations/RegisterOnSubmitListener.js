import { Listener } from '../Listener';

export class RegisterOnSubmitListener extends Listener {
  formatData(input) {
    return {
      name: input?.target?.name?.value,
      email: input?.target?.email?.value,
      cpf: input?.target?.cpf?.value,
      phone: input?.target?.phone?.value,
    };
  }

  init() {
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();

      this.controller.handle(this.formatData(event));
    });
  }
}

export default RegisterOnSubmitListener;
