with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize CRLF -> LF for processing
normalized = content.replace('\r\n', '\n')

start_marker = '      {/* Services / What We Do Section */}'
end_marker = '      {/* About / Built for Franchise Growth Section */}'

start_idx = normalized.index(start_marker)
end_idx = normalized.index(end_marker)

new_section = '''      {/* Services / What We Do Section */}
      <section className="pt-0 pb-24 bg-[#dce9f0] relative z-10">
        {/* Negative-margin container so cards visually overlap the section above */}
        <div className="container mx-auto px-4 max-w-6xl -mt-16">

          {/* Section badge + heading — fade up */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-2 mb-4">
              A Complete Digital Growth<br className="hidden md:block" /> System for Franchises
            </h2>
            <p className="text-[#1B2A45]/65 text-lg max-w-2xl mx-auto leading-relaxed">
              We help franchise brands build scalable lead systems, automated follow-up processes, and digital foundations that drive measurable, location-level growth.
            </p>
          </motion.div>

          {/* ── 4-column staggered card grid ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* ── Card 1 — DARK (elevated / no top shift) ── */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-[#1B2A45] rounded-3xl p-8 shadow-2xl flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Icon bubble */}
              <div className="w-16 h-16 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center shrink-0">
                {/* Layers / Foundation icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1DD1A1] text-xl font-extrabold leading-snug mb-3">
                  Digital Foundation<br />&amp; Positioning
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  We build or fix the digital base your franchise grows on — stronger brand authority, higher conversions, and a scalable growth foundation.
                </p>
              </div>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1 text-[#1DD1A1] font-bold text-sm hover:gap-2 transition-all cursor-pointer">
                  Learn more <span>→</span>
                </span>
              </div>
            </motion.div>

            {/* ── Card 2 — LIGHT (pushed lower with lg:mt-12) ── */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300 lg:mt-12"
            >
              <div className="w-16 h-16 bg-[#1B2A45]/08 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27,42,69,0.07)'}}>
                {/* Target / funnel icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1B2A45] text-xl font-extrabold leading-snug mb-3">
                  Lead<br />Generation
                </h3>
                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">
                  Consistent, trackable leads across every territory. Predictable cost-per-lead, more booked appointments, better ROI throughout.
                </p>
              </div>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1 text-[#1B2A45] font-bold text-sm hover:text-[#1DD1A1] hover:gap-2 transition-all cursor-pointer">
                  Learn more <span>→</span>
                </span>
              </div>
            </motion.div>

            {/* ── Card 3 — DARK (elevated / no top shift) ── */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-[#1B2A45] rounded-3xl p-8 shadow-2xl flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center shrink-0">
                {/* Lightning bolt / automation icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1DD1A1] text-xl font-extrabold leading-snug mb-3">
                  Automation &amp;<br />Follow-Up Systems
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  Stop leads slipping through the cracks. Higher show-up rates, more closed deals, and far less manual chaos across your locations.
                </p>
              </div>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1 text-[#1DD1A1] font-bold text-sm hover:gap-2 transition-all cursor-pointer">
                  Learn more <span>→</span>
                </span>
              </div>
            </motion.div>

            {/* ── Card 4 — LIGHT (pushed lower with lg:mt-12) ── */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300 lg:mt-12"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(27,42,69,0.07)'}}>
                {/* Upward chart / growth icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1B2A45] text-xl font-extrabold leading-snug mb-3">
                  Growth &amp; Performance<br />Optimization
                </h3>
                <p className="text-[#1B2A45]/60 text-sm leading-relaxed">
                  Turn marketing data into scalable decisions. Lower acquisition cost, smarter scaling, and happier franchisees across every location.
                </p>
              </div>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1 text-[#1B2A45] font-bold text-sm hover:text-[#1DD1A1] hover:gap-2 transition-all cursor-pointer">
                  Learn more <span>→</span>
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* ── Bottom CTA ── */}
          <motion.div
            className="mt-20 text-center"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1B2A45] max-w-xl mx-auto mb-8 leading-tight">
              See inconsistent leads hurting your franchise? Hire our team — no stress, just growth.
            </h3>
            <button className="bg-[#1B2A45] text-white font-bold px-10 py-4 rounded-full text-base hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 shadow-xl inline-flex items-center gap-2">
              Let&apos;s chat <span>💬</span>
            </button>
          </motion.div>

        </div>
      </section>

      '''

result = normalized[:start_idx] + new_section + normalized[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(result)

print("Done! File updated successfully.")
print(f"Original length: {len(content)}, New length: {len(result)}")
