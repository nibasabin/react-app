import React from "react";

interface ButtonProps {
    title: string,
    type: any,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({title,type,className,onClick}: ButtonProps) => (
<button className = {className} type =  {type} onClick =  {onClick}>{title}</button>  
)