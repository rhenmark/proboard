import { forwardRef } from "react"
import { ButtonProps } from "./ButtonTypes"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, onClick }, ref) => {
    return (
        <button ref={ref} className={className} onClick={onClick}>
            {children}
        </button >
    )
})


export default Button;
