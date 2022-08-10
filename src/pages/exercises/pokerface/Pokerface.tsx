import React, {FC, useState} from "react";
import {hands} from "./Hands";
import {calculatePokerHand} from "./PokerHand";
import Navbar from "../../../structure/navbar/Navbar";
import "./PokerfaceExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";

export const PokerHandsExercise: FC = () => {
    const [input, setInput] = useState(hands);
    const [output, setOutput] = useState("");

    function execute() {
        // See PokerHand.ts for the location of the exercise
        const result = input
            .split("\n")
            .map(x => x.trim()).filter(x => x !== "")
            .map(calculatePokerHand)
            .join("\n");

        setOutput(result);
    }

    return (
        <>
            <Navbar pageTitle="Pokerface Exercise"/>
            <div className="pokerface-exercise">
                <div className="pokerface-exercise__task">
                    <h3 className="pokerface-exercise__title">Task:</h3>
                    <p className="pokerface-exercise__description">Evaluate the following pokerhands</p>
                    <textarea cols={60} rows={6} value={input} onChange={e => setInput(e.target.value)}></textarea>
                </div>
                <button className="process-button" onClick={execute}>Process</button>
                <h3 className="pokerface-exercise__sub-title">Output:</h3>
                <p className="pokerface-exercise__results">
                    {!output && <TypingCaret/>}
                    <p>{output}</p>
                </p>
            </div>
        </>
    );
};

export default PokerHandsExercise;
