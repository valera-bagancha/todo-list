import { render } from "../../registration/render"

export const redirectToSignUpHandler = (event: Event) => {
  event.preventDefault();
  
  render();
};