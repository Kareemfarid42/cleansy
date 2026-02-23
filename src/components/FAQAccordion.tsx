'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(items[0]?.id || null);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className={`w-full space-y-4 ${className}`}>
            {items.map((item) => {
                const isOpen = openItem === item.id;

                return (
                    <div
                        key={item.id}
                        className="border-2 border-primary rounded-[10px] overflow-hidden bg-background transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/10 transition-colors"
                        >
                            <span className="text-lg font-semibold text-primary pr-4">
                                {item.question}
                            </span>
                            <ChevronDown
                                className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                    }`}
                                size={24}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-6 pt-2 text-text">
                                <p className="leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
