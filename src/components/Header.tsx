"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
                isScrolled
                    ? "bg-[#1E2D4A] border-white/10 py-2"
                    : "bg-[#1B2A45] border-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative h-12 sm:h-14 w-40 sm:w-48">
                            <Image
                                src="/logo-v3.png"
                                alt="ClienTech Solutions"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side - Phone & Button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+922462369"
                            className="hidden lg:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[#1DD1A1] transition-colors"
                            aria-label="Call to speak with an expert"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Quick Call</span>
                        </a>
                        <Button
                            variant="primary"
                            size="sm"
                            className="hidden sm:flex bg-[#1DD1A1] hover:bg-[#17B98D] text-[#1B2A45] font-semibold border-0"
                        >
                            Get Service
                        </Button>

                        {/* Mobile menu button */}
                        <button
                            className="xl:hidden p-2 text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="xl:hidden bg-[#1B2A45] border-t border-white/10 overflow-hidden"
                    >
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-lg font-medium text-white/80 hover:text-white transition-colors block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                className="pt-4 flex flex-col gap-4 border-t border-white/10"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                            >
                                <a
                                    href="tel:+922462369"
                                    className="flex items-center gap-2 text-white/80 hover:text-[#1DD1A1] transition-colors"
                                    aria-label="Call to speak with an expert"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Quick Call: +92-246-2369</span>
                                </a>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="w-full bg-[#1DD1A1] hover:bg-[#17B98D] text-[#1B2A45] font-semibold border-0"
                                >
                                    Get Service
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
