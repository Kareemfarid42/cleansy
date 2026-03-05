'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Youtube, Send, ChevronRight } from "lucide-react";

const Footer = () => {
    const serviceLinks = [
        { text: "Digital Foundation & Positioning", href: "/services" },
        { text: "Lead Generation", href: "/services" },
        { text: "Automation & Follow-Up Systems", href: "/services" },
        { text: "Growth & Performance Optimization", href: "/services" },
    ];

    const companyLinks = [
        { text: "About Us", href: "/about" },
        { text: "Our Team", href: "/team" },
        { text: "Pricing", href: "/pricing" },
        { text: "Blog", href: "/blog" },
        { text: "Contact", href: "/contact" },
    ];

    return (
        <footer className="relative bg-[#1B2A45] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat'
            }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Logo & Social */}
                    <div className="flex flex-col gap-6">
                        <div className="w-48 relative h-12">
                            <Image
                                src="/logo-v3.png"
                                alt="ClienTech Solutions"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-[#7FDED0] leading-relaxed text-sm">
                            We help franchise systems build scalable digital foundations — combining strategy and conversion systems that drive sustainable growth.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: "https://facebook.com" },
                                { Icon: Linkedin, href: "https://linkedin.com" },
                                { Icon: Instagram, href: "https://instagram.com" },
                                { Icon: Youtube, href: "https://youtube.com" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#1DD1A1] rounded-full flex items-center justify-center text-[#1B2A45] hover:bg-white transition-colors duration-300"
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            {serviceLinks.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="flex items-start gap-2 text-[#7FDED0] text-sm hover:text-white transition-colors group">
                                        <ChevronRight size={14} className="mt-0.5 shrink-0 group-hover:text-[#1DD1A1]" />
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="flex items-center gap-2 text-[#7FDED0] text-sm hover:text-white transition-colors group">
                                        <ChevronRight size={14} className="shrink-0 group-hover:text-[#1DD1A1]" />
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white">Newsletter</h4>
                        <p className="text-[#7FDED0] text-sm">
                            Get weekly franchise growth strategies and digital marketing insights delivered to your inbox.
                        </p>
                        <form className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-14 pl-6 pr-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#1DD1A1] outline-none text-sm"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 w-10 h-10 bg-[#1DD1A1] rounded-full flex items-center justify-center text-[#1B2A45] hover:bg-white transition-colors"
                                aria-label="Subscribe"
                            >
                                <Send size={17} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#7FDED0] text-sm">
                    <p>© {new Date().getFullYear()} ClienTech Solutions — All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
