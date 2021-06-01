class ValidatorPhone {
  constructor (value) {
    this.value = value;
  }

  isValid() {
    const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/;

    return this.value.match(phoneRegex);
  }
}

export default ValidatorPhone;
