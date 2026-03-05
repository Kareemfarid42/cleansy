"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CalendarCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const contactInfo = [
    { icon: Phone, title: "Phone", content: "+1 (800) CTS-GROW", link: "tel:+18002874769" },
    { icon: Mail, title: "Email", content: "hello@clientechsolutions.com", link: "mailto:hello@clientechsolutions.com" },
    { icon: MapPin, title: "Location", content: "Serving franchise brands across North America" },
    { icon: Clock, title: "Response Time", content: "We respond to all inquiries within 24 hours" },
];

const benefits = [
    "Free audit of your current lead flow",
    "No long-term contracts required",
    "Results visible within 30 days",
    "Dedicated account manager from day one",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", franchise: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-[#1B2A45] text-white pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)",
                    backgroundSize: "cover"
                }} />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-3xl"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={fadeUp} className="inline-block bg-[#1DD1A1] text-[#1B2A45] font-bold text-sm px-5 py-2 rounded-full mb-6">
                            Get In Touch
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Let&apos;s Start Growing Your Franchise
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            Book a free 30-minute strategy call and we&apos;ll audit your current digital presence, identify your biggest growth opportunities, and show you exactly how we&apos;d approach your franchise.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left — Form */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                        >
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                                    <div className="w-20 h-20 bg-[#1DD1A1]/15 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} className="text-[#1DD1A1]" />
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-[#1B2A45] mb-4">Message Received!</h2>
                                    <p className="text-[#1B2A45]/70 text-lg max-w-sm">
                                        We&apos;ll be in touch within 24 hours to schedule your free strategy call. Keep an eye on your inbox.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-extrabold text-[#1B2A45] mb-8">Tell Us About Your Franchise</h2>
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-[#1B2A45] mb-2">Your Name *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="John Smith"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    className="w-full border-2 border-[#E2E8F0] rounded-xl px-4 py-3 text-[#1B2A45] placeholder:text-[#1B2A45]/40 focus:outline-none focus:border-[#1DD1A1] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-[#1B2A45] mb-2">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@franchise.com"
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                    className="w-full border-2 border-[#E2E8F0] rounded-xl px-4 py-3 text-[#1B2A45] placeholder:text-[#1B2A45]/40 focus:outline-none focus:border-[#1DD1A1] transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-[#1B2A45] mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={form.phone}
                                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                                    className="w-full border-2 border-[#E2E8F0] rounded-xl px-4 py-3 text-[#1B2A45] placeholder:text-[#1B2A45]/40 focus:outline-none focus:border-[#1DD1A1] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-[#1B2A45] mb-2">Franchise / Brand Name *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e.g. My Home Services Franchise"
                                                    value={form.franchise}
                                                    onChange={e => setForm({ ...form, franchise: e.target.value })}
                                                    className="w-full border-2 border-[#E2E8F0] rounded-xl px-4 py-3 text-[#1B2A45] placeholder:text-[#1B2A45]/40 focus:outline-none focus:border-[#1DD1A1] transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[#1B2A45] mb-2">What&apos;s your biggest challenge right now?</label>
                                            <textarea
                                                rows={5}
                                                placeholder="Tell us about your current lead volume, locations, and what you want to improve..."
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                className="w-full border-2 border-[#E2E8F0] rounded-xl px-4 py-3 text-[#1B2A45] placeholder:text-[#1B2A45]/40 focus:outline-none focus:border-[#1DD1A1] transition-colors resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-[#1B2A45] text-white font-bold py-4 rounded-xl hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 text-base flex items-center justify-center gap-2"
                                        >
                                            <CalendarCheck size={20} />
                                            Send Message & Request Strategy Call
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>

                        {/* Right — Info */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col gap-8"
                        >
                            {/* What you get */}
                            <motion.div variants={fadeUp} className="bg-[#1B2A45] rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-extrabold text-[#1DD1A1] mb-6">What Happens on the Call</h3>
                                <div className="flex flex-col gap-4">
                                    {benefits.map((b) => (
                                        <div key={b} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-[#1DD1A1] shrink-0" />
                                            <span className="text-white/80 font-medium">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Contact details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((info) => (
                                    <motion.div key={info.title} variants={fadeUp} className="bg-[#F0F4F8] rounded-2xl p-6">
                                        <div className="w-10 h-10 bg-[#1B2A45] rounded-xl flex items-center justify-center mb-4">
                                            <info.icon size={18} className="text-[#1DD1A1]" />
                                        </div>
                                        <h4 className="font-bold text-[#1B2A45] mb-1">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="text-[#1B2A45]/70 text-sm hover:text-[#1DD1A1] transition-colors">{info.content}</a>
                                        ) : (
                                            <p className="text-[#1B2A45]/70 text-sm">{info.content}</p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
