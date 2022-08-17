import {NameError} from "./errors/NameError";

function isValidName(value: string): boolean {
    if (!/^[a-zA-Z ]+$/.test(value)) {
        throw new NameError("Your name should contain only letters");
    }
    return true;
}

export function evaluateName(value: string): string {
    value = value.trim();
    if (value === "") throw new NameError("Name is required!");
    if (!isValidName(value)) throw new NameError("Your name should contain only letters");

    return value;
}
