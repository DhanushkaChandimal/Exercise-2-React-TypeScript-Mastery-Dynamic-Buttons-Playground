import type React from "react";

export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps{
    size: ButtonSize;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) =>void;
    children:React.ReactNode;
}