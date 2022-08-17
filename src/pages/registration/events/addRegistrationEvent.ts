import { registrationHandler } from "./handlers/registrationHandler";

export const addRegistrationEvent = () => {
  const $button = document.querySelector('#button-signup');

  $button.addEventListener('click', registrationHandler);
};