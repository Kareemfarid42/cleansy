"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Residential", "Commercial", "Before & After"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
                    <p className="text-xl text-white/90">See the results of our professional cleaning services</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "primary" : "outline"}
                                size="md"
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
                            >
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                                            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                            <p className="text-sm">{image.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-6xl text-secondary/30">{image.icon}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const galleryImages = [
    {
        title: "Modern Living Room",
        description: "Complete residential cleaning",
        category: "Residential",
        icon: "🏠",
    },
    {
        title: "Office Space",
        description: "Commercial office cleaning",
        category: "Commercial",
        icon: "🏢",
    },
    {
        title: "Kitchen Transformation",
        description: "Before and after deep clean",
        category: "Before & After",
        icon: "✨",
    },
    {
        title: "Bathroom Sparkle",
        description: "Residential bathroom cleaning",
        category: "Residential",
        icon: "🚿",
    },
    {
        title: "Conference Room",
        description: "Professional office cleaning",
        category: "Commercial",
        icon: "💼",
    },
    {
        title: "Carpet Cleaning",
        description: "Deep carpet restoration",
        category: "Before & After",
        icon: "🧹",
    },
    {
        title: "Bedroom Refresh",
        description: "Complete bedroom cleaning",
        category: "Residential",
        icon: "🛏️",
    },
    {
        title: "Retail Space",
        description: "Commercial retail cleaning",
        category: "Commercial",
        icon: "🏪",
    },
    {
        title: "Window Cleaning",
        description: "Crystal clear results",
        category: "Before & After",
        icon: "🪟",
    },
];
