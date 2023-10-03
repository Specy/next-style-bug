import { ReactNode } from "react";
import s from './button.module.scss'


interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export function Button({children, className}: ButtonProps){
    return <button className={`${s.button} ${className}`}>
        {children}
    </button>
}