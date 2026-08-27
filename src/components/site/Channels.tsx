import { ArrowUpRight, Gamepad2, Gem, Instagram, Mic, Palette, Youtube } from "lucide-react";
import { Reveal } from "./Reveal";
import bb1 from "@/assets/channel-bb-1.jpg";
import bb2 from "@/assets/channel-bb-2.jpg";
import bb3 from "@/assets/channel-bb-3.jpg";
import p11 from "@/assets/channel-p1-1.jpg";
import p12 from "@/assets/channel-p1-2.jpg";
import p13 from "@/assets/channel-p1-3.jpg";
import es1 from "@/assets/channel-es-1.jpg";
import es2 from "@/assets/channel-es-2.jpg";
import es3 from "@/assets/channel-es-3.jpg";
import sf1 from "@/assets/channel-sf-1.jpg";
import sf2 from "@/assets/channel-sf-2.jpg";
import sf3 from "@/assets/channel-sf-3.jpg";

type ChannelLink = {
  label: string;
  href: string;
  icon: typeof Youtube;
  primary?: boolean;
};

type Channel = {
  icon: typeof Mic;
  name: string;
  category: string;
  desc: string;
  badge: string;
  thumbs: { src: string; alt: string }[];
  links: ChannelLink[];
};

const CHANNELS: Channel[] = [
  {
    icon: Gamepad2,
    name: "Bouncin Buddies",
    category: "Kids & Entertainment",
    desc: "Roblox-style animated shorts for toddlers & kids.",
    badge: "Weekly New Content",
    thumbs: [
      { src: bb1, alt: "Bouncin Buddies trampoline short" },
      { src: bb2, alt: "Bouncin Buddies rainbow slide short" },
      { src: bb3, alt: "Bouncin Buddies birthday party short" },
    ],
    links: [
      { label: "YouTube", href: "https://youtube.com/@bouncinbuddies", icon: Youtube, primary: true },
      { label: "Instagram", href: "https://www.instagram.com/b0uncin.buddies", icon: Instagram },
    ],
  },
  {
    icon: Mic,
    name: "Pod1 Snaps",
    category: "Podcast Clips & Knowledge",
    desc: "Premium podcast clips, knowledge drops & live stream highlights.",
    badge: "YouTube Exclusive",
    thumbs: [
      { src: p11, alt: "Pod1 Snaps studio microphone clip" },
      { src: p12, alt: "Pod1 Snaps podcast conversation clip" },
      { src: p13, alt: "Pod1 Snaps audio waveform clip" },
    ],
    links: [
      { label: "YouTube Only", href: "https://youtube.com/@pod1snaps", icon: Youtube, primary: true },
    ],
  },
  {
    icon: Palette,
    name: "Elite Social",
    category: "Design & Social Management",
    desc: "Websites, branding & social media management for agencies & brands.",
    badge: "Agency Services",
    thumbs: [
      { src: es1, alt: "Elite Social website design case study" },
      { src: es2, alt: "Elite Social brand identity project" },
      { src: es3, alt: "Elite Social social media analytics" },
    ],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/elite.social.a1", icon: Instagram, primary: true },
    ],
  },
  {
    icon: Gem,
    name: "SheFiind",
    category: "Luxury Reselling",
    desc: "Curated luxury & high-end products reselling.",
    badge: "Luxury Lifestyle",
    thumbs: [
      { src: sf1, alt: "SheFiind luxury handbag" },
      { src: sf2, alt: "SheFiind luxury watch" },
      { src: sf3, alt: "SheFiind designer accessories" },
    ],
    links: [
      { label: "Instagram Shop", href: "https://www.instagram.com/shefind__", icon: Instagram, primary: true },
    ],
  },
];

export function Channels() {
  return (
    <section id="channels" className="relative px-4 py-28">
      <div className="ambient-red pointer-events-none absolute top-0 left-1/2 size-[700px] -translate-x-1/2 rounded-full opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-muted-foreground text-[11px] tracking-[0.3em] uppercase">
            The Red Cup Network
          </p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)]">
            MY CONTENT <span className="text-glow-red">UNIVERSE.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
            Entertainment, Knowledge, Design & Lifestyle — every channel, one
            home.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.08} className="h-full">
              <article className="glass glass-hover group flex h-full flex-col rounded-4xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="glass text-primary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                      <c.icon className="size-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="display text-xl tracking-[0.02em] sm:text-2xl">
                        {c.name}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-[11px] tracking-[0.22em] uppercase">
                        {c.category}
                      </p>
                    </div>
                  </div>
                  <span className="border-primary/30 bg-primary/10 text-primary shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase">
                    {c.badge}
                  </span>
                </div>

                <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {c.thumbs.map((t) => (
                    <figure
                      key={t.alt}
                      className="relative aspect-square overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={t.src}
                        alt={t.alt}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </figure>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
                  {c.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        l.primary
                          ? "bg-primary text-primary-foreground glow-red inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition-transform duration-300 hover:scale-[1.05]"
                          : "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition-colors duration-300 hover:border-white/30"
                      }
                    >
                      <l.icon className="size-4" />
                      {l.label}
                      <ArrowUpRight className="size-3.5 opacity-70" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
