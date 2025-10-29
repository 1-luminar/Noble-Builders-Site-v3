import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "./cn";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-colors",
      solid ? "bg-white/90 backdrop-blur-md shadow" : "bg-white/10 backdrop-blur-md"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Noble Builders" className="h-8 w-auto" />
          <span className="tracking-widest text-sm font-medium">NOBLE BUILDERS, INC.</span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {["Our Story","Projects","Services","Contact"].map((label) => {
            const href = "#" + label.toLowerCase().replace(/\s+/g, "-");
            return <a key={label} href={href} className="text-sm hover:opacity-80">{label}</a>;
          })}
        </div>
        <a href="#contact" className="rounded-2xl bg-forest px-4 py-2 text-xs font-semibold text-white hover:opacity-90">
          START YOUR PROJECT
        </a>
      </nav>
    </header>
  );
}
