'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Youtube, Instagram, Send } from "lucide-react";
import IconList from "./IconList";

const Footer = () => {
    return (
        <footer className="relative bg-[#1B2A45] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Logo & Social Section */}
                    <div className="flex flex-col gap-6">
                        <div className="w-48 relative h-12">
                            <Image
                                src="/logo-v3.png"
                                alt="ClienTech Solutions"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="text-[#7FDED0] leading-relaxed">
                            We help franchise systems build scalable digital foundations — combining strategy and conversion systems that drive sustainable growth.
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-[#1DD1A1] rounded-full flex items-center justify-center text-[#1B2A45] hover:bg-white transition-colors duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Our Services Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white">Our Services</h4>
                        <IconList
                            items={[
                                { text: "Digital Foundation & Positioning", href: "/services" },
                                { text: "Lead Generation", href: "/services" },
                                { text: "Automation & Follow-Up Systems", href: "/services" },
                                { text: "Growth & Performance Optimization", href: "/services" },
                            ]}
                        />
                    </div>

                    {/* Information Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white">Information</h4>
                        <IconList
                            items={[
                                { text: "About", href: "/about" },
                                { text: "Services", href: "/services" },
                                { text: "Pricing", href: "/pricing" },
                                { text: "Contact", href: "/contact" }
                            ]}
                        />
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white">Newsletter</h4>
                        <p className="text-[#7FDED0]">
                            Stay updated with franchise growth strategies and digital marketing insights.
                        </p>

                        <form className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-14 pl-6 pr-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#1DD1A1] outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 w-10 h-10 bg-[#1DD1A1] rounded-full flex items-center justify-center text-[#1B2A45] hover:bg-white transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-[#7FDED0] text-sm">
                    <p>© Copyright by ClienTech Solutions – All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
