export const addRemoveErrorEvents = () => {
  const $email = document.querySelector('#verificationEmail');
  const $password = document.querySelector('#verificationPassword');
  const $confirmPassword = document.querySelector('#verificationRepeatPassword');

  const inputs = [$email, $password, $confirmPassword];

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      if (input.nextElementSibling) {
        input.nextElementSibling.remove();
      }
    });
  }); 
};