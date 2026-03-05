import sys

file_path = 'src/app/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
content = content.replace(
'''import React from "react";
import Image from "next/image";''',
'''"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";'''
)

# Insert Variants before export default function Home()
content = content.replace(
'''export default function Home() {''',
'''const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6, ease: "backOut" } }
};

export default function Home() {'''
)

# 2. Hero Left Text Container
content = content.replace(
'''            <div className="flex flex-col items-start">''',
'''            <motion.div 
              className="flex flex-col items-start"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >'''
)

# Replace internal tags for hero
content = content.replace(
'''<h1 className="font-extrabold leading-snug text-[#00c0a3] mb-5">''',
'''<motion.h1 variants={fadeUpVariant} className="font-extrabold leading-snug text-[#00c0a3] mb-5">'''
)
content = content.replace(
'''                <span className="block text-4xl md:text-5xl">
                  That Drive Revenue
                </span>
              </h1>''',
'''                <span className="block text-4xl md:text-5xl">
                  That Drive Revenue
                </span>
              </motion.h1>'''
)

content = content.replace(
'''<p className="text-[#1b273d] text-lg font-bold mb-3">''',
'''<motion.p variants={fadeUpVariant} className="text-[#1b273d] text-lg font-bold mb-3">'''
)

content = content.replace(
'''<p className="text-[#1b273d]/65 text-sm leading-relaxed max-w-sm mb-10">''',
'''<motion.p variants={fadeUpVariant} className="text-[#1b273d]/65 text-sm leading-relaxed max-w-sm mb-10">'''
)
content = content.replace(
'''                systems that drive sustainable growth.
              </p>''',
'''                systems that drive sustainable growth.
              </motion.p>'''
)
content = content.replace(
'''                Inconsistent Leads? Let&apos;s Fix That.
              </p>''',
'''                Inconsistent Leads? Let&apos;s Fix That.
              </motion.p>'''
)


content = content.replace(
'''<div className="flex items-center gap-5 mb-10">''',
'''<motion.div variants={fadeUpVariant} className="flex items-center gap-5 mb-10">'''
)

# Replace the closing tags for these
content = content.replace(
'''                <button className="bg-[#1b273d] text-white text-sm font-bold px-7 py-3 rounded-xl hover:bg-[#00c0a3] transition-colors duration-300 shadow-md">
                  Get a Free Growth Audit
                </button>
              </div>
            </div>''',
'''                <button className="bg-[#1b273d] text-white text-sm font-bold px-7 py-3 rounded-xl hover:bg-[#00c0a3] transition-colors duration-300 shadow-md">
                  Get a Free Growth Audit
                </button>
              </motion.div>
            </motion.div>'''
)

# 3. Hero Right Image
content = content.replace(
'''              <div
                className="relative z-10 w-full max-w-[460px] overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px",
                }}
              >''',
'''              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-[460px] overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "50% 50% 28px 28px / 40% 40% 28px 28px",
                }}
              >'''
)

content = content.replace(
'''                  priority
                />
              </div>''',
'''                  priority
                />
              </motion.div>'''
)

# 4. Hero Social Proof
content = content.replace(
'''<div className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white rounded-2xl shadow-2xl p-5 w-[240px]">''',
'''<motion.div 
                variants={popIn}
                initial="hidden"
                animate="visible"
                className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white rounded-2xl shadow-2xl p-5 w-[240px]"
              >'''
)

content = content.replace(
'''                {/* Stars */}
                <RatingStars rating={5} size={15} />
              </div>''',
'''                {/* Stars */}
                <RatingStars rating={5} size={15} />
              </motion.div>'''
)

# 5. Services Section Header
content = content.replace(
'''          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">''',
'''          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">'''
)

content = content.replace(
'''scalable lead systems, and automated follow-up processes that drive measurable, location-level growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">''',
'''scalable lead systems, and automated follow-up processes that drive measurable, location-level growth.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >'''
)

# Services Items
content = content.replace(
'''            {/* Service 1 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">''',
'''            {/* Service 1 */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">'''
)
content = content.replace(
'''            {/* Service 2 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">''',
'''            {/* Service 2 */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">'''
)
content = content.replace(
'''            {/* Service 3 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">''',
'''            {/* Service 3 */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">'''
)
content = content.replace(
'''            {/* Service 4 */}
            <div className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">''',
'''            {/* Service 4 */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-[20px] p-8 w-full max-w-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5 group hover:bg-[#1B2A45]">'''
)

content = content.replace(
'''              </Link>
            </div>
          </div>
        </div>
      </section>''',
'''              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>'''
)

# 6. Built for Franchise Growth
content = content.replace(
'''            {/* Left Image */}
            <div className="relative">''',
'''            {/* Left Image */}
            <motion.div 
              className="relative"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >'''
)

content = content.replace(
'''              {/* Background blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10"></div>
            </div>''',
'''              {/* Background blob */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-[#F0F4F8] rounded-[50px] -z-10"></div>
            </motion.div>'''
)


content = content.replace(
'''            {/* Right Content */}
            <div className="flex flex-col items-start">''',
'''            {/* Right Content */}
            <motion.div 
              className="flex flex-col items-start"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >'''
)

content = content.replace(
'''              <Button size="lg">Learn More About Us</Button>
            </div>
          </div>''',
'''              <Button size="lg">Learn More About Us</Button>
            </motion.div>
          </div>'''
)

# 7. Testimonials Section
content = content.replace(
'''          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
              Client Results''',
'''          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-white font-bold text-lg mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block">
              Client Results'''
)

content = content.replace(
'''              What Franchise Owners Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">''',
'''              What Franchise Owners Say About Us
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >'''
)

content = content.replace(
'''            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-[20px] shadow-lg border border-black/5 relative hover:-translate-y-2 transition-transform duration-300">''',
'''            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="bg-white p-8 rounded-[20px] shadow-lg border border-black/5 relative hover:-translate-y-2 transition-transform duration-300">'''
)

content = content.replace(
'''                <p className="text-text/80 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>''',
'''                <p className="text-text/80 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </motion.div>
            ))}
          </motion.div>'''
)

# 8. Blog Section
content = content.replace(
'''          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">''',
'''          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >'''
)

content = content.replace(
'''            <Button variant="outline">View All Posts</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">''',
'''            <Button variant="outline">View All Posts</Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >'''
)

content = content.replace(
'''            ].map((post, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">''',
'''            ].map((post, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group">'''
)

content = content.replace(
'''                  </Link>
                </div>
              </div>
            ))}
          </div>''',
'''                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>'''
)


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Animations applied to page.tsx")
