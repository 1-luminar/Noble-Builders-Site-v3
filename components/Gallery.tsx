import { motion } from "framer-motion";

const items = Array.from({ length: 8 }).map((_, i) => ({
  src: "/hero.jpg", // placeholder using hero until more images provided
  title: `Residence ${i + 1}`,
}));

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {items.map((it, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="group overflow-hidden rounded-2xl border border-black/10 bg-white/5 shadow"
        >
          <img src={it.src} alt={it.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <figcaption className="p-4 text-sm">{it.title}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
