import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';

interface IconLink {
    text: string;
    href: string;
}

interface IconListProps {
    items: IconLink[];
    className?: string;
}

export default function IconList({ items, className = '' }: IconListProps) {
    return (
        <ul className={`space-y-5 ${className}`}>
            {items.map((item, index) => (
                <li key={index}>
                    <Link
                        href={item.href}
                        className="flex items-center group text-[#7FDED0] hover:text-[#1DD1A1] transition-colors duration-300"
                    >
                        <ArrowRightCircle
                            className="w-5 h-5 text-[#1DD1A1] mr-2 shrink-0"
                        />
                        <span className="text-base font-semibold">{item.text}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
