import React from 'react';
import Image from 'next/image';

interface AppDownloadProps {
    title?: string;
    description?: string;
    appleStoreUrl?: string;
    googlePlayUrl?: string;
    className?: string;
}

export default function AppDownload({
    title = "Order services more easily on our app, download now!",
    description = "Donec fermentum aliquet leo vulputate bibendum. Nulla facilisi integer tempus mi vel nunc lacinia tempus.",
    appleStoreUrl = "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/apple-button.png",
    googlePlayUrl = "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/googleplay-button.png",
    className = ''
}: AppDownloadProps) {
    return (
        <div className={`w-full ${className}`}>
            <div className="flex flex-col items-start">
                <h2 className="text-2xl md:text-3xl font-bold text-background mb-5">
                    {title}
                </h2>

                <p className="text-background mb-10 max-w-xl">
                    {description}
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <a
                        href="#"
                        className="transition-opacity hover:opacity-85 hover:float block w-40 md:w-48"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={appleStoreUrl}
                            alt="Download on App Store"
                            className="w-full h-auto object-contain"
                        />
                    </a>

                    <a
                        href="#"
                        className="transition-opacity hover:opacity-85 hover:float block w-40 md:w-48"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={googlePlayUrl}
                            alt="Get it on Google Play"
                            className="w-full h-auto object-contain"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
