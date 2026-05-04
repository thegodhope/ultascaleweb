'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, timeline } from '@/data/site';

const fadeIn = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.6 } };

export function HomeSections() {
  return (
    <>
      <section className="bg-hero-gradient py-24">
        <div className="container-padded text-center">
          <motion.p {...fadeIn} className="text-sm uppercase tracking-[0.2em] text-slate-300">Enterprise Growth Partner</motion.p>
          <motion.h1 {...fadeIn} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Build Bold. Scale Smart. Grow Revenue.</motion.h1>
          <motion.p {...fadeIn} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">Ultascale helps ambitious companies launch better products, build durable brands, optimize operations, and accelerate revenue with precision execution.</motion.p>
          <motion.div {...fadeIn} className="mt-10 flex items-center justify-center gap-4">
            <a href="#contact" className="rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-blue-500">Book Discovery Call</a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-6 py-3 hover:border-slate-200">Explore Services <ArrowRight size={16} /></a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="container-padded py-20">
        <h2 className="text-3xl font-semibold">Services Built for Scalable Growth</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.article key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <s.icon className="mb-4 text-accent" />
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {s.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container-padded py-20">
        <h2 className="text-3xl font-semibold">Why Choose Ultascale</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {['Multi-industry expertise', 'Outcome-driven engagements', 'Scalable operating systems', 'Long-term strategic partnership'].map((point) => (
            <div className="rounded-xl border border-white/10 p-5" key={point}><CheckCircle2 className="mr-2 inline text-accent" size={18} />{point}</div>
          ))}
        </div>
      </section>

      <section className="container-padded py-20">
        <h2 className="text-3xl font-semibold">Growth Journey Timeline</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {timeline.map((step, i) => <div key={step} className="rounded-xl border border-white/10 p-4 text-center"><p className="text-xs text-slate-400">Stage {i + 1}</p><p className="mt-2 font-medium">{step}</p></div>)}
        </div>
      </section>

      <section className="container-padded py-20">
        <h2 className="text-3xl font-semibold">Featured Case Study: Aroko Farms</h2>
        <div className="mt-8 rounded-2xl border border-white/10 bg-surface p-8">
          <p className="text-slate-300">Industry: Agriculture / Digital Presence</p>
          <p className="mt-3 text-slate-200">Scope: Website Development, Brand Positioning, and SEO Visibility. Ultascale modernized Aroko Farms’ digital presence, improved discoverability, and created a conversion-ready website experience.</p>
          <p className="mt-3 text-slate-200">Results: Increased organic visibility, stronger brand clarity, and improved inbound inquiry conversion.</p>
          <a href="#contact" className="mt-6 inline-block rounded-full border border-accent px-5 py-2 text-accent">View Full Case Study</a>
        </div>
      </section>

      <section id="contact" className="container-padded py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to Build Your Next Growth Engine?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Let’s align strategy, execution, and revenue outcomes with a senior team built for scale.</p>
          <p className="mt-6">Email: <a className="text-accent" href="mailto:hello@ultascale.com">hello@ultascale.com</a></p>
        </div>
      </section>
    </>
  );
}
