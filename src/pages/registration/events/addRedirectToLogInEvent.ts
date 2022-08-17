import { redirectToLogInHandler } from "./handlers/redirectToLogInHandler";

export const addRedirectToLogInEvent = () => {
  const $href = document.querySelector('#login-link');

  $href.addEventListener('click', redirectToLogInHandler);
};