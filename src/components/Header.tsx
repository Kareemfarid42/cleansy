"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        /* ── Outer wrapper: transparent, centred, gives breathing room from viewport edges ── */
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">

            {/* ── Floating pill ── */}
            <div
                className={`pointer-events-auto w-full max-w-[90%] xl:max-w-7xl rounded-[20px] transition-all duration-300 ${scrolled
                    ? "bg-[#1b273d]/95 backdrop-blur-md shadow-2xl"
                    : "bg-[#1b273d] shadow-lg"
                    }`}
            >

                {/* ── Main bar: 3-column grid so nav is truly centered ── */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center px-5 py-[12px] gap-2">

                    {/* ── Col 1 · Logo ── */}
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/logo-v3.png"
                                alt="ClienTech Solutions"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* ── Col 2 · Navigation (perfectly centred) ── */}
                    <nav className="hidden xl:flex items-center justify-center gap-0">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200 whitespace-nowrap"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* ── Col 3 · Right section ── */}
                    <div className="hidden xl:flex items-center gap-3 shrink-0">

                        {/* Vertical divider */}
                        <div className="w-[1px] h-8 bg-white/20" />

                        {/* Quick Call */}
                        <a
                            href="tel:+922462369"
                            className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
                            aria-label="Call us"
                        >
                            <span className="font-semibold text-white">Quick Call:</span>{" "}
                            +92-246-2369
                        </a>

                        {/* CTA Button */}
                        <a
                            href="/contact"
                            className="text-sm font-semibold text-white border border-white/30 hover:border-[#00c0a3] hover:text-[#00c0a3] rounded-xl px-4 py-2 transition-all duration-200 whitespace-nowrap"
                        >
                            Book a Strategy Call
                        </a>
                    </div>

                    {/* ── Mobile hamburger (only shows below xl) ── */}
                    <button
                        className="xl:hidden justify-self-end p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* ── Mobile dropdown ── */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="xl:hidden border-t border-white/10 overflow-hidden rounded-b-[20px]"
                        >
                            <nav className="flex flex-col gap-1 px-6 pt-4 pb-5">
                                {navigation.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: i * 0.035 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Mobile call + CTA */}
                                <motion.div
                                    className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: navigation.length * 0.035 }}
                                >
                                    <a
                                        href="tel:+922462369"
                                        className="text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        <span className="font-semibold text-white">Quick Call:</span>{" "}
                                        +92-246-2369
                                    </a>
                                    <a
                                        href="/contact"
                                        className="text-center text-sm font-semibold text-white border border-white/30 hover:border-[#00c0a3] hover:text-[#00c0a3] rounded-xl px-5 py-2.5 transition-all duration-200"
                                    >
                                        Book a Strategy Call
                                    </a>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
};
