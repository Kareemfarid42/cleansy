import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl shadow-md p-6",
                hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return <div className={cn("mb-4", className)}>{children}</div>;
};

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
    return <h3 className={cn("text-2xl font-bold text-primary", className)}>{children}</h3>;
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return <div className={cn("text-accent-light", className)}>{children}</div>;
};
