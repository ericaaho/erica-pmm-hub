import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";

const values = [
  {
    title: "Openness",
    description: "Different perspectives lead to better outcomes.",
  },
  {
    title: "Curiosity",
    description: "Interest and questions fuel learning.",
  },
  {
    title: "Trust",
    description: "Psychological safety in a team empowers everyone.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo Placeholder */}
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center border border-border/50 max-w-md mx-auto w-full">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-muted-foreground" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Your photo here</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
                Hello there! I'm Erica
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a fintech product leader with 7+ years of experience launching payments and card products at high-growth B2B and B2C startups. Working across both sides of the market has given me a rare vantage point: I understand not just how financial products work, but how people feel about money—and what actually motivates them to trust, adopt, and keep using a product.
                </p>
                <p>
                  In a market crowded with increasingly similar offerings, I focus on translating complex financial products into clear, human messaging that fits naturally into customers' lives. I believe this ability to deeply understand customers—and communicate value with precision—will be a key differentiator as AI lowers the barrier to building.
                </p>
                <p>
                  Outside of work, I "vibe code" with friends, turning ideas into real solutions. It's where I also see firsthand how thoughtful messaging and positioning often make the difference between shipping and success.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-2">If you'd like to chat about a project or opportunity:</p>
                <a 
                  href="mailto:your.email@example.com" 
                  className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                >
                  your.email@example.com
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
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              My Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
