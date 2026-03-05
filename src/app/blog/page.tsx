"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const blogPosts = [
    {
        title: "How to Build a Scalable Lead System for Your Franchise",
        excerpt: "Most franchise operators rely on referrals and hope. Here's how to build a predictable, scalable lead pipeline that works across every location.",
        date: "Mar 1, 2026",
        author: "Wayne Carter",
        category: "Lead Generation",
        img: "1584621172942-076f8eb3d5c5",
        slug: "scalable-lead-system-franchise",
    },
    {
        title: "Why Franchise Marketing Fails — And How to Fix It",
        excerpt: "Generic agency tactics don't work for franchise models. Discover the 5 most common mistakes and how multi-location brands can fix them.",
        date: "Feb 22, 2026",
        author: "Maya Johnson",
        category: "Franchise Strategy",
        img: "1557804506-669a67965ba0",
        slug: "why-franchise-marketing-fails",
    },
    {
        title: "CRM Automation: The Secret Weapon for Franchise Growth",
        excerpt: "A good CRM doesn't just store contacts — it closes deals while your team sleeps. Here's how we set up automation that converts 24/7.",
        date: "Feb 15, 2026",
        author: "Daniel Park",
        category: "Automation",
        img: "1518770660439-4636190af475",
        slug: "crm-automation-franchise-growth",
    },
    {
        title: "Google Ads for Franchise Owners: A Location-Level Playbook",
        excerpt: "Running Google Ads across 10 territories is fundamentally different from running one campaign. Here's our location-level framework.",
        date: "Feb 8, 2026",
        author: "Maya Johnson",
        category: "Paid Media",
        img: "1460925895917-afdab827c52f",
        slug: "google-ads-franchise-playbook",
    },
    {
        title: "Local SEO for Franchises: How to Rank Every Location",
        excerpt: "One national website isn't enough. Here's how to build a local SEO strategy that gets every franchise location found in search.",
        date: "Feb 1, 2026",
        author: "Priya Sharma",
        category: "SEO",
        img: "1542744173-8e7e53415bb0",
        slug: "local-seo-franchise-locations",
    },
    {
        title: "How We Doubled a Franchise's Lead Volume in 90 Days",
        excerpt: "A case study breakdown of how we restructured a home services franchise's entire digital funnel — from traffic to booked appointments.",
        date: "Jan 25, 2026",
        author: "Wayne Carter",
        category: "Case Studies",
        img: "1551434678-e076c223a692",
        slug: "doubled-lead-volume-case-study",
    },
];

const categoryColors: Record<string, string> = {
    "Lead Generation": "bg-[#1DD1A1] text-[#1B2A45]",
    "Franchise Strategy": "bg-[#1B2A45] text-white",
    "Automation": "bg-purple-600 text-white",
    "Paid Media": "bg-orange-500 text-white",
    "SEO": "bg-blue-600 text-white",
    "Case Studies": "bg-rose-600 text-white",
};

export default function BlogPage() {
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
                            Franchise Growth Insights
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Strategies That Drive Real Franchise Growth
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            Actionable insights on franchise marketing, automation, and lead generation — written by practitioners, not theorists.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {blogPosts.map((post) => (
                            <motion.div
                                key={post.slug}
                                variants={fadeUp}
                                className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={`https://images.unsplash.com/photo-${post.img}?q=80&w=800&auto=format&fit=crop`}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className={`absolute top-4 left-4 font-bold text-xs px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? "bg-gray-700 text-white"}`}>
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-7">
                                    <div className="flex items-center gap-4 text-xs text-[#1B2A45]/50 mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
                                        <span className="flex items-center gap-1.5"><User size={13} />{post.author}</span>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#1B2A45] mb-3 group-hover:text-[#1DD1A1] transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#1B2A45]/60 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-[#1B2A45] font-bold text-sm hover:text-[#1DD1A1] transition-colors group/link"
                                    >
                                        Read More <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-[#1B2A45] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 variants={fadeUp} className="text-4xl font-extrabold mb-4">Get Franchise Growth Insights Weekly</motion.h2>
                        <motion.p variants={fadeUp} className="text-white/70 mb-8 max-w-xl mx-auto">
                            Join 2,000+ franchise operators and get actionable growth strategies delivered to your inbox every week.
                        </motion.p>
                        <motion.form variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#1DD1A1]"
                            />
                            <button type="submit" className="bg-[#1DD1A1] text-[#1B2A45] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors whitespace-nowrap">
                                Subscribe Free
                            </button>
                        </motion.form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
