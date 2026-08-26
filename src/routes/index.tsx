import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  BrandMoment,
  FinalCTA,
  Products,
  Services,
  Showcase,
  Technology,
  WhyRedCup,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

const TITLE = "Red Cup — Ideas In. Software Out.";
const DESCRIPTION =
  "Red Cup builds modern software, AI products, SaaS, web and mobile apps for people who want to build what's next.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandMoment />
        <Products />
        <Services />
        <Technology />
        <Showcase />
        <WhyRedCup />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
