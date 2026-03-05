"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const teamMembers = [
    {
        name: "Wayne Carter",
        role: "Founder & CEO",
        bio: "10+ years building franchise marketing systems. Previously led growth at a national home services franchise with 200+ locations.",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Maya Johnson",
        role: "Head of Paid Media",
        bio: "Former Google Ads specialist who has managed over $5M in franchise ad spend across home services, fitness, and tutoring brands.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Daniel Park",
        role: "CRM & Automation Lead",
        bio: "Expert in GHL, HubSpot and franchise automation workflows. Has built follow-up systems for 30+ franchise brands.",
        img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
        name: "Priya Sharma",
        role: "Franchise Strategy Director",
        bio: "Formerly a franchise consultant, Priya bridges the gap between marketing execution and location-level franchise operations.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Alex Torres",
        role: "Creative Director",
        bio: "Award-winning creative strategist specializing in conversion-focused landing pages and ad creative for local business campaigns.",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        name: "Jordan Lee",
        role: "Client Success Manager",
        bio: "Dedicated to franchise owner satisfaction — Jordan ensures every client has full visibility into their campaign performance and growth.",
        img: "https://randomuser.me/api/portraits/women/31.jpg",
    },
];

export default function TeamPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="relative bg-[#1B2A45] text-white pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)",
                    backgroundSize: "cover"
                }} />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div className="max-w-3xl" variants={stagger} initial="hidden" animate="visible">
                        <motion.span variants={fadeUp} className="inline-block bg-[#1DD1A1] text-[#1B2A45] font-bold text-sm px-5 py-2 rounded-full mb-6">
                            Our Team
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            The People Behind Your Franchise Growth
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            Franchise marketing specialists, automation engineers, and creative strategists — all working together to grow your franchise.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={fadeUp}
                                className="bg-[#F0F4F8] rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                                        <Image src={member.img} alt={member.name} width={64} height={64} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-extrabold text-[#1B2A45]">{member.name}</h3>
                                        <p className="text-[#1DD1A1] font-bold text-sm">{member.role}</p>
                                    </div>
                                </div>
                                <p className="text-[#1B2A45]/65 text-sm leading-relaxed flex-1">{member.bio}</p>
                                <div className="flex gap-3">
                                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                                        <a
                                            key={idx}
                                            href="/contact"
                                            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1B2A45] hover:bg-[#1B2A45] hover:text-[#1DD1A1] transition-all duration-300"
                                        >
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-24 bg-[#1B2A45] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
                            Passionate About Franchise Marketing? Join Us.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
                            We&apos;re always looking for specialists in paid media, automation, and franchise strategy to join our growing team.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <Link href="/contact">
                                <button className="bg-[#1DD1A1] text-[#1B2A45] font-bold px-10 py-4 rounded-full text-base hover:bg-white transition-all duration-300 shadow-xl">
                                    View Open Positions
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
