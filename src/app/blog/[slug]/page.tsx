import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">10 Tips for Maintaining a Clean Home</h1>
                    <div className="flex items-center gap-6 text-white/90">
                        <span className="flex items-center gap-2">
                            <Calendar size={18} />
                            February 10, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <User size={18} />
                            Sarah Johnson
                        </span>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/* Featured Image */}
                        <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl mb-8 flex items-center justify-center">
                            <span className="text-8xl">🏠</span>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-accent-light text-lg leading-relaxed mb-6">
                                Maintaining a clean home doesn't have to be overwhelming. With these simple tips and daily habits,
                                you can keep your living space spotless year-round without spending hours cleaning every day.
                            </p>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Make Your Bed Every Morning</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                Starting your day by making your bed sets a productive tone and instantly makes your bedroom look tidier.
                                This simple 2-minute task can make a significant difference in how your room feels.
                            </p>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Do a Little Bit Each Day</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                Instead of letting tasks pile up, spend 15-20 minutes each day on light cleaning. This prevents
                                overwhelming weekend cleaning sessions and keeps your home consistently tidy.
                            </p>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Clean as You Cook</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                Wash dishes and wipe down surfaces while you're cooking. This prevents kitchen messes from building
                                up and makes post-meal cleanup much faster.
                            </p>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Implement the One-Touch Rule</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                When you pick something up, put it away immediately rather than setting it down to deal with later.
                                This simple habit prevents clutter from accumulating.
                            </p>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Keep Cleaning Supplies Handy</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                Store cleaning supplies in each room where they're needed. This makes it easier to quickly wipe down
                                surfaces and address spills immediately.
                            </p>

                            <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
                                <p className="text-primary font-semibold mb-2">Pro Tip:</p>
                                <p className="text-accent-light">
                                    Set a timer for 15 minutes and see how much you can accomplish. You'll be surprised at how much
                                    cleaning you can do in short, focused bursts!
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Conclusion</h2>
                            <p className="text-accent-light leading-relaxed mb-6">
                                Remember, maintaining a clean home is about consistency, not perfection. By implementing these simple
                                habits, you'll spend less time on major cleaning sessions and more time enjoying your beautiful,
                                clean space.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 p-8 bg-gradient-to-r from-secondary to-primary rounded-2xl text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
                            <p className="mb-6">Let our expert team handle the deep cleaning while you enjoy your time.</p>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                                    Book a Cleaning
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
