import {NameError} from "./errors/NameError";

export function evaluateName(value: string): string {
    // TODO: fix this code and add appropriate errors & logs
    try {
        if (!/^[a-zA-Z]+$/.test(value)) {
           // do something
        }

        return value;
    } catch (error) {
        // do something
        return value;
    }
}
