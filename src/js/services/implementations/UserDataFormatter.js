import { DataFormatter } from '../DataFormatter';

export class UserDataFormatter extends DataFormatter {
  cpf(data) {
    switch (data.length) {
      case 14:
        return data.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
      case 11:
        return data.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
      case 7:
        return data.replace(/(\d{3})(\d{3})/, '$1.$2.');
      case 4:
        return data.replace(/(\d{3})/, '$1.');
      default:
        return data;
    }
  }

  phone(data) {
    const numberArray = data.length === 11 ? data.match(/(\d{2})(\d{5})(\d{4})/) : data.match(/(\d{2})(\d{4})(\d{4})/);

    return '(' + numberArray[1] + ') ' + numberArray[2] + ' - ' + numberArray[3];
  }

  mask(user) {
    return {
      ...user,
      cpf: this.cpf(user.cpf),
      phone: this.phone(user.phone),
    };
  }

  format(user) {
    return {
      ...user,
      cpf: user.cpf.replace(/\D+/g, ''),
      phone: user.phone.replace(/\D+/g, ''),
    };
  }
}

export default UserDataFormatter;
