import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CaseStudy } from "@/components/CaseStudy";
import { AdditionalWork } from "@/components/AdditionalWork";
import { FindMeAt } from "@/components/FindMeAt";
import profilePhoto from "@/assets/profile-photo.jpg";
import divvyImage from "@/assets/acquisition.png";
import battlecardImage from "@/assets/bill-battlecard.png";

// Values
const values = [
  { title: "Openness", description: "Different perspectives lead to better outcomes." },
  { title: "Curiosity", description: "Interest and questions fuel learning." },
  { title: "Trust", description: "Psychological safety in a team empowers everyone." },
];

// CSS classes for scroll animation
const slideInClass = "opacity-0 translate-y-8 animate-fade-slide-up";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto ${slideInClass}`}>
            {/* Profile Photo */}
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/50 max-w-md mx-auto w-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={profilePhoto}
                alt="Erica - Fintech Product Marketing Leader"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
                Hello there! I'm Erica
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a fintech product leader with 7+ years of experience launching payments and card products at
                  high-growth B2B and B2C startups. Working across both sides of the market has given me a rare vantage
                  point: I understand not just how financial products work, but how people feel about money—and what
                  actually motivates them to trust, adopt, and keep using a product.
                </p>
                <p>
                  In a market crowded with increasingly similar offerings, I focus on translating complex financial
                  products into clear, human messaging that fits naturally into customers' lives. I believe this ability
                  to deeply understand customers—and communicate value with precision—will be a key differentiator as AI
                  lowers the barrier to building.
                </p>
                <p>
                  Outside of work, I vibe code with friends, where I lead thoughtful messaging and positioning often
                  making the difference between shipping and success.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-2">
                  If you'd like to chat about a project or opportunity you can reach me at:
                </p>
                <a
                  href="mailto:erica.sy.ho@gmail.com"
                  className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                >
                  erica.sy.ho@gmail.com
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto ${slideInClass}`}>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">My Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Notable PMM Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto ${slideInClass}`}>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center">Notable PMM Work</h2>
            <div className="space-y-0 divide-y divide-border/50">
              <CaseStudy
                title="BILL × Divvy acquisition"
                titleLink="https://www.bill.com/blog/divvy-joins-bill"
                impact="Crafted unified positioning that brought together BILL's AP automation and Divvy's expense management—helping transition 2.4M+ customers to the new brand identity."
                whatIDid={[
                  "Developed unified brand positioning framework",
                  "Created customer communication strategy for the transition",
                  "Collaborated with cross-functional teams on messaging alignment"
                ]}
                image={divvyImage}
              />
              <CaseStudy
                title="BILL Virtual Card Rewards"
                impact="Built the product marketing strategy for BILL's virtual card cashback program, creating sales enablement materials and competitive battlecards."
                whatIDid={[
                  "Developed competitive battlecards for sales team enablement",
                  "Created positioning against established market players",
                  "Built product marketing strategy for cashback program launch"
                ]}
                image={battlecardImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Work */}
      <AdditionalWork />

      {/* Find Me At */}
      <FindMeAt />
    </Layout>
  );
}
