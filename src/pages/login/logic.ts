import { redirectToSignUpHandler } from "./events/redirectToSignUpHandler";


export function addRedirectToSignUpEvent() {
    const $href = document.querySelector('#signup-link');

    $href.addEventListener('click', redirectToSignUpHandler);
}
