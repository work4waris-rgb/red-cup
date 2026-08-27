import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Channels", href: "#channels" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
        <nav
          className={`glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2.5 pr-2.5 pl-4 transition-all duration-500 sm:pl-5 ${
            scrolled ? "glow-red bg-background/60" : ""
          }`}
        >
          <a href="#home" className="shrink-0">
            <Logo size={26} />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="bg-primary text-primary-foreground glow-red hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
            >
              Get Started
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="glass text-foreground flex size-10 items-center justify-center rounded-full md:hidden"
            >
              <Menu className="size-4.5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-background/80 fixed inset-0 z-60 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo size={26} />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="glass text-foreground flex size-10 items-center justify-center rounded-full"
              >
                <X className="size-4.5" />
              </button>
            </div>
            <ul className="mt-6 flex flex-col gap-2 px-6">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display block border-b border-white/5 py-4 text-4xl"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pt-8">
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground glow-red flex justify-center rounded-full px-6 py-4 text-sm font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
