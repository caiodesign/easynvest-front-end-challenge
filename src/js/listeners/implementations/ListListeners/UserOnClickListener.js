import { Listener } from '../../Listener';

export class UserOnClickListener extends Listener {
  init(onClick) {
    const users = document.querySelectorAll(`${this.element} img`);

    Array.from(users).map((user) => {
      user.addEventListener('click', (event) => {
        event.preventDefault();

        const userEmail = event.target.getAttribute('data-id');

        if (userEmail) onClick(userEmail);
      });
    });
  }
}

export default UserOnClickListener;
