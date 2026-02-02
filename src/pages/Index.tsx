Oimport { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CaseStudy } from "@/components/CaseStudy";
import { AdditionalWork } from "@/components/AdditionalWork";
import { FindMeAt } from "@/components/FindMeAt";
import profilePhoto from "@/assets/profile-photo.jpg";
import divvyImage from "@/assets/acquisition.png";
import billVirtualCardImage from "@/assets/bill-virtual-card-battlecard.png";
import { motion } from "framer-motion";

const values = [
  { title: "Openness", description: "Different perspectives lead to better outcomes." },
  { title: "Curiosity", description: "Interest and questions fuel learning." },
  { title: "Impact", description: "Prioritize for outsized business results." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/50 max-w-md mx-auto w-full shadow-lg">
              <img
                src={profilePhoto}
                alt="Erica - Fintech Product Marketing Leader"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Hello there! I'm Erica</h1>

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
                  Outside of work, I vibe code with friends, where I lead customer segmentation and craft thoughtful
                  messaging as a differentiator for success.
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
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">My Values</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Worked At */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CompanyLogos />
      </motion.div>

      {/* Notable PMM Work */}
      <section className="pt-16 md:pt-20 pb-8 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Notable PMM Work</h2>

            <CaseStudy
              title="Dave Debit Card Rewards — Positioning & Messaging"
              impact={
                <span>
                  Established clear category differentiation by positioning Dave Debit Card Rewards as the only debit
                  card rewards program offering cash back on all purchases, driving a 27% increase in debit card
                  adoption.
                </span>
              }
              whatIDid={[
                "Led end-to-end positioning and messaging strategy grounded in competitive and customer insight",
                "Authored a competitive one-pager analyzing incumbent rewards programs to recommend a differentiated positioning",
                "Designed and executed an in-app painted door experiment to validate core value propositions, messaging hierarchy, and product–market fit",
                "Built an ROI and unit economics model across multiple cash-back scenarios to align positioning with sustainable growth and revenue goals",
                "Conducted customer interviews and surveys to diagnose comprehension gaps and refine the rewards value proposition and messaging framework",
              ]}
              // No image → placeholder shows
            />

            <CaseStudy
              title="BILL × Divvy — Acquisition Narrative & Customer Insights"
              image={divvyImage}
              impact={
                <span>
                  Influenced strategic direction for BILL's $2.5B acquisition of Divvy by owning customer and market
                  insights that shaped leadership narrative and decision-making.
                </span>
              }
              whatIDid={[
                "Owned customer discovery to uncover core jobs-to-be-done, unmet needs, and perception of BILL's brand across segments",
                "Defined and synthesized key customer personas emerging from distinct use cases and company sizes",
                "Led market and competitive analysis of expense management and accounts payable platforms, including positioning, differentiation, and whitespace",
                "Translated customer and market insights into a clear acquisition narrative via an executive one-pager and pitch deck",
                "Presented recommendations to executive leadership, directly informing acquisition strategy and rationale",
              ]}
            />

            <CaseStudy
              title="BILL Virtual Card Rewards — Sales Enablement"
              image={billVirtualCardImage}
              impact={
                <span>
                  Drove 5% increase in win rates and unlocked mid-market customers by enabling sales to position virtual
                  card rewards as a differentiated acquisition lever.
                </span>
              }
              whatIDid={[
                "Identified virtual card rewards as a high-impact acquisition lever by listening to sales and customer feedback",
                "Conducted competitive analysis on competitor reward programs to create rewards positioning and messaging hierarchy",
                "Developed sales enablement assets, including battle cards, talk tracks, call scripts, and training materials",
                "Led sales trainings and joined live sales calls to gather field feedback and iterated on messaging",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Work */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl border border-border/50 shadow-sm p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AdditionalWork />
          </motion.div>
        </div>
      </section>

      {/* Find Me At */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FindMeAt />
      </motion.div>
    </Layout>
  );
}
