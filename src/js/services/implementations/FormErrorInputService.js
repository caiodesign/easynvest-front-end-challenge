/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { ErrorInputService } from '../ErrorInputService';

export class FormErrorInputService extends ErrorInputService {
  getHTMLElements (inputs) {
    return Object.keys(inputs)
      .reduce(
        (previousValue, currentValue) => (
          previousValue = {
            ...previousValue,
            [currentValue]: document.querySelector(`#${currentValue}-error`),
          }
        ), {},
      );
  }

  checkForErrors(inputs) {
    this.hasErrors = Object.values(inputs).includes(false);
    this.HTMLElements = this.getHTMLElements(inputs);

    Object.entries(inputs).map((arr) => {
      const currentElement = this.HTMLElements[arr[0]];

      if (arr.includes(false)) {
        return currentElement.parentElement.classList.add('error');
      }

      return currentElement.parentElement.classList.remove('error');
    });
  }
}

export default FormErrorInputService;
