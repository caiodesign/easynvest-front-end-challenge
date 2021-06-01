class ValidatorPhone {
  isValid(value) {
    const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/;

    return value.match(phoneRegex);
  }
}

export default ValidatorPhone;
