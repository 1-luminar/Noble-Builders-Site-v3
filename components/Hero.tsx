'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="home" ref={ref} className="relative h-[92vh] w-full">
      <div
        className="parallax absolute inset-0"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div style={{ y }} className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-glass backdrop-blur-2xl md:p-14">
          <h1 className="font-display text-4xl leading-tight text-white drop-shadow md:text-6xl">
            Modern Mountain Living,<br /> Crafted with Precision
          </h1>
          <p className="mt-6 max-w-3xl text-warmWhite/90">
            Luxury homes and cabins across the High Country—Boone, Banner Elk, and beyond. Built with integrity, craftsmanship, and natural harmony.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
              Start Your Project
            </a>
            <a href="#projects" className="rounded-xl border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
