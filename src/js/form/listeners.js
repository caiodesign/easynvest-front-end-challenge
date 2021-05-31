import FormController from './controller';

class EventHandler {
  constructor() {
    this.form = new FormController();
    this.formElement = document.querySelector('#register');
  }

  onSubmit () {
    this.formElement
      .addEventListener('submit', (event) => {
        event.preventDefault();

        const inputs = {
          name: event.target.name,
          email: event.target.email,
          cpf: event.target.cpf,
          phone: event.target.phone,
        };

        this.form.validateInputValues(inputs);
      });
  }
}

export default EventHandler;
