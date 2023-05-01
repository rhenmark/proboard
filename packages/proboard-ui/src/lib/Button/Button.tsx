import { forwardRef } from "react"
import { ButtonProps } from "./ButtonTypes"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className }, ref) => {
    return (
        <button ref={ref} className={className}>
            {children}
        </button >
    )
})


export default Button;
