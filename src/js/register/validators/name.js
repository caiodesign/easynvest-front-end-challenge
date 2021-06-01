class ValidatorName {
  constructor (value) {
    this.value = value;
  }

  isValid() {
    return this.value.length > 3;
  }
}

export default ValidatorName;
