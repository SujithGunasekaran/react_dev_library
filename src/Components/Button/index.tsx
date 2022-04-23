import React, { ReactElement } from 'react';
import './style.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'filled',
    mode?: 'primary' | 'success' | 'danger',
    type?: 'button' | 'submit',
    shape?: 'rounded' | 'sharp',
    disabled?: boolean,
    className?: string,
    children: string | ReactElement,
    onClick: React.MouseEventHandler
}


const Button: React.FC<ButtonProps> = (props) => {

    // props
    const {
        children,
        variant = "filled",
        mode = "primary",
        type = "button",
        shape = "rounded",
        disabled = false,
        className = '',
        onClick
    } = props;

    return (
        <button
            onClick={(e) => onClick(e)}
            type={type}
            disabled={disabled}
            className={`${className} bt_button ${variant} ${mode} ${shape}`}
        >
            {children}
        </button>
    )

}


export default Button;
