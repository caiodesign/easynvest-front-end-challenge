import { ID } from '../lib/id';

class User {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.cpf = props.cpf;
    this.phone = props.phone;

    if (!props.id) {
      this.id = ID();
    }
  }
}

export default User;
