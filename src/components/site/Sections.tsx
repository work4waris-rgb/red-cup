import { motion } from "motion/react";
import { ArrowUpRight, Bot, Cloud, Globe, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import logo from "@/assets/redcup-logo.png";
import mockupAi from "@/assets/mockup-ai.jpg";
import mockupMobile from "@/assets/mockup-mobile.jpg";
import mockupAutomation from "@/assets/mockup-automation.jpg";

export function BrandMoment() {
  return (
    <section className="relative overflow-hidden px-4 py-32">
      <div className="ambient-red pointer-events-none absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="relative mx-auto w-fit">
            <svg
              viewBox="0 0 400 400"
              className="text-primary/30 absolute inset-0 size-full"
              aria-hidden="true"
            >
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={110 + i * 34}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="6 14"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 46 + i * 16, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                />
              ))}
            </svg>
            <img
              src={logo}
              alt="Red Cup brand mark"
              loading="lazy"
              width={220}
              height={220}
              className="animate-float relative size-44 object-contain sm:size-56"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-12 text-[clamp(2.2rem,6vw,4.5rem)]">
            A LITTLE RED.
            <br />A LOT OF CODE.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-muted-foreground mx-auto mt-6 max-w-lg leading-relaxed">
            We're building software with the simplicity of a cup of coffee and the
            ambition of the next generation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    icon: Bot,
    title: "AI PRODUCTS",
    desc: "Intelligent tools designed to automate and accelerate work.",
  },
  {
    icon: Cloud,
    title: "SAAS",
    desc: "Scalable cloud software built for modern businesses.",
  },
  {
    icon: Globe,
    title: "WEB APPS",
    desc: "Fast, responsive and beautifully designed web applications.",
  },
  {
    icon: Smartphone,
    title: "MOBILE",
    desc: "Modern mobile experiences designed around real users.",
  },
];

export function Products() {
  return (
    <section id="products" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2.2rem,6vw,4.5rem)]">
            BUILT FOR WHAT'S NEXT.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
            We create digital products that turn complicated ideas into simple
            experiences.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ rotateX: 4, rotateY: -4 }}
                style={{ transformPerspective: 900 }}
                className="glass glass-hover h-full rounded-3xl p-7"
              >
                <p.icon className="text-primary size-8" strokeWidth={1.4} />
                <h3 className="display mt-10 text-xl tracking-[0.06em]">{p.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "IDEA", d: "Turn an idea into a clear product concept." },
  { n: "02", t: "DESIGN", d: "Create an intuitive and beautiful experience." },
  { n: "03", t: "BUILD", d: "Engineer fast, scalable and reliable software." },
  { n: "04", t: "LAUNCH", d: "Deploy, measure and continuously improve." },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)]">FROM ZERO TO SHIPPED.</h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="h-full">
              <div className="bg-background/70 hover:bg-accent/40 h-full p-8 transition-colors duration-500">
                <span className="display text-primary text-5xl">{s.n}</span>
                <h3 className="display mt-8 text-2xl">{s.t}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STACK = [
  "AI",
  "Cloud",
  "SaaS",
  "APIs",
  "Automation",
  "Analytics",
  "Web",
  "Mobile",
  "Database",
];

export function Technology() {
  return (
    <section id="solutions" className="relative overflow-hidden px-4 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)]">
            THE STACK BEHIND THE MAGIC.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-20 flex h-[420px] max-w-3xl items-center justify-center sm:h-[480px]">
          <div className="ambient-red animate-pulse-glow absolute size-[420px] rounded-full" />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="from-primary relative size-32 rounded-full bg-gradient-to-br to-white/90 shadow-[0_0_120px_oklch(0.56_0.222_26.5/60%)] sm:size-40"
          />
          {STACK.map((s, i) => {
            const angle = (i / STACK.length) * Math.PI * 2;
            const rx = 44;
            const ry = 38;
            return (
              <motion.span
                key={s}
                className="glass absolute rounded-full px-4 py-2 text-xs font-medium tracking-wide sm:text-sm"
                style={{
                  left: `${50 + Math.cos(angle) * rx}%`,
                  top: `${50 + Math.sin(angle) * ry}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {s}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "Nexora Intelligence",
    category: "AI Platform",
    desc: "A real-time analytics platform that turns raw model telemetry into decisions teams actually act on.",
    tags: ["AI", "Analytics", "Cloud"],
    image: mockupAi,
  },
  {
    name: "Orbit Flow",
    category: "Automation SaaS",
    desc: "Visual workflow automation with a node engine that runs millions of executions without breaking a sweat.",
    tags: ["SaaS", "Automation", "APIs"],
    image: mockupAutomation,
  },
  {
    name: "Vault Mobile",
    category: "Mobile Product",
    desc: "A finance app built around clarity — every screen removes a decision instead of adding one.",
    tags: ["Mobile", "Design", "Security"],
    image: mockupMobile,
  },
];

export function Showcase() {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)]">WE BUILD. WE SHIP.</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={0.05}>
              <article className="glass glass-hover overflow-hidden rounded-4xl p-3 sm:p-4">
                <div
                  className={`grid items-center gap-6 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={p.image}
                      alt={`${p.name} interface`}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-full w-full object-cover"
                    />
                    <div className="from-background/70 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
                  </figure>
                  <div className="px-4 py-6 sm:px-8">
                    <p className="text-primary text-[11px] tracking-[0.28em] uppercase">
                      {p.category}
                    </p>
                    <h3 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="glass text-muted-foreground rounded-full px-3 py-1.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#cta"
                      className="group text-foreground mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                    >
                      View Project
                      <ArrowUpRight className="text-primary size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { t: "SIMPLE", d: "We remove unnecessary complexity." },
  { t: "FAST", d: "We move from idea to working product quickly." },
  { t: "OBSESSED", d: "We care about every interaction." },
];

export function WhyRedCup() {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-muted-foreground text-[11px] tracking-[0.3em] uppercase">
            Why Red Cup?
          </p>
        </Reveal>
        <div className="mt-10 divide-y divide-white/8 border-y border-white/8">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.08}>
              <div className="group flex flex-col gap-3 py-10 md:flex-row md:items-baseline md:justify-between">
                <h3 className="display group-hover:text-glow-red text-[clamp(2.5rem,8vw,6rem)] transition-all duration-500">
                  {w.t}
                </h3>
                <p className="text-muted-foreground max-w-xs leading-relaxed md:text-right">
                  {w.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2rem,5vw,4rem)]">
              WE'RE BUILDING OUR OWN CORNER OF THE INTERNET.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Red Cup is a technology company focused on building software, digital
              products and experiences for the next generation.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href="#cta"
              className="bg-primary text-primary-foreground glow-red mt-9 inline-flex rounded-full px-7 py-4 text-sm font-semibold transition-transform duration-300 hover:scale-[1.04]"
            >
              Meet Red Cup
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <div className="glass relative flex aspect-square items-center justify-center overflow-hidden rounded-4xl">
            <div className="ambient-red absolute size-96 rounded-full" />
            <img
              src={logo}
              alt="Red Cup logo"
              loading="lazy"
              width={260}
              height={260}
              className="animate-float relative size-48 object-contain sm:size-64"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-4 py-36">
      <div className="ambient-red animate-pulse-glow pointer-events-none absolute top-1/2 left-1/2 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="glass animate-float pointer-events-none absolute top-24 left-8 hidden size-40 rounded-3xl opacity-50 lg:block" />
      <div className="glass animate-float pointer-events-none absolute right-10 bottom-24 hidden size-32 rounded-3xl opacity-50 lg:block" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.6rem,9vw,7rem)]">
            GOT AN IDEA?
            <br />
            <span className="text-glow-red">LET'S BUILD IT.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground mx-auto mt-7 max-w-md leading-relaxed">
            Your next product could start with one conversation.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#home"
              className="bg-primary text-primary-foreground glow-red inline-flex w-full justify-center rounded-full px-7 py-4 text-sm font-semibold transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
            >
              Start a Project
            </a>
            <a
              href="#products"
              className="glass inline-flex w-full justify-center rounded-full px-7 py-4 text-sm font-semibold transition-colors duration-300 hover:border-white/30 sm:w-auto"
            >
              Explore Red Cup
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
