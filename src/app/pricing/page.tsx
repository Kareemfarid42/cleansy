"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

const pricingPlans = [
    {
        name: "Starter",
        price: "1,497",
        period: "/mo",
        description: "For single-location franchise operators ready to build a consistent lead pipeline.",
        features: [
            "1 territory ad campaign (Google or Meta)",
            "Landing page setup & optimization",
            "Basic CRM setup",
            "Monthly performance report",
            "Email support",
        ],
        featured: false,
        cta: "Get Started",
    },
    {
        name: "Growth",
        price: "2,997",
        period: "/mo",
        description: "For franchisors or operators with 2–10 locations who need scalable, automated systems.",
        features: [
            "Up to 5 territory campaigns (Google + Meta)",
            "Full CRM + automation setup",
            "Missed-call text-back system",
            "Bi-weekly strategy calls",
            "Location-level reporting dashboard",
            "Dedicated account manager",
        ],
        featured: true,
        cta: "Most Popular — Start Here",
    },
    {
        name: "Scale",
        price: "Custom",
        period: "",
        description: "For franchise systems with 10+ locations requiring enterprise-level marketing infrastructure.",
        features: [
            "Unlimited territory campaigns",
            "Full marketing automation stack",
            "Franchisee-level onboarding & training",
            "Weekly strategy calls",
            "Custom reporting & analytics",
            "White-label options available",
        ],
        featured: false,
        cta: "Book a Call",
    },
];

const faqs = [
    {
        question: "Do you require a long-term contract?",
        answer: "No. We work on a month-to-month basis after an initial 90-day onboarding period to allow enough time to see meaningful results.",
    },
    {
        question: "How quickly can I see results?",
        answer: "Paid campaigns typically start generating leads within the first 2–4 weeks. Full system optimization usually takes 60–90 days to reach peak performance.",
    },
    {
        question: "Do you work with both franchisors and individual franchisees?",
        answer: "Both. We work with franchise brands at the corporate level and individual franchise operators — and can even coordinate marketing across an entire franchise system.",
    },
    {
        question: "Is ad spend included in the pricing?",
        answer: "Ad spend is separate from our management fees. We recommend a minimum ad budget and help you allocate it optimally across locations and campaigns.",
    },
];

export default function PricingPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="relative bg-[#1B2A45] text-white pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url(https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png)",
                    backgroundSize: "cover"
                }} />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.span variants={fadeUp} className="inline-block bg-[#1DD1A1] text-[#1B2A45] font-bold text-sm px-5 py-2 rounded-full mb-6">
                            Transparent Pricing
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Investment in Franchise Growth
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                            Simple, results-focused pricing. No hidden fees, no long-term lock-in.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {pricingPlans.map((plan) => (
                            <motion.div
                                key={plan.name}
                                variants={fadeUp}
                                className={`relative rounded-3xl p-10 flex flex-col gap-6 ${plan.featured
                                        ? "bg-[#1B2A45] text-white shadow-2xl scale-105"
                                        : "bg-[#F0F4F8] text-[#1B2A45]"
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1DD1A1] text-[#1B2A45] font-bold text-sm px-5 py-1.5 rounded-full whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}
                                <div>
                                    <h3 className={`text-xl font-extrabold mb-1 ${plan.featured ? "text-[#1DD1A1]" : "text-[#1B2A45]"}`}>{plan.name}</h3>
                                    <div className="flex items-end gap-1 mt-3 mb-2">
                                        {plan.price !== "Custom" && <span className={`text-2xl font-bold ${plan.featured ? "text-white" : "text-[#1B2A45]"}`}>$</span>}
                                        <span className={`text-5xl font-extrabold ${plan.featured ? "text-white" : "text-[#1B2A45]"}`}>{plan.price}</span>
                                        {plan.period && <span className={`text-base mb-1 ${plan.featured ? "text-white/60" : "text-[#1B2A45]/50"}`}>{plan.period}</span>}
                                    </div>
                                    <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-[#1B2A45]/60"}`}>{plan.description}</p>
                                </div>
                                <ul className="flex flex-col gap-3 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <Check size={16} color="#1DD1A1" className="mt-0.5 shrink-0" />
                                            <span className={`text-sm ${plan.featured ? "text-white/80" : "text-[#1B2A45]/80"}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="block">
                                    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${plan.featured
                                            ? "bg-[#1DD1A1] text-[#1B2A45] hover:bg-white"
                                            : "bg-[#1B2A45] text-white hover:bg-[#1DD1A1] hover:text-[#1B2A45]"
                                        }`}>
                                        {plan.cta}
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Note */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center text-[#1B2A45]/50 text-sm mt-10"
                    >
                        All plans exclude ad spend. Monthly ad budgets recommended starting at $1,000–$3,000 per territory.
                    </motion.p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#F0F4F8]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        className="text-center mb-14"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="inline-block bg-[#1B2A45] text-white font-bold text-sm px-5 py-2 rounded-full mb-5">FAQs</span>
                        <h2 className="text-4xl font-extrabold text-[#1B2A45]">Pricing Questions Answered</h2>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {faqs.map((faq) => (
                            <motion.div key={faq.question} variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-[#1B2A45] font-extrabold mb-2">{faq.question}</h3>
                                <p className="text-[#1B2A45]/65 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1B2A45] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
                            Not Sure Which Plan Fits?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-white/70 text-xl mb-10 max-w-xl mx-auto">
                            Book a free call — we&apos;ll recommend the right approach based on your franchise size, goals, and budget.
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
