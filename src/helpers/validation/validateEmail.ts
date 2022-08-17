import { emailRegEx } from "../../constants/regEx";
import { validateByRegEx } from "./validateByRegEx";

export const validateEmail = (email: string) => validateByRegEx(email, emailRegEx);