import { emailRegEx, passwordRegEx } from "../../constants/regEx";


export function emailTest() {
    // const email = (<HTMLInputElement>document.querySelector('#verificationEmail')).value;
    // const $email = document.querySelector('#verificationEmail');
    // if (validateByRegEx(email, emailRegEx)) {
    //      return true;
    // }  
    //     $email.parentElement.insertAdjacentHTML(
		// 	"beforeend",
		// 	`<div class="main-form__error">
    //             Enter a valid E-mail
		// 	</div>`
    //     ) 
    //  return false
    
}


export function passwordTest() {
    // const password = (<HTMLInputElement>document.querySelector('#verificationPassword')).value;
    // const $password = document.querySelector('#verificationPassword');
    // if (validateByRegEx(password, passwordRegEx)) {
    //   return true;
    // } 
    //     $password.parentElement.insertAdjacentHTML(
		// 	"beforeend",
		// 	`<div class="main-form__error">
    //             8 digits and a capital letter
		// 	</div>`
    //     ) 
    //     return false;
}

export function repeatPasswordTest() {
    const password = (<HTMLInputElement>document.querySelector('#verificationPassword')).value;
    const value2 = (<HTMLInputElement>document.querySelector('#verificationRepeatPassword')).value;
    const $confirmPassword = document.querySelector('#verificationRepeatPassword');
    if (value2 == password) {
      return true;
    } 
        $confirmPassword.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
                Passwords do not match
			</div>`
        ) 
        return false; 
}

















// return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);