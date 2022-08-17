import { renderLogIn } from "../../../login/renderLogin";

export const redirectToLogInHandler = (event: Event) => {
  event.preventDefault();
  
  renderLogIn();
};