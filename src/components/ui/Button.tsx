import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-[10px] font-extrabold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary: "bg-primary text-secondary hover:bg-secondary hover:text-primary border-none",
            secondary: "bg-secondary text-primary hover:bg-primary hover:text-secondary border-none",
            outline: "border-2 border-primary text-primary hover:bg-primary hover:text-secondary bg-transparent",
        };

        const sizes = {
            sm: "px-6 py-2.5 text-sm",
            md: "px-[37px] py-[17px] text-base",
            lg: "px-10 py-5 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
