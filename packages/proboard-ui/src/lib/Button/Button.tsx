import { forwardRef } from 'react';
import { ButtonProps } from './ButtonTypes';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, onClick, disabled, ...others }, ref) => {
        return (
            <button
                {...others}
                ref={ref}
                className={`min-w-[80px] py-[6px] px-[16px] hover:shadow-lg hover:opacity-80 ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
);

export default Button;
