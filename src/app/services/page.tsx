import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Home, Building2, Wind, Sparkles, Droplet, Trash2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-white/90">Comprehensive cleaning solutions for every need</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} hover>
                                <CardHeader>
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="w-8 h-8 text-secondary" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-accent-light mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-accent-light">
                                                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
                        <p className="text-accent-light text-lg">Simple, efficient, and effective</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-accent-light text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-4">Ready to Book a Service?</h2>
                    <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
                        Get a free quote and experience professional cleaning
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Get a Quote</Button>
                        </Link>
                        <Link href="/pricing">
                            <Button variant="outline" size="lg">View Pricing</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const services = [
    {
        icon: Home,
        title: "House Cleaning",
        description: "Complete residential cleaning services for a spotless home",
        features: [
            "Living areas and bedrooms",
            "Kitchen and bathrooms",
            "Dusting and vacuuming",
            "Floor cleaning and mopping",
        ],
    },
    {
        icon: Building2,
        title: "Office Cleaning",
        description: "Professional commercial cleaning for productive workspaces",
        features: [
            "Desk and workspace cleaning",
            "Common area maintenance",
            "Restroom sanitization",
            "Trash removal",
        ],
    },
    {
        icon: Wind,
        title: "Deep Cleaning",
        description: "Thorough cleaning for every corner of your property",
        features: [
            "Detailed surface cleaning",
            "Hard-to-reach areas",
            "Appliance cleaning",
            "Baseboard and trim cleaning",
        ],
    },
    {
        icon: Sparkles,
        title: "Carpet Cleaning",
        description: "Expert carpet care to remove stains and odors",
        features: [
            "Steam cleaning",
            "Stain removal",
            "Odor elimination",
            "Fabric protection",
        ],
    },
    {
        icon: Droplet,
        title: "Window Cleaning",
        description: "Crystal clear windows inside and out",
        features: [
            "Interior and exterior",
            "Screen cleaning",
            "Sill and frame cleaning",
            "Streak-free finish",
        ],
    },
    {
        icon: Trash2,
        title: "Move In/Out Cleaning",
        description: "Complete cleaning for moving transitions",
        features: [
            "Empty property cleaning",
            "All rooms and surfaces",
            "Appliance cleaning",
            "Final inspection ready",
        ],
    },
];

const process = [
    {
        title: "Book Online",
        description: "Schedule your service through our easy booking system",
    },
    {
        title: "We Arrive",
        description: "Our professional team arrives on time with all equipment",
    },
    {
        title: "We Clean",
        description: "Thorough cleaning using eco-friendly products",
    },
    {
        title: "You Enjoy",
        description: "Relax in your spotless, fresh-smelling space",
    },
];
