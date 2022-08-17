import { passwordRegEx } from "../../constants/regEx";
import { validateByRegEx } from "./validateByRegEx";

export const validatePassword = (password: string) => validateByRegEx(password, passwordRegEx);
