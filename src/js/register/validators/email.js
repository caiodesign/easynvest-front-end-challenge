class ValidatorEmail {
  constructor (value) {
    this.value = value;
  }

  isValid() {
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return this.value.match(mailRegex);
  }
}

export default ValidatorEmail;
