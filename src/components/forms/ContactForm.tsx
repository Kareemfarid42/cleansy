"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "../ui/Input";
import { Button } from "../ui/Button";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form data:", data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 3000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
                label="Name"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
            />

            <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                })}
                error={errors.email?.message}
            />

            <Input
                label="Phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                {...register("phone", { required: "Phone is required" })}
                error={errors.phone?.message}
            />

            <Textarea
                label="Message"
                placeholder="Tell us about your cleaning needs..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                error={errors.message?.message}
            />

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitSuccess && (
                <div className="bg-secondary/10 border border-secondary text-primary px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you soon.
                </div>
            )}
        </form>
    );
};
