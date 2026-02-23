"use client";

import React from 'react';
import Image from 'next/image';

interface CompanyLogo {
    id: number;
    url: string;
    alt?: string;
}

interface CompanyLogosProps {
    logos: CompanyLogo[];
    title?: string;
}

export default function CompanyLogos({ logos, title = "We work with more than 200 leading companies" }: CompanyLogosProps) {
    return (
        <div className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
                {title && (
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
                        {title}
                    </h3>
                )}

                <div className="w-full overflow-hidden relative select-none">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-8 md:w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-[200%] animate-slide-pause">
                        {/* First set of logos (50% width) */}
                        <div className="w-1/2 flex justify-around items-center px-4 md:px-12">
                            {logos.map((logo, index) => (
                                <div
                                    key={`group-a-${logo.id}-${index}`}
                                    className="relative w-full h-12 md:h-16 flex items-center justify-center px-2 md:px-4"
                                >
                                    <Image
                                        src={logo.url}
                                        alt={logo.alt || 'Company logo'}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Second set of logos (Duplicate for loop) */}
                        <div className="w-1/2 flex justify-around items-center px-4 md:px-12">
                            {logos.map((logo, index) => (
                                <div
                                    key={`group-b-${logo.id}-${index}`}
                                    className="relative w-full h-12 md:h-16 flex items-center justify-center px-2 md:px-4"
                                >
                                    <Image
                                        src={logo.url}
                                        alt={logo.alt || 'Company logo'}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
                        /* Correct Step Animation */
                        @keyframes slide-pause-loop {
                            0% { transform: translateX(0); }
                            45% { transform: translateX(0); }
                            50% { transform: translateX(-50%); }
                            95% { transform: translateX(-50%); }
                            /* Snap back to start instantly at 0% of next loop (or end of this one) */
                            100% { transform: translateX(0); } 
                            /* 
                                Wait! If we go 0->45 (Stay 0), 45->50 (Slide to -50), 50->95 (Stay -50), 95->100 (Slide to 0).
                                Sliding back to 0 is VISIBLE and wrong. We need instant jump.
                                We can't do instant jump easily in CSS keyframes without a hack.
                                
                                Hack: 
                                0% { transform: translateX(0); }
                                45% { transform: translateX(0); }
                                50% { transform: translateX(-50%); }
                                95% { transform: translateX(-50%); }
                                95.001% { transform: translateX(0); }
                                100% { transform: translateX(0); }
                            */
                        }
                        @keyframes slide-pause-snap {
                            0%, 45% { transform: translateX(0); }
                            50%, 95% { transform: translateX(-50%); }
                            95.01%, 100% { transform: translateX(0); }
                        }
                        .animate-slide-pause {
                            animation: slide-pause-snap 6s linear infinite;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
}
