import {NameError} from "./errors/NameError";

function isValidName(value: string): boolean {
    if (!/^[a-zA-Z]+$/.test(value)) {
        throw new NameError("Your name should contain only letters");
    }
    return true;
}

export function evaluateName(value: string): string {
    // TODO: fix this code and add appropriate errors & logs
    try {
        value = value.trim();
        if (value === "") {
            throw new NameError("Name is required!");
        }
        if (!isValidName(value)) {
            throw new NameError("Your name should contain only letters");
        }

        return value;
    } catch (error) {
        // eslint-disable-line no-console
        console.error("An error has occurred", error);
        throw new NameError(`Unable to evaluate name, ${value}`);
    }
}
