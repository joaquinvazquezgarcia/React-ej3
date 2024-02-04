import { useState } from "react";

export function Componente(props) {
    let [state, setState] = useState("");
    const addState = () => {
        setState((state = "(from changed state)"));
    };

    return (
        <>
            <h1>Hello {props.props + " " + state}!</h1>
            <button onClick={addState} disabled={state != "" ? "disabled" : ""}>
                Click me
            </button>
        </>
    );
}
