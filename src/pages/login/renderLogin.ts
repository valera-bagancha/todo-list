import { addRedirectToSignUpEvent } from "./logic";
import { logInTemplate } from "./template";

export function renderLogIn() {
  const $app = document.querySelector('.app');

  $app.innerHTML = logInTemplate;

  addRedirectToSignUpEvent();
}


