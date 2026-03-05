"use client";

import { motion } from "framer-motion";
import { Layers, Megaphone, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
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

const services = [
    {
        icon: Layers,
        title: "Digital Foundation & Positioning",
        description: "We build or fix the digital infrastructure your franchise grows on. Brand consistency, strong local SEO, high-converting landing pages, and a presence that earns trust before anyone picks up the phone.",
        features: [
            "Branded location landing pages",
            "Local SEO optimization",
            "Google Business Profile management",
            "Website CRO audit & improvements",
            "Brand consistency framework",
        ],
        color: "#1DD1A1",
        dark: true,
    },
    {
        icon: Megaphone,
        title: "Lead Generation",
        description: "Consistent, trackable leads across every territory. We run performance campaigns on Google and Meta designed specifically for franchise lead flow — predictable cost-per-lead, more booked appointments, better ROI.",
        features: [
            "Google Ads (Search + Local Service Ads)",
            "Meta Ads for franchise audiences",
            "Territory-based targeting",
            "A/B tested creative and copy",
            "Cost-per-lead reporting",
        ],
        color: "#1B2A45",
        dark: false,
    },
    {
        icon: Zap,
        title: "Automation & Follow-Up Systems",
        description: "Stop leads slipping through the cracks. Our automation systems ensure every lead gets an immediate, personalized response — increasing show-up rates and reducing the manual chaos at every location.",
        features: [
            "CRM setup & management",
            "Automated SMS + email sequences",
            "Missed-call text-back",
            "Appointment booking automation",
            "Pipeline tracking & alerts",
        ],
        color: "#1DD1A1",
        dark: true,
    },
    {
        icon: TrendingUp,
        title: "Growth & Performance Optimization",
        description: "We turn marketing data into scalable decisions. Monthly reporting at both franchise system and individual location level — so you always know exactly what's working and where to scale.",
        features: [
            "Location-level performance dashboards",
            "Monthly strategy reviews",
            "Conversion rate optimization",
            "Budget allocation recommendations",
            "Competitor benchmarking",
        ],
        color: "#1B2A45",
        dark: false,
    },
];

const process = [
    { step: "01", title: "Strategy Call", description: "We audit your current digital presence, lead flow, and identify the highest-impact opportunities." },
    { step: "02", title: "Foundation Setup", description: "We build or improve your digital infrastructure — landing pages, CRM, tracking, and brand positioning." },
    { step: "03", title: "Launch Campaigns", description: "Performance campaigns go live across Google and Meta, targeting your ideal franchise customer by territory." },
    { step: "04", title: "Optimize & Scale", description: "We optimize weekly, report monthly, and scale what works — driving down cost-per-lead and growing your pipeline." },
];

export default function ServicesPage() {
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
                            What We Do
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            A Complete Digital Growth System for Franchises
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            Four interconnected services — each designed to solve a specific growth challenge for franchise brands and independent franchise operators.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className={`rounded-3xl p-10 md:p-14 ${service.dark ? "bg-[#1B2A45] text-white" : "bg-[#F0F4F8] text-[#1B2A45]"}`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.dark ? "bg-[#1DD1A1]/15" : "bg-[#1B2A45]/10"}`}>
                                            <service.icon size={30} style={{ color: service.color }} />
                                        </div>
                                        <h2 className={`text-3xl font-extrabold mb-4 ${service.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>
                                            {service.title}
                                        </h2>
                                        <p className={`text-lg leading-relaxed mb-8 ${service.dark ? "text-white/70" : "text-[#1B2A45]/70"}`}>
                                            {service.description}
                                        </p>
                                        <Link href="/contact">
                                            <button className={`inline-flex items-center gap-2 font-bold text-sm group ${service.dark ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>
                                                Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                                        <ul className="flex flex-col gap-3">
                                            {service.features.map((feature) => (
                                                <li key={feature} className={`flex items-center gap-3 p-4 rounded-xl ${service.dark ? "bg-white/5" : "bg-white"}`}>
                                                    <CheckCircle2 size={18} color="#1DD1A1" className="shrink-0" />
                                                    <span className={`font-semibold ${service.dark ? "text-white" : "text-[#1B2A45]"}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-[#F0F4F8]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="inline-block bg-[#1B2A45] text-white font-bold text-sm px-5 py-2 rounded-full mb-5">How It Works</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45]">From Strategy to Scalable Growth</h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {process.map((item) => (
                            <motion.div
                                key={item.step}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="text-6xl font-extrabold text-[#1B2A45]/5 absolute top-4 right-4 leading-none">{item.step}</div>
                                <div className="w-12 h-12 bg-[#1B2A45] rounded-xl flex items-center justify-center text-[#1DD1A1] font-extrabold text-lg mb-5">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-extrabold text-[#1B2A45] mb-3">{item.title}</h3>
                                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1B2A45] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
                            Ready for Consistent Franchise Growth?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
                            Book a free strategy call and we&apos;ll show you exactly where your franchise marketing has gaps — and how we fix them.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-[#1DD1A1] text-[#1B2A45] hover:bg-white border-0 font-bold">
                                    Book a Strategy Call
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B2A45]">
                                    View Pricing
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
