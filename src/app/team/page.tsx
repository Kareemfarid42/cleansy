import { Card, CardContent } from "@/components/ui/Card";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Team</h1>
                    <p className="text-xl text-white/90">Meet the professionals behind Cleansy</p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Experienced Professionals</h2>
                        <p className="text-accent-light text-lg max-w-2xl mx-auto">
                            Our team of dedicated cleaning experts is committed to delivering exceptional service
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} hover className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-secondary">
                                            {member.name.split(" ").map(n => n[0]).join("")}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                                    <p className="text-secondary font-semibold mb-3">{member.role}</p>
                                    <p className="text-accent-light text-sm mb-4">{member.bio}</p>
                                    <div className="flex justify-center gap-3">
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                                        >
                                            <Twitter size={18} />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                                        >
                                            <Mail size={18} />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our growing team
                    </p>
                    <a href="mailto:careers@cleansy.com" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                        View Open Positions
                    </a>
                </div>
            </section>
        </div>
    );
}

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        bio: "With 15 years of experience in the cleaning industry, Sarah leads our team with passion and expertise.",
    },
    {
        name: "Michael Chen",
        role: "Operations Manager",
        bio: "Michael ensures every cleaning project runs smoothly and exceeds client expectations.",
    },
    {
        name: "Emily Davis",
        role: "Lead Cleaner",
        bio: "Emily's attention to detail and dedication make her an invaluable part of our team.",
    },
    {
        name: "James Wilson",
        role: "Customer Success",
        bio: "James is committed to ensuring every client has an exceptional experience with Cleansy.",
    },
    {
        name: "Lisa Anderson",
        role: "Quality Assurance",
        bio: "Lisa maintains our high standards by conducting thorough quality checks on every job.",
    },
    {
        name: "David Martinez",
        role: "Senior Cleaner",
        bio: "David brings expertise in commercial cleaning and eco-friendly practices to our team.",
    },
];
