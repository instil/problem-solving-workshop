import {NameError} from "./errors/NameError";

export function evaluateName(value: string): string {
    try {
        if (!/^[a-zA-Z]+$/.test(value)) {
           throw new Error(`invalid name: ${value}`);
        }

        return `Hello, ${value}`;
    } catch (error) {
        console.error(error);
        return "";
    }
}
