"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const values = [
    { icon: Users, title: "Franchise-First Mindset", description: "Every strategy is built around the unique complexity of multi-location franchise models." },
    { icon: Target, title: "Data-Driven Growth", description: "We make decisions backed by performance data, not guesswork — at every location level." },
    { icon: Award, title: "Transparent Results", description: "Full visibility into every dollar spent and every lead generated, always." },
    { icon: TrendingUp, title: "Scalable Systems", description: "We build systems designed to grow with you, not just quick wins that plateau." },
];

const stats = [
    { value: "40+", label: "Franchise Clients" },
    { value: "250+", label: "Campaigns Launched" },
    { value: "3x", label: "Average Lead Growth" },
    { value: "98%", label: "Client Retention Rate" },
];

export default function AboutPage() {
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
                            About ClienTech Solutions
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            The Agency Built for Franchise Growth
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            We specialize exclusively in franchise marketing — combining performance media, automation, and digital infrastructure to help franchise brands and operators achieve predictable, scalable growth.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[20px] rounded-br-[120px] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
                                    alt="ClienTech Solutions Team"
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            {/* Floating stat card */}
                            <div className="absolute -bottom-8 -right-6 z-20 bg-[#1B2A45] text-white p-6 rounded-2xl shadow-2xl hidden md:block">
                                <div className="text-4xl font-extrabold text-[#1DD1A1]">7+</div>
                                <div className="text-white font-bold mt-1">Years of Franchise<br />Marketing Experience</div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10" />
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-start"
                        >
                            <motion.span variants={fadeUp} className="inline-block bg-[#1B2A45] text-white font-bold text-sm px-5 py-2 rounded-full mb-6">
                                Our Story
                            </motion.span>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6 leading-tight">
                                We Saw the Gap. We Built the Solution.
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-[#1B2A45]/70 text-lg mb-6 leading-relaxed">
                                Franchise owners were trapped in a cycle: inconsistent leads, poor follow-up, and marketing that worked for one location but failed across ten. Generic agencies didn&apos;t understand the franchise model. So we built ClienTech Solutions specifically to solve this.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-[#1B2A45]/70 text-lg mb-8 leading-relaxed">
                                We combine performance marketing with CRM automation and scalable digital foundations — giving franchise brands the infrastructure to grow consistently across every location.
                            </motion.p>
                            <motion.div variants={stagger} className="flex flex-col gap-3 mb-10 w-full">
                                {["Multi-location campaign management", "CRM + automation setup and management", "Location-level performance reporting"].map((item) => (
                                    <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 p-4 rounded-xl bg-[#F0F4F8]">
                                        <CheckCircle2 className="text-[#1DD1A1] shrink-0" size={20} />
                                        <span className="text-[#1B2A45] font-semibold">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp}>
                                <Link href="/contact">
                                    <Button variant="primary" size="lg">Work With Us</Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-[#1B2A45] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)",
                    backgroundSize: "cover"
                }} />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stats.map((stat) => (
                            <motion.div key={stat.label} variants={fadeUp}>
                                <div className="text-5xl font-extrabold text-[#1DD1A1] mb-2">{stat.value}</div>
                                <div className="text-white/80 font-semibold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="inline-block bg-[#1B2A45] text-white font-bold text-sm px-5 py-2 rounded-full mb-5">Our Values</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45]">What Drives Everything We Do</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center mb-5">
                                    <value.icon className="text-[#1DD1A1]" size={28} />
                                </div>
                                <h3 className="text-xl font-extrabold text-[#1B2A45] mb-3">{value.title}</h3>
                                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1B2A45] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
                            Ready to Build Your Franchise Growth Engine?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
                            Let&apos;s start with a free strategy call and audit of your current marketing.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <Link href="/contact">
                                <Button size="lg" className="bg-[#1DD1A1] text-[#1B2A45] hover:bg-white border-0 font-bold">
                                    Book a Free Strategy Call
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
