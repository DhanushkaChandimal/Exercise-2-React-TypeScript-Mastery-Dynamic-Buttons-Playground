import type React from "react";
import type { ButtonProps } from "../models/ButtonProps.model";

const ButtonExersize: React.FC<ButtonProps> = (props) => {
    return (
        <button className={props.size} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonExersize;