
import { addRegistrationEvent } from "./events/addRegistrationEvent";
import { signUpTemplate } from "./template";
import { addRedirectToLogInEvent } from "./events/addRedirectToLogInEvent";
import { addRemoveErrorEvents } from "./events/addRemoveErrorEvents";



export const render = () => {
  const $app = document.querySelector('.app');

  $app.innerHTML = signUpTemplate;

  addRedirectToLogInEvent();
  addRemoveErrorEvents();
  addRegistrationEvent();
}


