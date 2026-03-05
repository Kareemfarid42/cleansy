with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize line endings to LF for matching
normalized = content.replace('\r\n', '\n')

start_marker = '      {/* Services / What We Do Section */}'
end_marker = '      {/* About / Built for Franchise Growth Section */}'

start_idx = normalized.index(start_marker)
end_idx = normalized.index(end_marker)

new_section = '''      {/* Services / What We Do Section */}
      <section className="py-20 bg-[#dce9f0] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Section Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-white font-bold text-sm mb-4 bg-[#1B2A45] px-4 py-2 rounded-full inline-block tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] mt-4 mb-6 leading-tight">
              A Complete Digital Growth System for Franchises
            </h2>
            <p className="text-[#1B2A45]/70 text-lg leading-relaxed">
              We help franchise brands and independent owners build scalable lead systems and automated follow-up processes that drive measurable, location-level growth.
            </p>
          </motion.div>

          {/* 3-column: cards | image | cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px_1fr] gap-6 items-center">

            {/* ── LEFT COLUMN — Services 1 & 2 ── */}
            <motion.div
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Card 1 — Dark (elevated) */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-[#1B2A45] rounded-3xl p-7 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 lg:mr-[-20px]"
              >
                <div className="w-14 h-14 bg-[#1DD1A1]/20 rounded-2xl flex items-center justify-center mb-5">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2942/2942076.png"
                    alt="Digital Foundation"
                    width={30}
                    height={30}
                    className="brightness-200"
                  />
                </div>
                <h3 className="text-[#1DD1A1] text-xl font-extrabold mb-3 leading-snug">
                  Digital Foundation<br />& Positioning
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We fix or build the digital base your franchise grows on — stronger brand authority, higher conversions, scalable growth.
                </p>
              </motion.div>

              {/* Card 2 — White */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white rounded-3xl p-7 shadow-lg group hover:-translate-y-2 transition-transform duration-300 lg:ml-6"
              >
                <div className="w-14 h-14 bg-[#dce9f0] rounded-2xl flex items-center justify-center mb-5">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3050/3050365.png"
                    alt="Lead Generation"
                    width={30}
                    height={30}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-[#1B2A45] text-xl font-extrabold mb-3 leading-snug">
                  Lead<br />Generation
                </h3>
                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">
                  Consistent, trackable leads across all territories. Predictable cost-per-lead. More booked appointments. Better ROI.
                </p>
              </motion.div>
            </motion.div>

            {/* ── CENTER — Person Image + Floating Bubbles ── */}
            <motion.div
              className="relative flex justify-center items-end self-stretch min-h-[480px] order-first lg:order-none"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Grid background */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(rgba(27,42,69,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(27,42,69,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  backgroundColor: "#c8dce8",
                }}
              />

              {/* Person image */}
              <div className="relative z-10 w-full flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Marketing Professional"
                  width={300}
                  height={420}
                  className="object-cover object-top rounded-2xl shadow-2xl"
                  style={{ maxHeight: 420 }}
                />
              </div>

              {/* Floating review bubble — top left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-10 left-0 z-20 bg-white rounded-2xl shadow-xl p-3 max-w-[190px] flex items-start gap-2"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                  <Image src="https://randomuser.me/api/portraits/men/31.jpg" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[#1B2A45] text-xs font-semibold leading-tight">Leads doubled in just 60 days!</p>
                  <p className="text-[#1DD1A1] text-[10px] font-bold mt-0.5">James R.</p>
                </div>
              </motion.div>

              {/* Floating review bubble — right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-1/3 right-0 z-20 bg-[#1DD1A1] rounded-2xl shadow-xl p-3 max-w-[190px] flex items-start gap-2"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                  <Image src="https://randomuser.me/api/portraits/men/44.jpg" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[#1B2A45] text-xs font-semibold leading-tight">Done right — ROI was incredible!</p>
                  <p className="text-[#1B2A45]/60 text-[10px] font-bold mt-0.5">Sarah M.</p>
                </div>
              </motion.div>

              {/* Floating review bubble — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl p-3 max-w-[200px] flex items-start gap-2"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                  <Image src="https://randomuser.me/api/portraits/men/22.jpg" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[#1B2A45] text-xs font-semibold leading-tight">Best marketing partner we&apos;ve had!</p>
                  <p className="text-[#1DD1A1] text-[10px] font-bold mt-0.5">David C.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN — Services 3 & 4 ── */}
            <motion.div
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Card 3 — Dark (elevated) */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-[#1B2A45] rounded-3xl p-7 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 lg:ml-[-20px]"
              >
                <div className="w-14 h-14 bg-[#1DD1A1]/20 rounded-2xl flex items-center justify-center mb-5">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3050/3050454.png"
                    alt="Automation"
                    width={30}
                    height={30}
                    className="brightness-200"
                  />
                </div>
                <h3 className="text-[#1DD1A1] text-xl font-extrabold mb-3 leading-snug">
                  Automation &<br />Follow-Up Systems
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Stop leads slipping through cracks. Higher show-up rates, more closed deals, and far less manual chaos.
                </p>
              </motion.div>

              {/* Card 4 — White */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white rounded-3xl p-7 shadow-lg group hover:-translate-y-2 transition-transform duration-300 lg:mr-6"
              >
                <div className="w-14 h-14 bg-[#dce9f0] rounded-2xl flex items-center justify-center mb-5">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2829/2829699.png"
                    alt="Growth Optimization"
                    width={30}
                    height={30}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-[#1B2A45] text-xl font-extrabold mb-3 leading-snug">
                  Growth & Performance<br />Optimization
                </h3>
                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">
                  Turn marketing data into scalable growth decisions. Lower acquisition cost, smarter scaling, happier franchisees.
                </p>
              </motion.div>
            </motion.div>

          </div>

          {/* CTA row */}
          <motion.div
            className="mt-16 text-center"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1B2A45] max-w-2xl mx-auto mb-8 leading-tight">
              Ready to build a growth system that actually scales your franchise?
            </h3>
            <button className="bg-[#1B2A45] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 shadow-xl inline-flex items-center gap-3">
              Let&apos;s talk <span>💬</span>
            </button>
          </motion.div>

        </div>
      </section>

      '''

# Stitch the file back together
result = normalized[:start_idx] + new_section + normalized[end_idx:]

# Write back (preserve original line endings)
with open('src/app/page.tsx', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(result)

print("Done! File updated successfully.")
print(f"Original length: {len(content)}, New length: {len(result)}")
