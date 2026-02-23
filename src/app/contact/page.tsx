import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-white/90">Get in touch with our team</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                            <p className="text-accent-light mb-8">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index}>
                                        <CardContent className="flex items-start gap-4 pt-6">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-primary mb-1">{info.title}</h3>
                                                <p className="text-accent-light">{info.content}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Business Hours */}
                            <Card className="mt-6">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-secondary" />
                                        Business Hours
                                    </h3>
                                    <div className="space-y-2 text-accent-light">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-semibold">8:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-semibold">9:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span className="font-semibold">Closed</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-accent-light">
                            <MapPin className="w-16 h-16 mx-auto mb-4 text-secondary" />
                            <p className="text-lg font-semibold">Map Location</p>
                            <p className="text-sm">123 Cleaning Street, New York, NY 10001</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        content: "123 Cleaning Street, New York, NY 10001",
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+1 (555) 123-4567",
    },
    {
        icon: Mail,
        title: "Email",
        content: "info@cleansy.com",
    },
];
