import React, { useRef } from "react";
import { PanelButton, PanelText } from "./QandAItem.styles";

const QandAItem = ({question}) => {
    const { q, answer } = question;
    let clicked = false;
    const panel = useRef(null);

    const toggle = () => {
        clicked = !clicked;
        if (clicked) {
            panel.current.style.display = "block";
        } else {
            panel.current.style.display = "none";
        }
    }

    return (
        <div>
            <PanelButton className="accordion" onClick={toggle}>+ {q}</PanelButton>
            <div ref={panel} className="panel">
            <PanelText>{answer}</PanelText>
            </div>
        </div>
    );
}

export default QandAItem;