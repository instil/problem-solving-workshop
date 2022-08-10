export class NameError {
    constructor(message: string) {
        const error = Error(message);

        // set immutable object properties
        Object.defineProperty(error, "message", {
            get() {
                return message;
            }
        });
        Object.defineProperty(error, "name", {
            get() {
                return "NameError";
            }
        });

        Error.captureStackTrace(error, NameError);
        return error;
    }
}
