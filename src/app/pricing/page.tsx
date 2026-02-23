import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Pricing Plans</h1>
                    <p className="text-xl text-white/90">Affordable cleaning services for every budget</p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <Card
                                key={index}
                                hover
                                className={`relative ${plan.featured ? "border-2 border-secondary shadow-2xl" : ""}`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader className="text-center pt-8">
                                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                                    <div className="text-4xl font-bold text-primary mb-2">
                                        ${plan.price}
                                        <span className="text-lg font-normal text-accent-light">/month</span>
                                    </div>
                                    <p className="text-accent-light text-sm">{plan.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-accent-light">
                                                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={plan.featured ? "primary" : "outline"}
                                        size="lg"
                                        className="w-full"
                                    >
                                        Choose Plan
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                        <p className="text-accent-light text-lg">Common questions about our pricing</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                                    <p className="text-accent-light">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-4">Need a Custom Plan?</h2>
                    <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
                        Contact us for a personalized quote tailored to your specific needs
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

const pricingPlans = [
    {
        name: "Basic",
        price: 99,
        description: "Perfect for small apartments",
        features: [
            "1 cleaning per month",
            "Up to 1000 sq ft",
            "Basic cleaning supplies",
            "2-hour service",
            "Email support",
        ],
        featured: false,
    },
    {
        name: "Standard",
        price: 199,
        description: "Great for medium-sized homes",
        features: [
            "2 cleanings per month",
            "Up to 2000 sq ft",
            "Premium cleaning products",
            "4-hour service",
            "Priority support",
            "Eco-friendly options",
        ],
        featured: true,
    },
    {
        name: "Premium",
        price: 349,
        description: "Ideal for large properties",
        features: [
            "4 cleanings per month",
            "Up to 3500 sq ft",
            "Premium eco-friendly products",
            "8-hour service",
            "24/7 support",
            "Deep cleaning included",
            "Carpet cleaning discount",
        ],
        featured: false,
    },
];

const faqs = [
    {
        question: "Can I customize my cleaning plan?",
        answer: "Yes! We offer flexible plans that can be customized to your specific needs. Contact us to discuss your requirements.",
    },
    {
        question: "What's included in the basic cleaning?",
        answer: "Basic cleaning includes dusting, vacuuming, mopping, bathroom and kitchen cleaning, and trash removal.",
    },
    {
        question: "Do you provide cleaning supplies?",
        answer: "Yes, we bring all necessary cleaning supplies and equipment. You can also request us to use your preferred products.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel or reschedule your appointment up to 24 hours in advance without any charges.",
    },
];
