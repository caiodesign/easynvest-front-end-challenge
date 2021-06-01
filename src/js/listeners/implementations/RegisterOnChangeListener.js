import { Listener } from '../Listener';

export class RegisterOnChangeListener extends Listener {
  constructor(phone, cpf) {
    super();
    this.phone = phone;
    this.cpf = cpf;
  }

  maskPhone () {
    this.phone.addEventListener('keypress', (event) => {
      switch (this.phone.value.length) {
        case 1:
          this.phone.value = '(' + this.phone.value;
          break;
        case 3:
          this.phone.value += ') ';
          break;
        case 9:
          this.phone.value += '-';
          break;
        case 14:
          this.phone.value = this.phone.value.substring(0, 9) + this.phone.value.charAt(10) + '-' + this.phone.value.substring(11);
          break;
        default:
          break;
      }

      if (event.charCode > 47 && event.charCode < 58) {
        return true;
      }
      return false;
    });
  }

  maskCpf () {
    this.cpf.addEventListener('keypress', () => {
      switch (this.cpf.value.length) {
        case 3:
          this.cpf.value += '.';
          break;
        case 7:
          this.cpf.value += '.';
          break;
        case 11:
          this.cpf.value += '-';
          break;
        default:
          break;
      }
    });
  }

  init() {
    this.maskPhone();
    this.maskCpf();
  }
}

export default RegisterOnChangeListener;
