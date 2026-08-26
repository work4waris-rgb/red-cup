import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  delay: (i % 7) * 1.4,
  duration: 9 + (i % 5) * 2.5,
}));

function DashboardGlass() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 14 }}
      animate={{ opacity: 1, y: 0, rotateX: 8 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400 }}
      className="glass mx-auto mt-16 w-full max-w-4xl rounded-3xl p-3 sm:p-4"
    >
      <div className="bg-background/40 rounded-2xl border border-white/5 p-4 sm:p-6">
        <div className="flex items-center gap-2 pb-5">
          <span className="bg-primary size-2.5 rounded-full" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="text-muted-foreground ml-3 text-[11px] tracking-[0.2em] uppercase">
            redcup / console
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { k: "Deploys", v: "1,284" },
            { k: "Uptime", v: "99.99%" },
            { k: "Latency", v: "38ms" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl p-4 text-left">
              <p className="text-muted-foreground text-[11px] tracking-[0.18em] uppercase">
                {s.k}
              </p>
              <p className="display mt-2 text-2xl">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="glass mt-3 flex h-36 items-end gap-1.5 rounded-2xl p-4 sm:h-44">
          {[22, 38, 30, 52, 44, 66, 58, 78, 70, 92, 84, 100].map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.9 + i * 0.05, duration: 0.7, ease: "easeOut" }}
              className={`flex-1 rounded-t-sm ${
                i > 8 ? "bg-primary glow-red" : "bg-white/12"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-36 pb-24 sm:pt-44">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="ambient-red animate-pulse-glow pointer-events-none absolute -top-40 left-1/2 size-[820px] -translate-x-1/2 rounded-full" />
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="bg-primary/60 absolute size-[3px] rounded-full"
            style={{
              left: p.left,
              top: p.top,
              animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="animate-float glass pointer-events-none absolute top-52 -left-24 hidden size-72 rounded-full opacity-40 blur-2xl lg:block" />
      <div className="animate-float glass pointer-events-none absolute top-80 -right-24 hidden size-80 rounded-full opacity-40 blur-2xl lg:block" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] tracking-[0.28em] uppercase"
        >
          <span className="bg-primary glow-red size-1.5 rounded-full" />
          Red Cup / Software Company
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-8 text-[clamp(2.8rem,10vw,8rem)]"
        >
          IDEAS IN.
          <br />
          <span className="text-glow-red">SOFTWARE</span> OUT.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-muted-foreground mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
        >
          Red Cup builds modern software, AI products and digital experiences for people
          who want to build what's next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#products"
            className="bg-primary text-primary-foreground glow-red group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
          >
            Explore Products
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#cta"
            className="glass text-foreground inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:border-white/30 sm:w-auto"
          >
            Start Building
          </a>
        </motion.div>

        <DashboardGlass />
      </div>
    </section>
  );
}
