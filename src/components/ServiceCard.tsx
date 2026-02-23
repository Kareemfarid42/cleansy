import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    variant = 'primary',
    className = ''
}: ServiceCardProps) {
    const bgColor = variant === 'primary' ? 'bg-primary' : 'bg-background';
    const titleColor = variant === 'primary' ? 'text-secondary' : 'text-primary';
    const descColor = variant === 'primary' ? 'text-background' : 'text-text';

    return (
        <div
            className={`${bgColor} rounded-[20px] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
            style={{ width: '285px' }}
        >
            <div className="mb-3">
                <Image
                    src={icon}
                    alt={title}
                    width={80}
                    height={80}
                    className="object-contain"
                />
            </div>

            <h3
                className={`text-xl font-bold mb-4 ${titleColor}`}
                dangerouslySetInnerHTML={{ __html: title }}
            />

            <p className={`text-sm leading-relaxed ${descColor}`}>
                {description}
            </p>
        </div>
    );
}
