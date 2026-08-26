import { Logo } from "./Logo";

const LINKS = ["Products", "Solutions", "Services", "About", "Contact"];
const SOCIAL = ["Instagram", "YouTube", "LinkedIn", "GitHub"];

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Logo size={30} />
            <p className="text-muted-foreground mt-4 text-sm">Ideas In. Software Out.</p>
          </div>
          <div className="flex gap-16">
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {SOCIAL.map((l) => (
                <li key={l}>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-14 text-xs">
          © 2026 Red Cup. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
