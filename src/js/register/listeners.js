class EventHandler {
  onSubmit (register, cb) {
    register
      .addEventListener('submit', (event) => {
        event.preventDefault();

        // const inputs = {
        //   name: event.target.name,
        //   email: event.target.email,
        //   cpf: event.target.cpf,
        //   phone: event.target.phone,
        // };

        cb(event.target);
      });
  }
}

export default EventHandler;
