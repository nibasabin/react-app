import React from "react";

interface ButtonProps {
    title: string,
    type: any,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (buttonProps: ButtonProps) => (
<button className = {buttonProps.className} type =  {buttonProps.type} onClick =  {buttonProps.onClick}>{buttonProps.title}</button>  
)