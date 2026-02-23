'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedHeadingProps {
    prefix?: string;
    words: string[];
    postfix?: string;
    className?: string;
}

export default function AnimatedHeading({
    prefix = "Fast and Reliable",
    words = ["Professional", "Trusted", "Quality"],
    postfix = "Cleaning Services",
    className = ""
}: AnimatedHeadingProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className={`flex flex-col items-start text-4xl md:text-6xl font-extrabold text-primary leading-tight ${className}`}>
            {prefix && <span className="block mr-3 mb-2">{prefix}</span>}

            <div className="inline-grid items-center justify-items-center relative overflow-hidden text-primary bg-secondary px-6 py-3 md:py-5 rounded-[20px] mb-2 mx-0 w-fit leading-none">
                {/* Ghost element to maintain width/height based on longest word */}
                <span className="opacity-0 col-start-1 row-start-1 select-none whitespace-nowrap">
                    {words.reduce((a, b) => a.length > b.length ? a : b, "")}
                </span>

                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="col-start-1 row-start-1 text-center whitespace-nowrap"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </div>

            <span className="block">{postfix}</span>
        </div>
    );
}
