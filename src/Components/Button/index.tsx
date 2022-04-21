import React, { MouseEventHandler, ReactElement } from 'react';
import './style.css';

interface ButtonProps {
    variant?: 'outlined' | 'filled',
    mode?: 'primary' | 'success' | 'danger',
    type?: 'button' | 'submit',
    shape?: 'rounded' | 'sharp',
    disabled?: boolean,
    className?: string,
    style?: object,
    labelIcon?: ReactElement,
    children: string | ReactElement,
    onClick: MouseEventHandler<HTMLButtonElement>
}


const Button: React.FC<ButtonProps> = (props) => {

    // props
    const {
        children,
        onClick,
        variant = "filled",
        mode = "primary",
        type = "button",
        shape = "rounded",
        disabled = false,
        className = ''
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${className} bt_button ${variant} ${mode} ${shape}`}
        >
            {children}
        </button>
    )

}


export default Button;
