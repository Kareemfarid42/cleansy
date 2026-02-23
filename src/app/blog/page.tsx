import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="text-xl text-white/90">Tips, tricks, and insights from cleaning experts</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card key={index} hover>
                                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-t-2xl flex items-center justify-center">
                                    <span className="text-6xl">{post.icon}</span>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-sm text-accent-light mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={16} />
                                            {post.author}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-accent-light mb-4">{post.excerpt}</p>
                                    <Link href={`/blog/${post.slug}`}>
                                        <Button variant="outline" size="sm" className="group">
                                            Read More
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const blogPosts = [
    {
        title: "10 Tips for Maintaining a Clean Home",
        excerpt: "Discover simple daily habits that will keep your home spotless year-round.",
        date: "Feb 10, 2026",
        author: "Sarah Johnson",
        icon: "🏠",
        slug: "10-tips-clean-home",
    },
    {
        title: "The Benefits of Eco-Friendly Cleaning",
        excerpt: "Learn why switching to green cleaning products is better for you and the environment.",
        date: "Feb 8, 2026",
        author: "Michael Chen",
        icon: "🌱",
        slug: "eco-friendly-cleaning",
    },
    {
        title: "How to Deep Clean Your Kitchen",
        excerpt: "A comprehensive guide to achieving a sparkling clean kitchen from top to bottom.",
        date: "Feb 5, 2026",
        author: "Emily Davis",
        icon: "🍳",
        slug: "deep-clean-kitchen",
    },
    {
        title: "Office Cleaning Best Practices",
        excerpt: "Essential tips for maintaining a clean and productive workspace.",
        date: "Feb 3, 2026",
        author: "James Wilson",
        icon: "💼",
        slug: "office-cleaning-practices",
    },
    {
        title: "Carpet Care 101",
        excerpt: "Everything you need to know about keeping your carpets fresh and clean.",
        date: "Feb 1, 2026",
        author: "Lisa Anderson",
        icon: "🧹",
        slug: "carpet-care-101",
    },
    {
        title: "Spring Cleaning Checklist",
        excerpt: "Your complete guide to tackling spring cleaning like a pro.",
        date: "Jan 28, 2026",
        author: "David Martinez",
        icon: "✨",
        slug: "spring-cleaning-checklist",
    },
];
