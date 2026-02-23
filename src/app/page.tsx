import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
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
                prefix="Fast and Reliable"
                words={["Professional", "Trusted", "Quality"]}
                postfix="Cleaning Services"
                className="mb-8"
              />

              <p className="text-text/80 text-lg mb-10 leading-relaxed max-w-lg">
                Donec hendrerit ultricies velit, vel ullamcorper elit eleifend id. Lagusa in viverra lectus. Proin ac justo quis nunc varius cursus.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button variant="primary" size="lg" className="shadow-lg shadow-[#1DD1A1]/30">
                  Get Service
                </Button>

                <button className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Play fill="currentColor" className="ml-1" />
                  </div>
                  <span className="font-bold text-primary text-lg">Play video</span>
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
                    src="https://images.unsplash.com/photo-1581578731117-104f2a86318e?q=80&w=1000&auto=format&fit=crop"
                    alt="Cleaning Professional"
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
                          src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                          alt="User"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-sm relative z-10">
                      +2k
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold text-[#1B2A45]">1.256 reviews</div>
                    <p className="text-sm text-text/60">Trusted by customers</p>
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
          title="We work with more than 200 leading companies"
          logos={[
            { id: 1, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo1.png" },
            { id: 2, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo2.png" },
            { id: 3, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo3.png" },
            { id: 4, url: "https://elementor.altdesain.com/cleansy/wp-content/uploads/2025/04/logo-demo4.png" }
          ]}
        />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
              We Provide the Best Service for You
            </h2>
            <p className="text-text/80 text-lg leading-relaxed">
              Donec hendrerit ultricies velit, vel ullamcorper elit eleifend id. Lagusa in viverra lectus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Service 1 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2942/2942076.png"
                  alt="House Cleaning"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">House<br />Cleaning</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                Nulla mattis justo et leo tincidunt suscipit.
              </p>
              <Link href="/services/house-cleaning" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3050/3050365.png"
                  alt="Office Cleaning"
                  width={40}
                  height={40}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Office<br />Cleaning</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                Nulla mattis justo et leo tincidunt suscipit.
              </p>
              <Link href="/services/office-cleaning" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3050/3050454.png"
                  alt="Kitchen Cleaning"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Kitchen<br />Cleaning</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                Nulla mattis justo et leo tincidunt suscipit.
              </p>
              <Link href="/services/kitchen-cleaning" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">
              <div className="w-20 h-20 bg-[#F0F4F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1DD1A1]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2829/2829699.png"
                  alt="Vehicle Cleaning"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B2A45] mb-4 group-hover:text-[#1DD1A1]">Vehicle<br />Cleaning</h3>
              <p className="text-text/70 mb-6 group-hover:text-white/70">
                Nulla mattis justo et leo tincidunt suscipit.
              </p>
              <Link href="/services/vehicle-cleaning" className="inline-flex items-center text-[#1B2A45] font-bold group-hover:text-[#1DD1A1]">
                Read More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative z-10 rounded-[20px] rounded-br-[200px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop"
                  alt="Cleaning Team"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Decorative floating card */}
              <div className="absolute top-10 -left-10 z-20 bg-[#1B2A45] p-8 rounded-[20px] shadow-xl max-w-[250px] hidden md:block animate-float">
                <div className="text-4xl font-extrabold text-[#1DD1A1] mb-2">10+</div>
                <div className="text-white font-bold text-lg leading-tight">Years of Experience</div>
              </div>

              {/* Background blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6 leading-tight">
                We Are Professional Cleaning Services
              </h2>
              <p className="text-text/80 text-lg mb-8 leading-relaxed">
                Maecenas aliquet feugiat tellus. Sed at nisi tellus. Fusce cursus vehicula nisl id pharetra. Duis mauris nulla, tempor non vulputate in, ornare et enim.
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full">
                {["Experienced Staff", "High Quality Service", "Affordable Prices"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-[15px] bg-[#F0F4F8] hover:bg-[#1DD1A1]/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#1B2A45] flex items-center justify-center text-[#1DD1A1] shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <span className="text-[#1B2A45] font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg">More About Us</Button>
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
              { number: "485+", label: "Happy Clients" },
              { number: "687+", label: "Projects Done" },
              { number: "35+", label: "Employees" },
              { number: "12+", label: "Award Winner" }
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-[20px] shadow-lg border border-black/5 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#1DD1A1] rounded-full flex items-center justify-center text-white text-3xl font-serif">
                  "
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${i * 10 + 20}.jpg`}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1B2A45]">John Doe</h4>
                    <p className="text-sm text-text/60">Business Owner</p>
                    <RatingStars rating={5} size={14} className="mt-1" />
                  </div>
                </div>
                <p className="text-text/80 leading-relaxed italic">
                  "Donec hendrerit ultricies velit, vel ullamcorper elit eleifend id. Lagusa in viverra lectus. Proin ac justo quis nunc varius cursus."
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
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-text/80 text-lg mb-8 leading-relaxed">
                Maecenas aliquet feugiat tellus. Sed at nisi tellus. Fusce cursus vehicula nisl id pharetra.
              </p>

              <div className="relative h-[300px] w-full rounded-[20px] overflow-hidden mt-8 hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1527513123888-06ccb3f523c6?q=80&w=1000&auto=format&fit=crop"
                  alt="Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1B2A45]/30"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[15px] text-center">
                  <p className="font-bold text-[#1B2A45] mb-1">Have more questions?</p>
                  <Link href="/contact" className="text-[#1B2A45] font-extrabold hover:text-[#1DD1A1] underline transition-colors">Contact our support</Link>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Component */}
            <div className="w-full">
              <FAQAccordion
                items={[
                  { id: "1", question: "How do I book a service?", answer: "Donec hendrerit ultricies velit, vel ullamcorper elit eleifend id. Lagusa in viverra lectus." },
                  { id: "2", question: "Are your cleaners insured?", answer: "Maecenas aliquet feugiat tellus. Sed at nisi tellus. Fusce cursus vehicula nisl id pharetra." },
                  { id: "3", question: "What cleaning products do you use?", answer: "Duis mauris nulla, tempor non vulputate in, ornare et enim. Maecenas condimentum massa consectetur." },
                  { id: "4", question: "Can I schedule recurring cleanings?", answer: "Yes! We offer weekly, bi-weekly, and monthly cleaning schedules to fit your needs." }
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
                Latest News & Articles
              </h2>
            </div>
            <Button variant="outline">View All Posts</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1584621172942-076f8eb3d5c5' : i === 2 ? '1527513123888-06ccb3f523c6' : '1581578731117-104f2a86318e'}?q=80&w=800&auto=format&fit=crop`}
                    alt="Blog"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1DD1A1] text-[#1B2A45] font-bold px-3 py-1 rounded-full text-sm">
                    Cleaning Tips
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-text/60 mb-3">
                    <span>April 15, 2026</span>
                    <span>•</span>
                    <span>By Admin</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A45] mb-3 group-hover:text-[#1DD1A1] transition-colors">
                    The Best Way to Clean Your Home Efficiently
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
            Ready to Get Your Home Cleaned?
          </h2>
          <p className="text-[#7FDED0] text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to schedule your cleaning service. We offer flexible scheduling and affordable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#1DD1A1] text-[#1B2A45] hover:bg-white font-bold border-0">
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B2A45]">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
