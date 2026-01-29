import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CaseStudy } from "@/components/CaseStudy";
import { AdditionalWork } from "@/components/AdditionalWork";
import { FindMeAt } from "@/components/FindMeAt";
import profilePhoto from "@/assets/profile-photo.jpg";
import divvyImage from "@/assets/acquisition.png";

const values = [
  { title: "Openness", description: "Different perspectives lead to better outcomes." },
  { title: "Curiosity", description: "Interest and questions fuel learning." },
  { title: "Trust", description: "Psychological safety in a team empowers everyone." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
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
                <p>I'm a fintech product leader with 7+ years of experience launching payments and card products...</p>
                <p>In a market crowded with similar offerings, I focus on translating complex financial products...</p>
                <p>Outside of work, I vibe code with friends, leading thoughtful messaging and positioning...</p>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-2">If you'd like to chat about a project or opportunity:</p>
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">My Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companies Worked At */}
      <CompanyLogos />

      {/* Notable PMM Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Notable PMM Work</h2>

            <CaseStudy
              title="Dave Debit Card Rewards — Positioning & Messaging"
              impact={
                <>
                  Established clear category differentiation by positioning{" "}
                  <a
                    href="https://dave.com/cashback/terms"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Dave Debit Card Rewards
                  </a>{" "}
                  as the only debit card rewards program offering cash back on all purchases, driving a 27% increase in
                  debit card adoption.
                </>
              }
              whatIDid={[
                "Led end-to-end positioning and messaging strategy grounded in competitive and customer insight",
                "Authored a competitive positioning one-pager analyzing incumbent rewards programs",
                "Designed and executed an in-app painted door experiment to validate core value propositions",
                "Built an ROI and unit economics model across multiple cash-back scenarios",
                "Conducted customer interviews and surveys to refine rewards value proposition",
              ]}
            />

            <CaseStudy
              title="BILL × Divvy — Acquisition Narrative & Customer Insights"
              image={divvyImage}
              impact={
                <>
                  Influenced strategic direction for{" "}
                  <a
                    href="https://techcrunch.com/2021/05/06/why-did-bill-com-pay-2-5b-for-divvy/"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    BILL's $2.5B acquisition of Divvy
                  </a>{" "}
                  by owning customer and market insights that shaped leadership narrative and decision-making.
                </>
              }
              whatIDid={[
                "Owned customer discovery to uncover core jobs-to-be-done",
                "Defined key customer personas emerging from distinct use cases",
                "Led market and competitive analysis of expense management platforms",
                "Translated insights into a clear acquisition narrative via an executive one-pager",
                "Presented recommendations to executive leadership informing acquisition strategy",
              ]}
            />

            <CaseStudy
              title="BILL Virtual Card Rewards — Sales Enablement"
              impact={
                <>
                  Drove 5% increase in win rates and unlocked mid market customers by enabling sales to position{" "}
                  <a
                    href="https://www.bill.com/product/rewards"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    virtual card rewards
                  </a>{" "}
                  as a differentiated acquisition lever.
                </>
              }
              whatIDid={[
                "Identified virtual card rewards as a high-impact acquisition lever",
                "Conducted competitive analysis on competitor reward programs",
                "Developed sales enablement assets including battle cards, talk tracks, and scripts",
                "Led sales trainings and joined live calls to iterate messaging and enablement",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Divider + Additional PMM Work */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Modern gradient divider */}
            <hr className="border-t-2 border-gradient-to-r from-transparent via-border/50 to-transparent mb-6" />
            <AdditionalWork />
          </div>
        </div>
      </section>

      {/* Find Me At */}
      <FindMeAt />
    </Layout>
  );
}
