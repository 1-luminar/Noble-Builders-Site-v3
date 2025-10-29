import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Noble Builders, Inc.</title>
        <meta name="description" content="Modern Mountain Living, Crafted with Precision." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main className="pt-24 text-charcoal">
        <Hero />
        <Section id="our-story" title="Our Story">
          <div className="grid gap-6 md:grid-cols-2">
            <p>
              Noble Builders crafts luxury mountain homes across the High Country. Our philosophy blends modern design
              with natural materials to create spaces that feel timeless, warm, and enduring.
            </p>
            <p>
              From initial concept to final handover, our team manages every step with integrity and precision. We
              prioritize clear communication, meticulous craftsmanship, and an unwavering commitment to quality.
            </p>
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <Gallery />
        </Section>
        <Section id="services" title="Services">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Custom Homes", desc: "Architecturally driven residences tailored to the site and your lifestyle." },
              { title: "Remodels & Additions", desc: "Elevate existing spaces with craftsmanship and smart updates." },
              { title: "Consulting", desc: "Feasibility, budgeting, and owner’s representation from day one." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-taupe/50 p-6 shadow">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section id="contact" title="Start Your Project">
          <ContactForm />
        </Section>
      </main>
      <footer className="mx-auto mt-10 max-w-6xl px-6 py-12 text-sm opacity-70">
        © {new Date().getFullYear()} Noble Builders, Inc. All rights reserved.
      </footer>
    </>
  );
}
