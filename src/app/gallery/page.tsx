"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const categories = ["All", "Campaigns", "Results", "Team"];

const galleryItems = [
    { category: "Campaigns", title: "Franchise Lead Campaign", desc: "Google + Meta multi-territory campaign", img: "1460925895917-afdab827c52f" },
    { category: "Results", title: "150% Lead Increase", desc: "Home services franchise, Q1 2026", img: "1551434678-e076c223a692" },
    { category: "Team", title: "Strategy Session", desc: "Quarterly franchise growth planning", img: "1556761175-b413da4baf72" },
    { category: "Campaigns", title: "Local Landing Pages", desc: "50+ location-specific pages deployed", img: "1542744173-8e7e53415bb0" },
    { category: "Results", title: "CRM Automation Flow", desc: "Zero leads lost with automated follow-up", img: "1518770660439-4636190af475" },
    { category: "Team", title: "Campaign Review", desc: "Weekly performance analysis sessions", img: "1573496359142-b8d87734a5a2" },
    { category: "Results", title: "Revenue Dashboard", desc: "Real-time franchise performance data", img: "1584621172942-076f8eb3d5c5" },
    { category: "Campaigns", title: "Meta Ad Creative", desc: "High-converting franchise-specific ads", img: "1557804506-669a67965ba0" },
    { category: "Team", title: "Onboarding Day", desc: "New franchise client kickoff session", img: "1552664730-d307ca884978" },
];

export default function GalleryPage() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? galleryItems : galleryItems.filter(i => i.category === active);

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
                            Our Work
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Campaigns, Results & Our Team
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            A look inside our work — from performance campaigns and real client results to the team behind the strategy.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    {/* Filter tabs */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-3 mb-14"
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                variants={fadeUp}
                                onClick={() => setActive(cat)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${active === cat
                                        ? "bg-[#1B2A45] text-white shadow-lg"
                                        : "bg-white text-[#1B2A45] hover:bg-[#1B2A45] hover:text-white"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        key={active}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        {filtered.map((item, i) => (
                            <motion.div
                                key={`${item.title}-${i}`}
                                variants={fadeUp}
                                className="relative rounded-3xl overflow-hidden group cursor-pointer"
                                style={{ aspectRatio: "4/3" }}
                            >
                                <Image
                                    src={`https://images.unsplash.com/photo-${item.img}?q=80&w=800&auto=format&fit=crop`}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#1B2A45]/0 group-hover:bg-[#1B2A45]/70 transition-all duration-400 flex items-end p-6">
                                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="inline-block bg-[#1DD1A1] text-[#1B2A45] font-bold text-xs px-3 py-1 rounded-full mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white font-extrabold text-lg leading-tight">{item.title}</h3>
                                        <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
