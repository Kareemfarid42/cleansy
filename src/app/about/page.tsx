import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Users, Target, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">About Cleansy</h1>
                    <p className="text-xl text-white/90">Your trusted partner in professional cleaning services</p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                            <p className="text-accent-light mb-4 leading-relaxed">
                                Founded in 2014, Cleansy has been transforming homes and offices with our professional cleaning services. What started as a small team of dedicated cleaners has grown into a trusted name in the industry.
                            </p>
                            <p className="text-accent-light mb-4 leading-relaxed">
                                We believe that a clean space is essential for health, productivity, and peace of mind. That's why we're committed to delivering exceptional results with every service.
                            </p>
                            <p className="text-accent-light mb-6 leading-relaxed">
                                Our team of experienced professionals uses eco-friendly products and proven techniques to ensure your satisfaction every time.
                            </p>
                            <Link href="/contact">
                                <Button variant="primary" size="lg">Get in Touch</Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
                        <p className="text-accent-light text-lg">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} hover className="text-center">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                    <p className="text-accent-light text-sm">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                                <div className="text-accent-light font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Join Our Happy Customers</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Experience the Cleansy difference today
                    </p>
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                        Get Started
                    </Button>
                </div>
            </section>
        </div>
    );
}

const values = [
    {
        icon: Users,
        title: "Customer First",
        description: "Your satisfaction is our top priority",
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We strive for perfection in every clean",
    },
    {
        icon: Award,
        title: "Professionalism",
        description: "Trained and certified cleaning experts",
    },
    {
        icon: Heart,
        title: "Care",
        description: "We treat your space like our own",
    },
];

const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Satisfaction Rate" },
];
