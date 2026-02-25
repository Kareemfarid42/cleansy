import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";
import Button from "@/components/ui/Button";
import CompanyLogos from "@/components/CompanyLogos";
import RatingStars from "@/components/ui/RatingStars";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden bg-[#F0F4F8]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/bg1.png"
            alt="Background Pattern"
            fill
            className="object-cover object-top opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-start max-w-2xl">
              <AnimatedHeading
                prefix="Performance Marketing for"
                words={["Franchises", "Growth", "Scale"]}
                postfix="That Drive Revenue"
                className="mb-4"
              />

              <p className="text-[#1B2A45] text-2xl font-bold mb-4">
                Inconsistent Leads? Let&apos;s Fix That.
              </p>

              <p className="text-text/80 text-lg mb-10 leading-relaxed max-w-lg">
                We help franchise systems and independent franchise operators like home services, fitness studios, tutoring centers, and senior care companies build scalable digital foundations — combining strategy and conversion systems that drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button variant="primary" size="lg" className="shadow-lg shadow-[#1DD1A1]/30">
                  Get a Free Growth Audit
                </Button>

                <button className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CalendarCheck fill="currentColor" className="ml-1" />
                  </div>
                  <span className="font-bold text-primary text-lg">Book a Strategy Call</span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image & Avatars */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10 mb-10 ml-auto w-full max-w-[500px]">
                <div className="aspect-[4/5] relative rounded-[20px] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
                    alt="Franchise Growth Marketing Professional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Avatar Card */}
              <div className="absolute -bottom-10 left-0 md:-left-10 z-20 bg-[#F0F4F8]/90 backdrop-blur-sm p-6 rounded-[20px] shadow-xl border border-white/50 max-w-[350px] animate-bounce-slow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                        <Image
                          src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                          alt="Franchise Owner"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-sm relative z-10">
                      +40
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold text-[#1B2A45]">40+ Franchise Clients</div>
                    <p className="text-sm text-text/60">Trusted by franchise owners</p>
                  </div>
                  <div className="mb-1">
                    <RatingStars rating={5} size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="bg-white py-10">
        <CompanyLogos
          title="Trusted by Leading Franchise Systems"
          logos={[
            { id: 1, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo1.png" },
            { id: 2, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo2.png" },
            { id: 3, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo3.png" },
            { id: 4, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo4.png" }
          ]}
        />
      </section>

      {/* Services / What We Do Section */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
              A Complete Digital Growth System for Franchises
            </h2>
            <p className="text-text/80 text-lg leading-relaxed">
              We help franchise brands and independent franchise owners build strong digital foundations, scalable lead systems, and automated follow-up processes that drive measurable, location-level growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Service 1 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2942/2942076.png"
                  alt="Digital Foundation"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Digital Foundation<br />&amp; Positioning</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                We fix or build the digital base your franchise grows on. Stronger brand authority + higher conversion rates + scalable growth base.
              </p>
              <Link href="/services" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3050/3050365.png"
                  alt="Lead Generation"
                  width={40}
                  height={40}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Lead<br />Generation</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                We generate consistent, trackable leads across territories. Predictable cost-per-lead. More booked appointments. Better ROI.
              </p>
              <Link href="/services" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3050/3050454.png"
                  alt="Automation"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Automation &amp;<br />Follow-Up Systems</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                We stop leads from slipping through the cracks. Higher show-up rates. More closed deals. Less manual chaos.
              </p>
              <Link href="/services" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2829/2829699.png"
                  alt="Growth Optimization"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Growth &amp; Performance<br />Optimization</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                We turn marketing data into scalable growth decisions. Lower acquisition cost + smarter scaling + happier franchisees.
              </p>
              <Link href="/services" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Built for Franchise Growth Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative z-10 rounded-[20px] rounded-br-[200px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
                  alt="Franchise Growth Team"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Decorative floating card */}
              <div className="absolute top-10 -left-10 z-20 bg-[#1B2A45] p-8 rounded-[20px] shadow-xl max-w-[250px] hidden md:block animate-float">
                <div className="text-4xl font-extrabold text-[#1DD1A1] mb-2">20+</div>
                <div className="text-white font-bold text-lg leading-tight">Years of Experience</div>
              </div>

              {/* Background blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                Built for Franchise Growth
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6 leading-tight">
                We Build the Digital Infrastructure Behind Scalable Franchises
              </h2>
              <p className="text-text/80 text-lg mb-8 leading-relaxed">
                Franchise growth is complex. Balancing brand consistency, local marketing, lead quality, franchisee satisfaction, and ROI isn&apos;t easy — especially when every location performs differently. We help franchise brands and independent franchise owners build strong digital foundations, scalable lead systems, and automated follow-up processes that drive measurable, location-level growth. This isn&apos;t just marketing. It&apos;s a digital transformation built for franchise scale.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                {[
                  "Built for Multi-Location Models",
                  "Lead Generation + Automation",
                  "Transparent, Location-Level Reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-[15px] bg-[#F0F4F8] hover:bg-[#1DD1A1]/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#1B2A45] flex items-center justify-center text-[#1DD1A1] shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <span className="text-[#1B2A45] font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#1B2A45] text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/footer-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Happy Clients" },
              { number: "250+", label: "Projects Done" },
              { number: "50+", label: "Employees" },
              { number: "7+", label: "Award Winner" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-extrabold text-[#1DD1A1] mb-2">{stat.number}</span>
                <span className="text-lg font-bold text-white/90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
              What Franchise Owners Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "James Rodriguez",
                role: "Home Services Franchise Owner",
                quote: "CTS transformed our lead generation completely. We went from inconsistent month-to-month results to a predictable pipeline of qualified leads across all 3 of our locations."
              },
              {
                name: "Sarah Mitchell",
                role: "Fitness Studio Franchisee",
                quote: "The automation systems they set up saved us hours every week. Leads now get followed up automatically, our show-up rates doubled, and our cost-per-acquisition dropped by 40%."
              },
              {
                name: "David Chen",
                role: "Senior Care Franchise Director",
                quote: "What sets CTS apart is they understand the franchise model. They built systems that work at both the corporate level and for each individual location. Incredibly transparent reporting too."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-[20px] shadow-lg border border-black/5 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#1DD1A1] rounded-full flex items-center justify-center text-white text-3xl font-serif">
                  &quot;
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${i * 10 + 20}.jpg`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B2A45]">{testimonial.name}</h4>
                    <p className="text-sm text-text/60">{testimonial.role}</p>
                    <RatingStars rating={5} size={14} className="mt-1" />
                  </div>
                </div>
                <p className="text-text/80 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                FAQs
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-text/80 text-lg mb-8 leading-relaxed">
                Book a strategy call and we&apos;ll assess your current digital infrastructure, lead flow, and growth opportunities.
              </p>

              <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden mt-8 hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Franchise Strategy Session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1B2A45]/30"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[15px] text-center">
                  <p className="font-bold text-[#1B2A45] mb-1">Still Have Questions About Scaling Your Franchise?</p>
                  <Link href="/contact" className="text-[#1B2A45] font-extrabold hover:text-[#1DD1A1] underline transition-colors">Book a Growth Strategy Session</Link>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Component */}
            <div className="w-full">
              <FAQAccordion
                items={[
                  {
                    id: "1",
                    question: "Do you work with franchisors or individual franchise owners?",
                    answer: "We support both centralized franchise brands and independent franchise owners. Whether marketing is controlled at the corporate level or managed locally, we build systems that align brand consistency with location-level performance."
                  },
                  {
                    id: "2",
                    question: "Can you generate leads for individual franchise locations?",
                    answer: "Yes. We create territory-based campaigns using Google Ads, Meta Ads, and local landing pages designed to drive high-quality leads specific to each franchise location."
                  },
                  {
                    id: "3",
                    question: "How do you ensure brand consistency across locations?",
                    answer: "We build structured digital foundations — including standardized messaging, conversion frameworks, and tracking systems — while allowing flexibility for local targeting and budget control."
                  },
                  {
                    id: "4",
                    question: "Do you offer CRM setup and automation?",
                    answer: "Absolutely. We implement CRM systems, automated follow-ups (SMS & email), missed-call text-back, pipeline tracking, and performance dashboards to ensure no lead is wasted."
                  },
                  {
                    id: "5",
                    question: "How do you measure ROI for franchise marketing?",
                    answer: "We track every click, call, form submission, and booked appointment. Our reporting provides visibility at both the campaign level and location level so you know exactly what's working."
                  },
                  {
                    id: "6",
                    question: "How quickly can we see results?",
                    answer: "Paid media campaigns can begin generating leads within weeks. However, building a scalable, optimized franchise growth system typically takes 60–90 days for full performance maturity."
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                Our Blog
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-4">
                Franchise Growth Insights &amp; Strategies
              </h2>
            </div>
            <Button variant="outline">View All Posts</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Build a Scalable Lead System for Your Franchise",
                category: "Lead Generation",
                img: "1584621172942-076f8eb3d5c5"
              },
              {
                title: "Why Franchise Marketing Fails — And How to Fix It",
                category: "Franchise Strategy",
                img: "1557804506-669a67965ba0"
              },
              {
                title: "CRM Automation: The Secret Weapon for Franchise Growth",
                category: "Automation",
                img: "1518770660439-4636190af475"
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${post.img}?q=80&w=800&auto=format&fit=crop`}
                    alt="Blog"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1DD1A1] text-[#1B2A45] font-bold px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-text/60 mb-3">
                    <span>February 25, 2026</span>
                    <span>•</span>
                    <span>By CTS Team</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A45] mb-3 group-hover:text-[#1DD1A1] transition-colors">
                    {post.title}
                  </h3>
                  <Link href="#" className="font-bold text-[#1B2A45] underline decoration-[#1DD1A1] decoration-2 underline-offset-4 hover:text-[#1DD1A1] transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1B2A45] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DD1A1]/5 skew-x-12 transform origin-top-right"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 max-w-3xl mx-auto">
            Ready to Scale Your Franchise Growth?
          </h2>
          <p className="text-[#7FDED0] text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s build a digital foundation that drives consistent leads, stronger conversions, and more revenue across every franchise location.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#1DD1A1] text-[#1B2A45] hover:bg-white font-bold border-0">
              Book a Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B2A45]">
              Get a Free Growth Audit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
