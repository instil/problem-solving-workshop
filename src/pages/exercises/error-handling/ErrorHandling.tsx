import React, {ChangeEvent, FC, useState} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import {evaluateName} from "./ErrorHandlingService";
import "./ErrorHandling.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";

const ErrorHandling: FC = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const response = evaluateName(input);
            setOutput(response);
        } catch (error) {
            setErrorMessage("Please enter a valid username.");
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
        setOutput("");
        setErrorMessage("");
    }

    return (
        <>
            <Navbar pageTitle="Error Handling Exercise"/>
            <div className="error-handling-exercise">
                <h3 className="error-handling-exercise__sub-title">Task: </h3>
                <p className="error-handling-exercise__description">Fix the code to display an error message on screen</p>
                <h4 className="error-handling-exercise__sub-title">What is your name?</h4>
                <form onSubmit={submitForm}>
                    <input
                        value={input}
                        onChange={onChange}
                        type="text"
                        placeholder="Joe.Bloggs"
                        className="input"
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <p className="error-handling-exercise__results">
                    {!output && <TypingCaret/>}
                    {output && <p>Hello, {output}</p>}
                </p>

                <p className="error-handling-exercise__error-message">
                    {errorMessage && <p>{errorMessage}</p>}
                </p>
            </div>
        </>
    );
};

export default ErrorHandling;
