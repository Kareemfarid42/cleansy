import sys

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

normalized = content.replace('\r\n', '\n')

start_marker = '      {/* Services / What We Do Section */}'
end_marker = '      {/* About / Built for Franchise Growth Section */}'

start_idx = normalized.index(start_marker)
end_idx = normalized.index(end_marker)

# ─────────────────────────────────────────────────────────────────
# NEW SECTION: Services & Social Proof (3 parts)
# ─────────────────────────────────────────────────────────────────
new_section = r"""      {/* Services / What We Do Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: "#dce9f0",
          backgroundImage:
            "linear-gradient(rgba(27,42,69,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,42,69,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          {/* ── Section Header ── */}
          <motion.div
            className="text-center mb-20"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-white font-bold text-sm bg-[#1B2A45] px-5 py-2 rounded-full inline-block tracking-widest uppercase mb-5">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A45] leading-tight mt-4 mb-5">
              A Complete Digital Growth<br className="hidden md:block" /> System for Franchises
            </h2>
            <p className="text-[#1B2A45]/65 text-lg max-w-2xl mx-auto leading-relaxed">
              We help franchise brands build scalable lead systems, automated follow-up, and digital foundations that drive measurable location-level growth.
            </p>
          </motion.div>

          {/* ══════════════════════════════
              PART 1 — Staggered Cards
          ══════════════════════════════ */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card 1 — DARK, elevated */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-[#1B2A45] rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-[#1DD1A1] text-lg font-extrabold leading-snug">Digital Foundation &amp; Positioning</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                We build or fix the digital base your franchise grows on — stronger brand authority, higher conversions, scalable growth.
              </p>
              <span className="inline-flex items-center gap-1 text-[#1DD1A1] font-bold text-sm cursor-pointer hover:gap-2 transition-all">Learn more →</span>
            </motion.div>

            {/* Card 2 — LIGHT, pushed down */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 lg:mt-14"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{backgroundColor:"rgba(27,42,69,0.07)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
              </div>
              <h3 className="text-[#1B2A45] text-lg font-extrabold leading-snug">Lead Generation</h3>
              <p className="text-[#1B2A45]/55 text-sm leading-relaxed flex-1">
                Consistent, trackable leads across every territory. Predictable cost-per-lead, more booked appointments, better ROI.
              </p>
              <span className="inline-flex items-center gap-1 text-[#1B2A45] font-bold text-sm cursor-pointer hover:text-[#1DD1A1] hover:gap-2 transition-all">Learn more →</span>
            </motion.div>

            {/* Card 3 — DARK, elevated */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-[#1B2A45] rounded-3xl p-8 shadow-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-[#1DD1A1]/15 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1DD1A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#1DD1A1] text-lg font-extrabold leading-snug">Automation &amp; Follow-Up Systems</h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                Stop leads slipping through the cracks. Higher show-up rates, more closed deals, far less manual chaos at every location.
              </p>
              <span className="inline-flex items-center gap-1 text-[#1DD1A1] font-bold text-sm cursor-pointer hover:gap-2 transition-all">Learn more →</span>
            </motion.div>

            {/* Card 4 — LIGHT, pushed down */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 lg:mt-14"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{backgroundColor:"rgba(27,42,69,0.07)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1B2A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[#1B2A45] text-lg font-extrabold leading-snug">Growth &amp; Performance Optimization</h3>
              <p className="text-[#1B2A45]/55 text-sm leading-relaxed flex-1">
                Turn marketing data into scalable decisions. Lower acquisition cost, smarter scaling, happier franchisees across all locations.
              </p>
              <span className="inline-flex items-center gap-1 text-[#1B2A45] font-bold text-sm cursor-pointer hover:text-[#1DD1A1] hover:gap-2 transition-all">Learn more →</span>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════
              PART 2 — Central Image + Floating Pills
          ══════════════════════════════════════════ */}
          <div className="relative max-w-3xl mx-auto mt-28 flex justify-center">

            {/* Soft glow behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-[#1DD1A1]/12 blur-3xl -z-10" />

            {/* Main professional image */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop&crop=top"
                alt="ClienTech Marketing Expert"
                width={320}
                height={440}
                className="object-cover object-top rounded-3xl shadow-2xl"
                style={{ maxHeight: 440 }}
              />
            </motion.div>

            {/* ── Pill 1 — Left, floats up/down ── */}
            <motion.div
              className="hidden md:flex absolute top-1/4 -left-4 lg:-left-24 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[220px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              animate={{ y: [0, -10, 0] }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 ring-2 ring-[#1DD1A1]/50">
                <Image src="https://randomuser.me/api/portraits/men/31.jpg" alt="James R." fill className="object-cover" />
              </div>
              <div>
                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Doubled our lead volume!&rdquo;</p>
                <p className="text-[#1DD1A1] text-[10px] font-semibold mt-0.5">James R.</p>
              </div>
            </motion.div>

            {/* ── Pill 2 — Right, floats up/down with offset phase ── */}
            <motion.div
              className="hidden md:flex absolute top-1/3 -right-4 lg:-right-24 z-20 bg-[#1DD1A1] rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[220px]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              animate={{ y: [0, -10, 0] }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 ring-2 ring-white/40">
                <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah M." fill className="object-cover" />
              </div>
              <div>
                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Best ROI we&apos;ve seen.&rdquo;</p>
                <p className="text-[#1B2A45]/60 text-[10px] font-semibold mt-0.5">Sarah M.</p>
              </div>
            </motion.div>

            {/* ── Pill 3 — Bottom center, floats ── */}
            <motion.div
              className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 max-w-[250px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              animate={{ y: [-6, 4, -6] }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 ring-2 ring-[#1DD1A1]/50">
                <Image src="https://randomuser.me/api/portraits/men/22.jpg" alt="David C." fill className="object-cover" />
              </div>
              <div>
                <p className="text-[#1B2A45] text-xs font-bold leading-snug">&ldquo;Seamless automation setup.&rdquo;</p>
                <p className="text-[#1DD1A1] text-[10px] font-semibold mt-0.5">David C.</p>
              </div>
            </motion.div>

          </div>

          {/* ══════════════════════════════
              PART 3 — Bottom CTA
          ══════════════════════════════ */}
          <motion.div
            className="text-center mt-28"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-[#1B2A45] max-w-4xl mx-auto leading-tight mb-8">
              See inconsistent leads hurting your franchise? Hire our team — no stress, just growth.
            </h3>
            <button className="bg-[#1B2A45] text-white font-bold px-10 py-4 rounded-full text-base hover:bg-[#1DD1A1] hover:text-[#1B2A45] transition-all duration-300 shadow-xl inline-flex items-center gap-2 group">
              Let&apos;s chat <span className="text-xl group-hover:rotate-12 transition-transform duration-300">💬</span>
            </button>
          </motion.div>

        </div>
      </section>

      """

result = normalized[:start_idx] + new_section + normalized[end_idx:]

with open('src/app/page.tsx', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(result)

print("Done!")
print(f"Original: {len(content)} chars -> New: {len(result)} chars")
